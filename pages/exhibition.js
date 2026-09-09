import { Article } from "../components/article";
import { NoteImage } from "../components/noteImage";

export const note = {
  title: "Postikortti exhibition",
  art: `
████████████████████
█  |   |   |   |   █
█  ▓   ▓   ▓   ▓   █
█  |   ▓   ▓   ▓   █
█  ▓   ▓   |   ▓   █
█  |   ▓   ▓   ▓   █
█  ▓   |   |   ▓   █
█  |   |   |   |   █
█                  █
████████████████████
  `,
  html: (
    <div>
      <h3>What?</h3>
      <p>
        So, I have a Telegram channel, called{" "}
        <a href="https://t.me/nerdsbayPhoto">Postikortti Suomesta</a>, I have
        made several notes on developing its bot. But now, I want to tell about
        my first ever offline event.
      </p>
      <p>
        So, apparently, in Espoo one can request a place to make an exhibition
        in one of city libraries. Yeah, libraries in Finland are more than just
        libraries - you can loan tools there, record your own music etc. And
        make an exhibition too.
      </p>
      <p>The best part - it's free.</p>
      <p>
        That's why I have decided to do just that, and here I want to describe
        how it is done, and what I have learned.
      </p>
      <h3>How</h3>
      <p>
        First, you need to contact the library service: luckily, it is described
        on{" "}
        <a href="https://www.espoo.fi/en/library-services">
          Espoo city website
        </a>
        . There you have to fill the form and... wait. You're going to wait
        quite a lot, more than half a year.
      </p>
      <h4>What I did wrong at this point</h4>
      <NoteImage src="/11/libs.png"></NoteImage>
      <p>
        I should have gone and taken a look at those places - I ended up picking
        not the ideal one
      </p>
      <h3>Meanwhile</h3>
      <p>
        We have selected pictures that we would like to print and put them into
        a dedicated TG channel. So I needed to download them, one by one. You
        know where it's going, right?
      </p>
      <p>
        So, here's a script that can be used to download pictures from the TG
        channel on my GitHub:{" "}
        <a href="https://github.com/k-one-o-two/img-bot/blob/main/dump-channel.ts">
          dump-channel.ts
        </a>
        .
      </p>
      <p>It is not exactly fast, but it worked well.</p>
      <p>Next task - print them! And, preferably, not pay too much for it.</p>
      <p>
        After checking known to me local places and being unpleasantly surprised
        by their prices, I have discovered{" "}
        <a href="https://www.ifolor.fi/en/photos/digital-photos/10-cm">
          ifolor
        </a>
        . They offer good prices, though not so fast delivery as they print in
        Germany.
      </p>
      <h4>What I did wrong at this point</h4>
      <NoteImage src="/11/printed.jpg"></NoteImage>
      <p>
        I should have paid more attention to the way ifolor makes margins - on
        some pics they were even negative, which resulted in some author names
        being cut off.
      </p>
      <h3>Time T-0</h3>
      <p>
        So now I've got a response from the library with the confirmation of my
        exhibition and printed pictures. Actually, I've got two dates: the date
        of the exhibition start and the date of the opening event. Remember,
        I've said I did not pay enough attention when picking the place? We
        ended up having an opening in one corner of the library hall and our
        pictures in the opposite.
      </p>
      <p>
        But that's later - I came to the library to put pictures on the wall,
        equipped with a ribbon and masking tape. I've had an idea to put those
        ribbons on strings, that were already attached to the wall and put
        pictures on them.
      </p>
      <NoteImage src="/11/f.jpg"></NoteImage>
      <p>
        That did not work. Well, I should have thought of that earlier and seen
        how those strings actually looked.
      </p>
      <p>
        Luckily, I was able to put pictures on strings themselves, and with the
        help of one of our channel admins, we have put it all. In two hours. My
        fingers were sticky from the masking tape to the point that it was
        uncomfortable to drive back home.
      </p>
      <NoteImage src="/11/s.jpg"></NoteImage>
      <p>The end result looked like this</p>
      <NoteImage src="/11/result.jpg"></NoteImage>
      <h3>Opening</h3>
      <p>
        To say that I was surprised is to say nothing. There were actual living
        people - at one point there had even been a queue!
      </p>
      <NoteImage src="/11/q.jpg"></NoteImage>
      <p>
        The above picture was taken while I was discussing growing tomatoes with
        my friend from ParkRun
      </p>
      <h3>Conclusion</h3>
      <p>
        So, there are several things that I should have done differently and
        maybe will, given that this exhibition was not the last one.{" "}
      </p>
      <p>Now you too know how to do that, in case you're interested.</p>
    </div>
  ),
};

function Notes() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default Notes;
