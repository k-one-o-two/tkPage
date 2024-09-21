import { NoteImage } from '../components/noteImage';
import Head from 'next/head';

function Notes() {
  const notes = [];

  notes.push({
    title: 'Video with telemetry',
    html: (
      <div>
        <h3>Why</h3>
        <p>
          Imagine, you went for a ride and recorded a video of it. You have
          tried so hard, but in the end it doesn't even look fast. They call it
          a GoPro effect, and there is not much we can do about it. The obvious
          way to overcome it is to ride even faster or on more harsh terrain.
        </p>
        <p>
          But there's one more way - we can add some data on top of the video to
          make it at least a bit more entertaining.
        </p>
        <h3>How</h3>
        <p>We will need 3 things:</p>
        <ul>
          <li>
            <p>the video - any kind will do</p>
          </li>
          <li>
            <p>
              the data source - I've used gpx, but others might be used as well
            </p>
          </li>
          <li>
            <p>DashWare</p>
          </li>
        </ul>
        <p>
          So, we're gonna be using{' '}
          <a href="http://www.dashware.net/">DashWare</a> - it's a bit outdated
          piece of software which purpose is exactly what we need: adding data
          overlay.
        </p>
        <p>After installing it, create a new project:</p>
        <NoteImage src="/2/create.png"></NoteImage>
        <p>
          Here I have added a video from my camera, gpx is to be added later:
        </p>
        <NoteImage src="/2/data.png"></NoteImage>
        <p>
          Now we have to synchronize the video with the data, which might be
          really annoying task.
        </p>
        <NoteImage src="/2/sync.png"></NoteImage>
        <p>
          I've found out that the easiest way to do that is to add a digital
          speedometer to the video from the Gauge toolbox (any one will do) and
          find a place where you make a tight turn so your speed is minimal.
          Once you're happy with the position, check the "Synchronize with
          video" checkbox and take a look at other video parts.
        </p>
        <h3>Map data</h3>
        <p>
          There are quite a lot of different gauges to add, GPS map being one of
          them. The problem is that the map is not really a map, but just your
          track. Doesn't look too informative. Thankfully, there's a workaround:
          you may take a screenshot of the actual map (I've used my favorite{' '}
          <a href="http://maps.stamen.com/toner/">Stamen toner</a>) and use it
          as a background image in the map settings.
        </p>
        <NoteImage src="/2/align.png"></NoteImage>
        <p>
          It takes some alignment too, but you don't actually need to be that
          accurate
        </p>
        <p>Here's how the end result looks like:</p>
        <iframe
          src="https://www.youtube.com/embed/DvfDAEua6VI"
          title="the end result"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    ),
  });

  return notes.map((note, i) => (
    <div className="card" key={i}>
      <Head>
        <title>Dashware</title>
      </Head>
      <h3>{note.title}</h3>
      {note.html}
    </div>
  ));
}

export default Notes;
