import { NoteImage } from '../components/noteImage';
import Head from 'next/head';

function Notes() {
  const notes = [];

  notes.push({
    title: 'How to shoot not crap',
    html: (
      <div>
        <h3>Why</h3>
        <p>
          Ok, so I've <a href="/carp">tried my best</a> do discuss how to not
          make a crappy image. But then it has been pointed out that these
          advices only work if you know what is that you're going to shoot.
          Which is not always the case. So now I'll try to share some ideas on
          how I pick the subject to take picture of.
        </p>
        <p>
          Disclaimer: the whole contents of this page is my personal opinion.
        </p>
        <h3></h3>
        <p>
          Well, you have to take good pictures and avoid taking bad ones. But
          what makes a picture a good one?
        </p>
        <p>
          I think there are 2 separate metrics, not really connected: how much
          the image is interesting and how aesthetically pleasing it is.
        </p>
        <p>
          I also think it is easier to discuss how to make an image good form an
          aesthetic point of view. Apart from being able to find images with
          traffic lights, we, humans have other things in common and visual
          taste is one of them. Of course, there are some overly unique
          snowflakes, who will claim to like something completely different, but{' '}
          <s>who cares</s>
          I'm talking about the majority here. So, what are those things?
        </p>
        <h3>Nature</h3>
        <p>
          <a href="https://www.youtube.com/watch?v=3YTd2eoW5ys">
            We are animals
          </a>{' '}
          and nature is our habitat: it makes us happy when the sun is shining,
          flowers are blooming, bunnies are... well, just are, and so on.
        </p>
        <p>
          Therefore, nature & wildlife pictures mostly always look good. Just
          get yourself a telephoto lens and go find some cute animals:
        </p>
        <NoteImage src="/4/3.jpg"></NoteImage>
        <NoteImage src="/4/4.jpg"></NoteImage>
        <p>
          Places with a view are as well safe bet: we like such places since
          prehistoric times, even paleontologists tend to search for prehistoric
          habitats in places with a view
        </p>
        <NoteImage src="/4/5.jpg"></NoteImage>
        <h3>Architecture</h3>
        <p>
          Another common thing to shoot is some architectural landmarks. It is
          easier than shooting bunnies as buildings tend to stay in place, and
          to be built in a way that makes it easy to look at them and take
          pictures. But it is actually a problem.
        </p>
        <p>
          {' '}
          <a href="https://www.flickr.com/photos/k102/20063048778/in/album-72157656308523978/">
            Consider this one
          </a>
          :
        </p>
        <NoteImage src="/4/1.jpg"></NoteImage>
        <p>
          This is a Parliament building in Budapest. This picture is rather old,
          taken in 2015. I think it's ok in terms of aesthetics: the building is
          beautiful, it has this nice lighting etc. I only had to not f*ck it up
          too much, which I hope I did not. Now, let's use a search engine to
          look for other pictures of that place:
        </p>
        <NoteImage src="/4/2.png"></NoteImage>
        <p>
          Have you noticed it? No? I've inserted the picture above into this one
          and it looks as if it was there (well, I hope so at least). Which
          means that this is not an interesting picture - everyone can get the
          same one, most likely yours won't be the best from a technical point
          of view.
        </p>
        <p>
          You can always say something like:&nbsp;
          <a href="https://www.youtube.com/watch?v=kGoACnq46i4">
            "There are many like it
          </a>
          , but this one is mine". And it might be fine, but unless you can
          afford traveling really often, you will soon run out of landmarks in
          your city.
        </p>
        <p>Therefore, we need to take more interesting pictures.</p>
        <h3>How?</h3>
        <p>
          So, as we now agree (right?), architecture itself is not exactly
          interesting.
        </p>
        <p>
          Nature photos, even if you're infinitely far from NatGeo
          photographers, are better in this regard, especially for
          city-dwellers. But how can we improve it?
        </p>
        <h3>Lighting</h3>
        <p>
          Technically, we're not taking pictures of objects. We capture some
          light that has been reflected by them, sometimes we capture{' '}
          <i>just</i> the light itself - think of shooting stars or auroras or a
          rainbow.
        </p>
        <p>
          Therefore, to make a picture more interesting, you may try to have
          somewhat interesting lighting. The most obvious idea would be to take
          pictures of a sunset (or sunrise, but it's just too hard).
        </p>
        <NoteImage src="/4/6.jpg"></NoteImage>
        <NoteImage src="/4/7.jpg"></NoteImage>
        <p>
          These images would be way less interesting if not the sunset that
          colors the sky and clouds in this nice yellow.
        </p>
        <p>
          Worth mentioning that now your subject is the sunset itself, so it
          should affect the composition (in other words - more sky, less
          everything else)
        </p>
        <p>But what if you want to make a day picture better?</p>
        <p>
          Well, lights to the rescue! It might be a good idea to let the
          sunlight in your lens. It really helps during the winter, when there's
          not enough colors.
        </p>
        <NoteImage src="/4/8.jpg"></NoteImage>
        <p>
          Here I've pointed my camera pretty much directly to the low winter sun
          and then made a picture a bit warmer in post-production. As a result -
          this is no longer a picture of the forest, but a picture of light
          making it's way through the trees.
        </p>
        <h3>Not only sunset</h3>
        <p>
          There are other lighting events that may help in creating a more
          interesting picture. The most common one is the fog. It does not only
          reduce the visibility, it affects artificial lights making them
          softer.
        </p>
        <NoteImage src="/4/10.jpg"></NoteImage>
        <p>
          Back to architectural example. This picture would be completely
          uninteresting in good weather conditions, but the fog makes it unique
          - a lot of people can take a picture of this same place, but you had
          to be there in the correct time to see it all covered with the fog.
        </p>
        <p>
          Unlike the Hungarian Parliament picture, this one at least tries to be
          an interesting one, though this building is not a landmark.
        </p>
        <NoteImage src="/4/9.jpg"></NoteImage>
        <p>
          Even more extreme example - this is literally a picture of light rays
          in the fog. I think this picture gets pretty low aesthetic score, but
          should be considered somewhat interesting.
        </p>
        <h3>People & streetphoto</h3>
        <p>
          This is a way trickier one. There are pretty much 2 ways of
          photographing people - either staged or not. And I don't even know
          what's harder. For the 1st one you might need special equipment:
          either lights or flashes, or lots of luck.
        </p>
        <NoteImage src="/4/11.jpg"></NoteImage>
        <p>
          This picture was taken without any special light sources, but
          conditions were really good otherwise - a lot of sunlight and a white
          wall without anything reflecting on it.
        </p>
        <p>
          You don't want to shoot portraits with too wide lens to avoid
          distortions, so unless you have a studio (and if you do, why the hell
          are you even reading this?) or a huge room, you're bound to only
          portraits. Which is really limiting and you may run out of ideas
          pretty soon.
        </p>
        <p>
          So, you might switch to shooting people in their somewhat natural
          habitat, cities. I truly admire those who can just go out and point
          their camera on some random folks, and I'm not one of them.
        </p>
        <NoteImage src="/4/12.jpg"></NoteImage>
        <p>This is my best attempt at streetphoto so far.</p>
        <p>
          <b>Please remember</b> to check your local regulations regarding
          photographing random people (especially minors) and then uploading
          those pictures!
        </p>
        <NoteImage src="/4/13.jpg"></NoteImage>
        <p>
          If you're uncomfortable with the sreetphoto like me, you may try to
          shoot silhouettes of people. It doesn't tell a story (which a
          streetphoto is supposed to do), but it depicts people without showing
          their faces.
        </p>
        <h3>Conclusion</h3>
        <p>
          So, the picture should score some points of being interesting and
          being aesthetic. If it is only good in one of these two things -
          there's a room for improvement.
        </p>
      </div>
    ),
  });

  return notes.map((note, i) => (
    <div className="card" key={i}>
      <Head>
        <title>No crap photos</title>
      </Head>
      <h3>{note.title}</h3>
      {note.html}
    </div>
  ));
}

export default Notes;
