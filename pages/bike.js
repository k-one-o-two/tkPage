import { NoteImage } from "../components/noteImage";
import { Article } from "../components/article";

export const note = {
  title: "",
  art: `
████████████████████
█                  █
█  █████      ████ █
█    ██       █    █
█  ██████████████  █
█ █   ██████  █  █ █
██   █   ██   █   ██
█ █     █  █     █ █
█  █████    █████  █
████████████████████
`,
  html: (
    <div>
      <h3>Welcome.</h3>
      <p>So you have decided to become cyclist.</p>
      <p>
        Welcome to the world of pain, soreness, expensive parts and repairs!
      </p>
      <p>
        But it's also the world of freedom to ride anywhere and overall joy.
      </p>
      <p>
        Disclaimer: this is highly opinionated and a lot of people will most
        likely disagree with some parts of this text.
      </p>
      <h3>What should you get?</h3>
      <p>
        If you have this question, get an XC mountain bike. It might sound like
        an oversimplification, but I'll elaborate.
      </p>
      <p>
        First of all, there are generally 2 types of bikes: those that are meant
        for dome kind of sport, and those that aren't. I'll only discuss the
        first type, since I'm not really interested in the second - sure, you
        can get some folding or a single-speed city bike, but they are boring.
      </p>
      <p>
        There is a lot of bike types, but you can put them on a spectrum. On one
        side there will be a hardcore time trial machine, on the opposite - also
        hardcore, but in a very different way - downhill rig.
      </p>
      <NoteImage src="/8/types.png"></NoteImage>
      <p>
        Somewhere on this spectrum there's a divide - bikes on one side (left)
        require a road to be ridden on, while bikes on the right do not.
      </p>
      <p>
        In the middle of the spectrum, there are quite similar bikes: a gravel
        bike and an xc (specifically - xc hardtail) bike and, I think, you
        should pick one of them, depending on your riding conditions.
      </p>
      <p>
        But if you're a beginner, you want your bike to be more capable so that
        it will tolerate more mistakes - like hitting curbs, tram rails and even
        stairs. An xc bike can handle all of it
      </p>
      <NoteImage src="/8/fly.jpg"></NoteImage>
      <p>
        For example, this type of riding is ok (that's a GT Avalanche 9r with
        some parts replaced).
      </p>
      <p>
        But you don't really want to move further to the right towards a DH
        bike. In the cross country (that's what "xc" stands for btw) you're
        supposed to be fast both up and down hills, so the bike is capable of
        both. At the same time, DH and even enduro races are focused on the
        descending speed.
      </p>
      <p>
        But if you're going to ride in a some really pleasant place with a nice
        bike infrastructure, you might get a gravel bike as well: it's faster on
        roads, though it would be less comfortable and les forgiving.
      </p>
      <h3>Ok, what now?</h3>
      <p>So, now you will need 3 things:</p>
      <p>Gear: like clothing, helmet, lights etc.</p>
      <p>Riding skills: at least understanding some basics.</p>
      <p>
        Fixing skills: sure, you can just take your bike to a mechanic every
        time, but you should be able to fix a flat tire in the middle of nowhere
        at least.
      </p>
      <h3>Gear</h3>
      <h4>helmet</h4>
      <p>
        You need a helmet. Yes, even if you only ride in a local park. A helmet
        saved me more than once. Apart from it being comfortable, you want it to
        be safe. Good thing is that there's an actual safety ranking{" "}
        <a href="https://www.helmet.beam.vt.edu/bicycle-helmet-ratings.html">
          available here
        </a>
      </p>
      <h4>clothes</h4>
      <p>
        Initially, you'll be fine with whatever sportswear you have, just make
        sure your pats are not too wide.
      </p>
      <p>
        With your skills progressing, you'll notice the limitations. There are,
        pretty much, two options: baggy mtb clothing or lycra. I'm sticking with
        the 1st option, which looks like that:
      </p>
      <NoteImage src="/8/mud.png"></NoteImage>
      <p>
        It is less aerodynamic, which it an actual problem on speeds above 25
        kmph, but this way I'm avoiding being a{" "}
        <a href="https://en.wikipedia.org/wiki/Mamil">MAMIL</a>
      </p>
    </div>
  ),
};

function Notes() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default Notes;
