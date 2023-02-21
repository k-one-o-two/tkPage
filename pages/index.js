import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

function HomePage() {
  return (
    <>
      <div className="flex flex-column">
        <div className="text-center">
          <Image src="k102.svg" height="200"></Image>
        </div>
        <Card title="About me">
          <p>
            I'm a full-stack developer with experience in React, Angular and a
            bit of Blazor on the front-end, Express and Koa on the back and
            Mongo, MySQL and Postgres for databses.
          </p>
          <p>Interested in coding, taking pictures, cycling and drawing maps</p>
          <p>
            <a href="/mapping">Here</a> I have written some notes regarding QGIS
            usage for creting maps
          </p>
        </Card>
        <Card title="Contacts">
          <div>
            <span>
              Telegram: <a href="https://t.me/k_one_o_two">@k_one_o_two</a>
            </span>
          </div>

          <div>
            <span>
              Matrix:{' '}
              <a href="https://matrix.to/#/@k.one.o.two:matrix.org">
                @k.one.o.two
              </a>
            </span>
          </div>

          <div>
            <span>
              Mail: <a href="mailto:mail@k102.tk">mail@k102.tk</a>
            </span>
          </div>
        </Card>
        <Card title="Social links">
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
        </Card>
      </div>
    </>
  );
}

export default HomePage;
