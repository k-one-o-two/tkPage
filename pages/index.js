import { Image } from 'primereact/image';

function HomePage() {
  return (
    <>
      <div className="flex flex-column">
        <div className="text-center">
          <Image src="k102.svg" height="200"></Image>
        </div>
        <div className="card" title="About me">
          <h3>About me</h3>
          <p>I'm a software dev from Saint-Petersburg, living in Espoo.</p>
          <p>
            <a href="/mapping">Here</a> I have written some notes regarding QGIS
            usage for creating maps
          </p>
          <p>
            <a href="/dashware">And here</a> some other notes on using DashWare
            tool
          </p>
          <p>
            <a href="/crap">This is</a> my attempt to explain how to{' '}
            <b>not shoot</b> crappy photos
          </p>
          <p>
            <a href="/uncrap">And that is</a> my attempt to explain how to{' '}
            <b>shoot not</b> so crappy photos - highly opinionated
          </p>
          <p>
            <a href="/aurora">Here</a> is yet another guide on how to take
            pictures of auroras
          </p>
        </div>
        <div className="card">
          <h3>Contacts</h3>
          <div>
            <p>
              Telegram: <a href="https://t.me/k_one_o_two">@k_one_o_two</a>
            </p>
          </div>

          <div>
            <p>
              Matrix:{' '}
              <a href="https://matrix.to/#/@k.one.o.two:matrix.org">
                @k.one.o.two
              </a>
            </p>
          </div>

          <div>
            <p>
              Mail:{' '}
              <a href="mailto:k.one.o.two@gmail.com">k.one.o.two@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="card">
          <h3>Social links</h3>
          <div>
            <a href="https://stackoverflow.com/users/709711/k102">
              StackOverflow
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/kirill-sergeev-914a02a5/">
              LinkedIn
            </a>
          </div>
          <div>
            <a href="https://github.com/k-one-o-two">Github</a>
          </div>
          <div>
            <a href="https://www.flickr.com/photos/k102">Flickr</a>
          </div>
          <div>
            <a href="https://www.deviantart.com/k102">Devianart</a>
          </div>
          <div>
            <a href="https://www.youtube.com/@user-hp7df1xu2m">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
