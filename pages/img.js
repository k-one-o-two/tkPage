import { NoteImage } from "../components/noteImage";
import { Article } from "../components/article";
import { A } from "../components/a";

export const note = {
  title: "Image editing in node.js",
  art: `
████████████████████
█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
█▓▓▓▓..           ▓█
█▓▓▓▓..           ▓█
█▓▓▓▓       ...   ▓█
█▓▓▓▓...........  ▓█
█▓▓▓▓.............▓█
█▓▓▓▓.............▓█
█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
████████████████████`,
  html: (
    <div>
      <h3>Why</h3>
      <p>
        This is also related to the bot, I have described{" "}
        <A href="/bot">here</A>. Since then, I have found another api that
        allows reading message history and counting likes on each.
      </p>
      <p>So, I've had an idea to select the best one for each month.</p>
      <p>
        It is not that interesting: you just have to use the{" "}
        <a href="https://gram.js.org/">telegram</a> npm package and follow the
        docs.
      </p>
      <p>
        The channel I'm talking about is called "Postcards from Finland",
        therefore I wanted to make those best-liked images look like postcards.
      </p>
      <p>Programmatically, of course.</p>
      <p>This is my type of fun.</p>
      <h3>How</h3>
      <p>
        There are several npm packages that provide image manipulation
        possibilities, but the majority of them require 3rd party stuff like
        Imagemagick, which I didn't want to use - my code should be running on a
        free tier Oracle VM, so I wanted to keep things as simple as possible.
      </p>
      <p>
        So, I came across The JavaScript Image Manipulation Program,{" "}
        <a href="http://jimp-dev.github.io/jimp/">Jimp</a>. Just check out their
        logo!
      </p>
      <p>
        I wanted to achieve a Polaroid-like look, put a postal stamp on and do
        some writing. The end result should be like that:
      </p>
      <NoteImage src="/6/1.jpg"></NoteImage>
      <p>
        This, obviously, is not something from the channel, this is my middle
        finger after I've hurt myself a while ago. Anyway.
      </p>
      <h4>Loading an image</h4>
      <p>First, we'll load an image and get it's dimensions:</p>
      <pre className="crt">
        <code className="language-javascript">{`
const image = await Jimp.read('output.jpg');
const { width, height } = image.bitmap;
        `}</code>
      </pre>
      <p>
        Now let's add borders. Either I'm dumb, or there's no built-in way of
        doing it, so I'm gonna create white rectangles and slap them onto the
        image:
      </p>
      <pre className="crt">
        <code className="language-javascript">{`
const border = 20;

const borderH = new Jimp({ width, height: border, color: 0xffffffff });
image.composite(borderH, 0, 0);

const borderV = new Jimp({ width: border, height, color: 0xffffffff });
image.composite(borderV, width - border, 0);
image.composite(borderV, 0, 0);

const borderB = new Jimp({ width, height: border * 4, color: 0xffffffff });
image.composite(borderB, 0, height - border * 4);
        `}</code>
      </pre>
      <p>
        This is for the vertical image - the bottom border is 4 times wider.
      </p>
      <p>
        Next, I'll add a black overlay, to make the image look more printed.
      </p>
      <pre className="crt">
        <code className="language-javascript">{`
const overlay = new Jimp({
    width,
    height: height - border * 3,
    color: 0x000000ff,
  });
overlay.opacity(0.1);

image.composite(overlay, 0, 0);
        `}</code>
      </pre>
      <p>
        Adding a stamp is pretty much the same - you load another image and then
        place it using the "image.composite" method.
      </p>
      <h4>Text</h4>
      <p>
        So, the only thing that is missing is the text. It should be easy,
        right?
      </p>
      <p>Right?</p>
      <p>
        So, I've found some ".ttf" font which I liked and downloaded it. First
        issue I've encountered is that Jimp docs are outdated and
        "Jimp.loadFont" doesn't seem to exist, it should be imported separately.
      </p>
      <p>The next issue was this:</p>
      <pre className="crt">
        <code className="language-javascript">{`
const font = await loadFont('.my_font.ttf');
        `}</code>
      </pre>
      <p>
        has failed with an error, that I honestly did not even understand. But
        it was clear, that Jimp is unhappy with this font format. I've looked
        into it's GitHub and realized that it uses ".fnt" fonts.
      </p>
      <p>
        At this point I've tried using different libs, like "node-canvas",
        which, according to the documentation, should be able to use my font.
      </p>
      <p>
        It did not. After making several efforts, I've realized I'm not the only
        one who has a problem and there's an{" "}
        <a href="https://github.com/Automattic/node-canvas/issues/2255">
          open GitHub issue
        </a>
        .
      </p>
      <p>So, I've decided to try and convert the font.</p>
      <p>
        Surprisingly, there are different tools for that and some of them just
        don't work.{" "}
        <s>
          <a href="https://ttf2fnt.com/">This one</a> does.
        </s>{" "}
        (updated) Looks like it's dead, but I've found another thing:{" "}
        <a href="https://libgdx.com/wiki/tools/hiero">Hiero</a>.
      </p>
      <p>This is a desktop app, looks like this:</p>
      <NoteImage src="/6/4.png"></NoteImage>
      <p>but does it's job well.</p>
      <p>
        Please note: you have to put all the characters you'll want to use and
        pay attention to the color - the font needs to be rendered to the bitmap
        of the exact color you're gonna use.
      </p>
      <p>
        A ".fnt" is actually just a bitmap, so this tool has generated an image
      </p>
      <NoteImage src="/6/2.png"></NoteImage>
      <p>
        and a file that describes which part of this image corresponds to which
        letter
      </p>
      <NoteImage src="/6/3.png"></NoteImage>
      <p>Now, we're one step closer!</p>
      <pre className="crt">
        <code className="language-javascript">{`
const font = await loadFont('.my_font.fnt');
        `}</code>
      </pre>
      <p>This works as expected.</p>
      <p>
        There's one more thing though: some (well, most of them actually) images
        are landscape, so the text should go vertical. I have spent more time
        than I'm willing to admit looking for a way to do that. I have even
        decided to ask wise people on StackOverflow.
      </p>
      <p>
        But than I've had an idea both dumb and brilliant: rotate an image,
        print text, rotate back.
      </p>
      <pre className="crt">
        <code className="language-javascript">{`
  image.rotate(90);

  image.print({
    font,
    x: border,
    y: width - 50,
    text: 'tome text goes here',
  });

  image.rotate(-90);
        `}</code>
      </pre>
      <h3>Done</h3>
      <p>
        That's it, the code is{" "}
        <a href="https://github.com/k-one-o-two/img-bot">on Github.</a>
      </p>
      <p>
        I've learned how to <s>mutilate</s>manipulate images in node.js, and
        surely had some specific fun while doing it.
      </p>
    </div>
  ),
};

function Notes() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default Notes;
