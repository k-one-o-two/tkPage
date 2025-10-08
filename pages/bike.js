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
      <h3>What I have learned</h3>
      <p>
        This is a list, with no particular order, of things I have learned by
        using my bikes quite a lot.
      </p>
      <p>
        For several years now I'm cycling to work all year round, which results
        in 4000+ kilometers per year. Here are things I've learned, so that you
        don't have to.
      </p>
      <p>
        0. No one wants to talk to you about bikes as much as you'd like them
        to. Trust me. No one.
      </p>
      <p>
        1. Owning a bike might be frustrating. It has a lot of parts that can
        break, and eventually they will. So be prepared and try not to be
        overdramatic about it.
      </p>
      <p>
        2. Bikes are subtly different from each other and I hate it. Let alone
        derailleur hangers, which are frame-specific and can be hard to find.
        Even fenders can work on your bike or not! And if you want to have a
        saddle bag, well, too bad - now you can't mount a rear lamp.
      </p>
      <p>
        3. Road rage is real. When riding in the city you will encounter some
        less bright drivers and pedestrians (and other cyclists). And given that
        your blood pulse is higher than normal you might easily get angry with
        them. I could have said that I've learned to stay calm, ignore them and
        meditate while cycling, but it will be untrue and I will be a liar.
      </p>
    </div>
  ),
};

function Notes() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default Notes;
