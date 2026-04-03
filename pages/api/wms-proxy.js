import https from "https";
import http from "http";
import NodeCache from "node-cache";

// Cache for 1 hour
const cache = new NodeCache({ stdTTL: 3600 });

export default function handler(req, res) {
  const { url: targetUrl } = req.query;

  if (!targetUrl) {
    return res.status(400).json({ error: "Missing 'url' parameter" });
  }

  // Check cache first
  const cachedData = cache.get(targetUrl);
  if (cachedData) {
    console.log(`Cache hit for: ${targetUrl}`);
    res.setHeader("Content-Type", cachedData.contentType);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).send(cachedData.body);
  }

  console.log(`Fetching: ${targetUrl}`);

  // Determine protocol
  const protocol = targetUrl.startsWith("https") ? https : http;

  protocol
    .get(targetUrl, (proxyRes) => {
      const chunks = [];

      proxyRes.on("data", (chunk) => {
        chunks.push(chunk);
      });

      proxyRes.on("end", () => {
        const body = Buffer.concat(chunks);
        const contentType = proxyRes.headers["content-type"] || "application/octet-stream";

        // Cache the response
        cache.set(targetUrl, { contentType, body });

        res.setHeader("Content-Type", contentType);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).send(body);
      });
    })
    .on("error", (err) => {
      console.error(`Proxy error: ${err.message}`);
      res.status(500).json({ error: "Proxy request failed", message: err.message });
    });
}
