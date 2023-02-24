import { NoteImage } from '../components/noteImage';

function Notes() {
  const notes = [];

  notes.push({
    title: 'Own rides map',
    html: (
      <div>
        <h3>Why</h3>
        <p>
          So, I have realized that I <i>need</i> to draw a map of my rides, and
          do it myself. Yeah, I know that there are a lot of tools out there,
          but this is not fun. I mean, doing what others have already done way
          better, suffering meanwhile is fun, right?
        </p>
        <h3>How</h3>
        <p>
          I use Strava, so I have decided to check how can it help me. You can
          actually export all your data from it. To do so, go to your account
          settings, you are looking for "Delete" section.
        </p>
        <NoteImage src="/1/delete.png"></NoteImage>
        <p>
          After pressing the "Get started" button, you will be able to "Request
          Your Archive" on the next page. You will get a zip archive soon after
          requesting it.
        </p>
        <NoteImage src="/1/gpxs.png"></NoteImage>
        <p>Great, right?</p>
        <h4>No.</h4>
        <p>
          The thing is, I use Suunto 5 watches to record my activities. It's
          good, but its output is not a gpx, but a fit file, even an archived
          one. So, along with some gpx files (I used Garmin Edge before), I have
          received a bunch if "fit.gz" ones
        </p>
        <p>
          First, I thought to try to use them as they are, but have failed to
          find a tool to batch convert them into the format I understand. Not
          that I was looking too hard, but still, It seemed not to be
          straightforward.
        </p>
        <h4>Let's get them from Strava then!</h4>
        <p>
          For every Strava activity you may get a gpx file, that's pretty simple
        </p>
        <NoteImage src="/1/export.png"></NoteImage>
        <p>
          Shortly, I've realized that I have to press this damn button quite a
          lot (yeah, I didn't bother to count) of times. So, let's automate! It
          was supposed to be fun, right?
        </p>
        <h4>A bit of code</h4>
        <p>
          So, I have downloaded one gpx and recorder my request using Fiddler.
          This gave me useful headers, that I could use to get other files.
          Actually, you only need to send the Cooke one. After a couple of
          minutes I came up with the following:
        </p>
        <pre>
          <code>{`
fs = require('fs');

const save = async (activity) => {
const myHeaders = new Headers();
myHeaders.append(
    'Cookie',
    'Cookie:
    sp=8e_strava_cbv2=true;..ff',
);

const res = await fetch(
    \`https://www.strava.com/
    activities/
    \${activity}/
    export_gpx\`,
    { headers: myHeaders },
);
`}</code>
        </pre>
        <p>
          The only thing - where do I get those ids? Luckily, there is an
          "activities" file in the export I've done before. So it was not
          completely useless, yay!
        </p>
        <p>So just put them into an array and call like that</p>
        <pre>
          <code>{`
names.forEach((name) => save(name));
            `}</code>
        </pre>
        <p>
          Surprisingly, there seems to be no limit on such requests, so after a
          short while, I've got all my desired files.
        </p>
        <h4>Now what?</h4>
        <p>
          QGIS. This is a powerful software, so I'm a bit ashamed to use it for
          such a small task, using like 10% of what it is capable of. But after
          all, I'm already using Lightroom to move a couple of sliders, so why
          not.
        </p>
        <p>
          Gpx can be imported by using "Layer &gt; Add Layer &gt; Add vector
          layer" menu.
        </p>
        <NoteImage src="/1/qgis1.png"></NoteImage>
        <p>
          The only thing I actually needed was a line. After adding them all,
          don't repeat my mistake and group them together, otherwise you'll keep
          copying a style from one line to the whole group, QGIS will consume
          all the RAM it could find.
        </p>
        <h4>Adding tiles</h4>
        <NoteImage src="/1/qgis2.png"></NoteImage>
        <p>
          I had to add some XYZ tiles. XYZ means that those tiles are obtained
          from a tile server by X and Y coordinates and a zoom level. You can
          add some manually, but it will require some manual work, which is no
          fun (which is still a goal of the whole thing). I have managed to find
          a script that will add some well-known tiles to QGIS:
          <br />
          <a href="https://raw.githubusercontent.com/klakar/QGIS_resources/master/collections/Geosupportsystem/python/qgis_basemaps.py">
            qgis_basemaps.py
          </a>
          <br />
          There is a Python console (Plugins &gt; Python Console). After running
          this script I've got a nice list of differently styled tiles.
        </p>
        <h3>Non-flat Earth</h3>
        <p>
          So far so good, but the map is flat, while I'd like to show that I
          sometimes suffer riding uphill. There are several ways to add
          elevation data to the map, but the easiest is to use a thing called
          "hillshade". This is pretty much self explanatory - this is a raster
          image of shades, produced by hills.
        </p>
        <p>
          After quite extensive googling (while I use duckduckgo, so...
          ducking?), I came across this resource
          <br />
          <a href="https://asiointi.maanmittauslaitos.fi/karttapaikka/?lang=en">
            asiointi.maanmittauslaitos.fi
          </a>
          <br />
          It allows to download quite a lot of stuff, the needed hillshade among
          them:
        </p>
        <NoteImage src="/1/hillshade.png"></NoteImage>
        <p>
          After "ordering" it, I have received a message from
          "no-reply@maanmittauslaitos.fi" with a download link. I've got some
          .tif files. Not knowing what am I supposed to do with them, I;ve just
          drag'n'dropped them in QGIS. Aaand it just worked, that simple.
        </p>
        <h3>Styling</h3>
        <p>
          To actually show the hillshade, I have put a map (OSM) on top of it,
          and made it's semi-transparent
        </p>
        <p>
          Now, combining all that I've done before, I have managed to display a
          non-flat map with my track on it, this is how it looks like
        </p>
        <NoteImage src="/1/hill.png"></NoteImage>
        <p>Well, in reality this hill looks a bit more impressive:</p>
        <NoteImage height={400} src="/1/view.jpg"></NoteImage>
        <h3>Adding speed</h3>
        <p>
          After performing all of this, I have decided to try and show my speed.
          Unfortunately, gpx track point does not contain speed, it looks like
          this:
        </p>
        <pre>
          <code>
            {`
<trkpt lat="60.1824680" lon="24.7411490">
  <ele>35.3</ele>
  <time>2023-02-14T12:15:00Z</time>
  <extensions>
    <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>76</gpxtpx:hr>
    </gpxtpx:TrackPointExtension>
  </extensions>
</trkpt>
`}
          </code>
        </pre>
        <p>
          There is a useful QGIS plugin, called{' '}
          <a href="https://anitagraser.com/2019/02/02/movement-data-in-gis-20-trajectools-v1-released/">
            Trajectools
          </a>
          , which can be used for exactly this task.
        </p>
        <NoteImage src="/1/trajectools.png"></NoteImage>
        <p>
          When installed It will add itself to the "Processing toolbox" panel.
          What I've used was "Basic &gt; Add speed (m/s) to points" This will
          create a new set of points, each of them contains a new value - speed.
        </p>
        <p>
          Now, let's colorize them. Unfortunately, I don't know how to colorize
          a line, so here's how to make it as line-like as possible.
        </p>
        <p>First, we need to color each point according to the speed.</p>
        <NoteImage src="/1/speed1.png"></NoteImage>
        <p>
          Here we may create an expression which will be used to calculate the
          color. It can look like this:
        </p>
        <pre>
          <code>
            {`ramp_color('blue2red', scale_linear(meters_per_sec * 3600 / 1000, 0, 30, 0, 1) )`}
          </code>
        </pre>
        <p>
          The hell does this mean? Yeah, this language is confusing at best.
          Anyway, here's what is happening here.
        </p>
        <p>
          "ramp_color" - is a function to calculate the color code (hex). It
          takes two arguments - name of the gradient (here I've created my own
          just <i>for fun</i>, but you mau use an existing one) and a value,
          which should be a number from 0 to 1.
        </p>
        <p>
          "scale_linear" - since we are required to give [0, 1] value to the
          "ramp_color" function, we have to normalize our "meters_per_sec"
          value. So it takes 5 arguments: the value to normalize, its minimum,
          its maximum, normalized minimum and normalized maximum. So, 0 will
          become 0, 30 km/h will become 1.
        </p>
        <NoteImage src="/1/speed2.png"></NoteImage>
        <p>
          The result is not great, but for now this is my best. On this map a
          hillshade and a Stamen Toner layers were used
        </p>
        <h3>Done</h3>
        <p>
          So, that's it. I had some specific fun doing this and learned
          something new.
        </p>
      </div>
    ),
  });

  return notes.map((note, i) => (
    <div className="card" key={i}>
      <h3>{note.title}</h3>
      {note.html}
    </div>
  ));
}

export default Notes;
