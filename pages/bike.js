import { NoteImage } from "../components/noteImage";
import { Article } from "../components/article";

export const note = {
  title: "What I have learned from cycling",
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
      <h3>What I have learned</h3>
      <p>
        This is a list, with no particular order, of things I have learned by
        using my bikes quite a lot.
      </p>
      <NoteImage src="/9/4.jpg"></NoteImage>
      <p>
        For several years now I'm cycling to work all year round, which results
        in 4000+ kilometers per year. Here are things I've learned, so that you
        don't have to.
      </p>
      <p className="bold-list-item">
        0. No one wants to talk to you about bikes as much as you'd like them
        to. Trust me. No one.
      </p>
      <p className="bold-list-item">
        1. Owning a bike might be frustrating. It has a lot of parts that can
        break, and eventually they will. So be prepared and try not to be
        overdramatic about it.
      </p>
      <p className="bold-list-item">
        2. Bikes are subtly different from each other and I hate it. Let alone
        derailleur hangers, which are frame-specific and can be hard to find.
        Even fenders can work on your bike or not! And if you want to have a
        saddle bag, well, too bad - now you can't mount a rear lamp. And so on.
      </p>
      <NoteImage src="/9/1.jpg"></NoteImage>
      <p className="bold-list-item">
        3. Road rage is real. When riding in the city you will encounter some
        less bright drivers and pedestrians (and even other cyclists). And given
        that your blood pulse is higher than normal you might easily get angry
        with them. I could have said that I've learned to stay calm, ignore them
        and meditate while cycling,{" "}
        <a href="https://www.youtube.com/watch?v=mbj1RFaoyLk">
          but it will be untrue and I will be a liar.
        </a>
      </p>
      <p className="bold-list-item">
        4. Some people say stuff like "there's no bad weather, there's just bad
        gear". And they are only half right - there is some bad gear. Like, if
        you're riding in jeans and a cotton t-shirt, expect problems. But bad
        weather exists as well for sure - imagine riding in the strong wind with
        wet snow in -1C. Don't pretend that it's fine, it's not.
      </p>
      <NoteImage src="/9/3.jpg"></NoteImage>
      <p className="bold-list-item">
        5. Something positive for a change: good bits don't get old. Really, I
        have cycled the same route (that you can see{" "}
        <a href="/dashware">here</a>) but there are parts of it that I still
        enjoy like the first time or maybe even more. The same goes for mountain
        biking - I know local trails pretty well, but keep enjoying them.
      </p>
      <p className="bold-list-item">
        6. Group rides are more about groups then they are about rides. Meaning
        that if you don't like people you're going to ride with, you won't like
        the whole thing either. And that's totally fine to go solo - no need to
        plan a route, adjust your pace, just bliss.
      </p>
      <NoteImage src="/9/5.jpg"></NoteImage>
      <p className="bold-list-item">
        7. Cycling will influence the way you think, and not exactly in a good
        way. For instance, I've realized that I hate walking - it's slow, boring
        and you cant coast, need to move your feet constantly. Disgusting.
      </p>
      <p className="bold-list-item">
        8. Clipless pedals. You can say what you want, but they are just better.
        More confidence, more power and as a result more comfort. Yes, you're
        going to fall a couple of times, but you'll get over as some point. The
        biggest issue is that you need special shoes - but if you stick with mtb
        ones, you'll be fine.
      </p>
      <NoteImage src="/9/6.jpg"></NoteImage>
      <p className="bold-list-item">
        9. If you're cycling, you're my friend. With some rare exceptions, I
        think that cyclists are just good people in general - even if you're not
        fast, or your bike is cheap no-name one: if you're riding it, you're
        already better than all those who don't.
      </p>
    </div>
  ),
};

function Notes() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default Notes;
