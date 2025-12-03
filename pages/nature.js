import { NoteImage } from "../components/noteImage";
import { Article } from "../components/article";

export const note = {
  title: "Day trip places",
  art: `
████████████████████
█   ▓              █
█  ▓▓▓             █
█ ▓▓▓▓▓            █
█▓ ▓▓▓ ▓           █
█ ▓▓▓▓▓            █
█▓ ▓▓▓ ▓           █
█ ▓ ▓ ▓  ▓▓▓▓▓▓▓▓  █
█▓  ▓  ▓   ▓  ▓    █
████████████████████
`,
  html: (
    <div>
      <h2>Where to go</h2>
      <p>
        This is a list of places I recommend visiting as a day trip from Espoo
        (or Helsinki).
      </p>
      <h3>Nuuksio</h3>
      <p>
        The most obvious destination. Can be accessed by car, bicycle or (they
        say) there are some busses. By car, there are several parking places.
        Nuuksio is a huge forest with nice gravel roads and some trails. There
        are laavus and fire places.
      </p>
      <NoteImage src="/10/nuuksio1.jpg"></NoteImage>
      <p>
        Keep in mind, that it is only allowed to ride your bike on those gravel
        roads, so no XC riding there.
      </p>
      <h4>Haltia</h4>
      <a href="">
        <h4>60°17'36.0"N 24°33'33.2"E</h4>
      </a>
      <NoteImage src="/10/haltia.png"></NoteImage>
      <p>
        Can be accessed by some busses, there is something called "The Finnish
        Nature Centre" - though I have no idea what it is. Since Nuuksio trails
        are all connected, you can go anywhere from this place - and you
        probably will want to since there might be too many people there (by
        Finnish standards).
      </p>
      <h4>Pirttimäki</h4>
      <a href="">
        <h4>60°16'11.2"N 24°38'57.7"E</h4>
      </a>
      <NoteImage src="/10/pirttimaki.png"></NoteImage>
      <p>
        Another access point to the Nuuksio national park is near the Bodom
        lake. It is slightly less popular, so might be more suitable for those
        who want to avoid the crowds. There is also a summer cafe, which I've
        never been to.
      </p>
      <h4>Salmi</h4>
      <a href="">
        <h4>60°22'32.1"N 24°30'17.7"E</h4>
      </a>
      <NoteImage src="/10/salmi.png"></NoteImage>
      <p>
        An access point from the north. Has a big parking lot, which is
        convenient, really not popular and for a reason - it takes quite some
        time to get there, though if you pass Pirttimäki and follow the road to
        the 120 highway - you will be rewarded by a nice driving on a windy road
        through the forest.
      </p>
      <p>
        There are several grilling spots there and since there are not so many
        people, they are mostly free.
      </p>
      <h3>Meiko</h3>
      <a href="">
        <h4>60°08'56.0"N 24°22'27.3"E</h4>
      </a>
      <NoteImage src="/10/meiko.jpg"></NoteImage>
      <p>
        Way less accessible than Nuuksio. This is a park around a lake in
        Kirkonummi. The parking lot is not big, but I've never had any issues
        with it. There are several marked routes, the best one imho, goes around
        the lake.
      </p>
      <NoteImage src="/10/meiko.png"></NoteImage>
      <p>
        It is not a national park, so there are no restrictions (as far as I
        know) to ride a bike, but I've never tried. There are several streams
        that are fun to watch when the snow melts, especially if you're 7 (at
        least mentally).
      </p>
      <h3>Porkkala</h3>
      <a href="https://www.google.com/maps/place/59%C2%B058'41.3%22N+24%C2%B023'42.8%22E">
        <h4>59°58'41.3"N 24°23'42.8"E</h4>
      </a>
      <NoteImage src="/10/porkkala.png"></NoteImage>
      <p>
        Not that big area for hiking, but has a nice (one of the nicest I'd say)
        view of the sea. Can be accessed by car or by bike, if you're into
        longer rides.
      </p>
      <NoteImage src="/10/porkkala.jpg"></NoteImage>
      <p>
        Though it has a couple of fire places, I've never seen them free (except
        for the winter, when the weather was just awful). But it is a great
        place for a small hike if you're not into long walks, but want some good
        views.
      </p>
      <h3>Liesjärvi</h3>
      <a href="https://www.google.com/maps/place/60%C2%B039'10.9%22N+23%C2%B052'41.4%22E">
        <h4>60°39'10.9"N 23°52'41.4"E</h4>
      </a>
      <NoteImage src="/10/lies.png"></NoteImage>
      <p>
        Also a national park. It is a big one, though not so well-connected as
        Nuuksio. There are two interesting spots: a narrow path between two
        lakes and a historical farm that you can visit.
      </p>
      <NoteImage src="/10/lies1.jpg"></NoteImage>
      <NoteImage src="/10/lies2.jpg"></NoteImage>
      <p>
        It is quite far away from Espoo, though still a viable day trip option.
      </p>
      <p>
        There are several parking places, they are not far from the main road,
        but you will have to drive on some gravel roads. May pretend to be on a
        WRC stage as well.
      </p>
      <h3>Ruotsejärvi</h3>
      <a href="https://www.google.com/maps/place/60%C2%B042'48.5%22N+23%C2%B047'45.9%22E">
        <h4>60°42'48.5"N 23°47'45.9"E</h4>
      </a>
      <NoteImage src="/10/ruots.png"></NoteImage>
      <p>
        This is a small area with a manual ferry, that is quite an interesting
        thing. Another part of it is a long boardwalk across the swamp.
      </p>
      <NoteImage src="/10/ruots.jpg"></NoteImage>
      <p>The ferry will take you to a peninsula with a nice laavu on it.</p>
      <p>
        It only worth visiting if you want to use that ferry, otherwise there
        are way better places that are way closer.
      </p>
    </div>
  ),
};

function Notes() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default Notes;
