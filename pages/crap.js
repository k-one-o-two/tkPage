import { NoteImage } from '../components/noteImage';

function Notes() {
  const notes = [];

  notes.push({
    title: 'How to not shoot crap',
    html: (
      <div>
        <h3>Why</h3>
        <p>
          There are plenty of online resources that teach how to make good
          photos, and this is not a one of them. The thing is - I have no idea
          what it takes for a photo to be good. But I think I know what makes it
          a crappy one, and here I'll try to explain it.
        </p>
        <h3>The definition of crap</h3>
        <p>
          Take a look at this image (taken by me, not on flickr for obvious
          reasons):
        </p>
        <NoteImage src="/3/cr1.JPG"></NoteImage>
        <p>
          What is depicted here? Quite a lot of things actually and in order to
          check if the image is a crappy one we have to name them all. So,
          there's a seagull sitting on some fence with a ferry terminal in the
          background. And there is a line of trucks there. And some out-of-focus
          thing in the bottom-right corner.
        </p>
        <p>
          The main question is - is that what had been intended to be depicted?
          In this case I'd say that it is quite clearly not. I mean, I know it
          for sure since it is my picture, but I'll try to explain why it should
          be as clear for everyone else.
        </p>
        <p>
          This picture lacks an object, the reason why it was taken in the 1st
          place. There are several possibilities of what the object could have
          been:
        </p>
        <ul>
          <li>
            <p>
              the terminal: it occupies even less space on the image than parts
              of the ferry from which the picture is taken, and one corner is
              even behind the fence. Therefore it can't be the object of this
              picture.
            </p>
          </li>
          <li>
            <p>
              the fence and the blue floor: is is not even clear if this is just
              a part of some bridge or a ship, the background makes this fence
              have too low contrast. The verdict is the same.
            </p>
          </li>
          <li>
            <p>
              the seagull: apart from it being out of focus (I've failed, yeah)
              it is barely visible due to the terminal on the background
            </p>
          </li>
          <li>
            <p>
              the weird thing on the right: well, I hope the explanation is not
              needed here
            </p>
          </li>
        </ul>
        <p>
          As you can see, this image lacks an object, it's pointless and there
          was no good reason to even take this picture.
        </p>
        <p>
          Consider{' '}
          <a href="https://www.flickr.com/photos/k102/53719245076">
            this picture
          </a>
          , which is, imho, not a crap:
        </p>
        <NoteImage src="/3/nc1.jpg"></NoteImage>
        <p>
          I had an intention to take a picture of a seagull on an evening sky.
          What do we see here? Right, just that.
        </p>
        <p>
          One can argue:{' '}
          <i>
            this method only works for minimalistic pictures, like that stupid
            bird above
          </i>
          . So let's take another example.
        </p>
        <NoteImage src="/3/cr2.jpg"></NoteImage>
        <p>
          This image I took while cycling to Porvoo with my phone. What I wanted
          to show here is the river, the bridge with nice reflection of it's
          pillars and some sort of a farmhouse. What do we see here - all of the
          above plus a part of a metal fence and leafless trees on the right.
          Let's just crop them out and see if the picture would benefit from it:
        </p>
        <NoteImage src="/3/nc2.jpg"></NoteImage>
        <p>
          Good, but there still is a partly visible car on the bridge. So, in
          order to make the picture better we'd better crop it as well. I think
          you got the idea.
        </p>
        <p>
          <i>So, you're just making an image minimalistic, right?</i>
        </p>
        <p>Well, yes, but actually no.</p>
        <p>
          Sometimes it's not objects that I want to depict. Take a look at this
          (unedited) image:
        </p>
        <NoteImage src="/3/cr3.JPG"></NoteImage>
        <p>
          What do we see here: a van and some pieces of machinery that I can't
          even name. But the reason I've decided to take this picture is the
          amount of horizontal lines here: from the dashed line on top to the
          contrast between the big white thing (which is a ferry, but it doesn't
          even matter right now) with the way the blue thing aligned almost
          perfectly parallel to them. Let's try to bring more focus to these
          lines. To do this, I've{' '}
          <a href="https://www.flickr.com/photos/k102/53719582599/">
            made the picture
          </a>{' '}
          b&w while increasing it's contrast. So, while this picture is not
          minimalistic, now it has more accent on why it has been taken - the
          geometry of those lines.
        </p>
        <NoteImage src="/3/nc3.jpg"></NoteImage>
        <p>
          So, the amount of details is now even higher (for example, the mobile
          fence next to the van is now more visible). Now, my intentions are
          more aligned with the end result, making a picture (I hope) less
          crappy.
        </p>
        <h3>More examples</h3>
        <NoteImage src="/3/cr4.JPG"></NoteImage>
        <p>
          I was trying to take a picture of that bird (as you may have already
          noticed, I often shoot birds) and I have not even failed with
          focusing, but the image is still bad. If only this sparrow was sitting
          a bit to the left, so that it would not blend into the background,
          it'd be way more clear what is the main object of the picture, which
          is sadly not. And no matter how you crop this one, it won't be much
          better for this very reason.
        </p>
        <NoteImage src="/3/nc4.jpg"></NoteImage>
        <p>
          And this bird is much better. It has a nice contrast with the
          background sky and the branches behind this crow are far enough to be
          out of focus. The subject is clear - a crow on a tree branch.
        </p>
        <NoteImage src="/3/cr5.JPG"></NoteImage>
        <p>
          There is a lot of things that are bad in this photo, let's try to
          describe it honestly. We see a tram and this is the only thing that is
          kinda fine. The reflection of it's lights is obscured by the pile of
          show, the building behind it is not fully in the frame, there's some
          radom white car, some part of another building hovering in the left
          part of the frame... We can continue.
        </p>
        <NoteImage src="/3/nc5.jpg"></NoteImage>
        <p>
          While this one is not ideal either, it is way less crappy - it has a
          rather clear main object (the tram), it clearly stands out from the
          background, there are less unrelated objects that may steal the
          attention.
        </p>
        <h3>Conclusion</h3>
        <p>
          Ask yourself: "what do I see on the picture?" and try to answer as
          honest as possible. If the list of things in the answer is
          significantly longer than you'd think it should be - the picture is
          most likely a crap.
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
