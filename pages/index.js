import { Card } from 'primereact/card';

function HomePage() {
  return (
    <>
      <div className="flex flex-column gap-4">
        <Card title="About me">
          <p>
            I'm a full-stack developer with experience in React, Angular and a
            bit of Blazor on the front-end, Express and Koa on the back and
            Mongo, MySQL and Postgres for databses.
          </p>
          <p>Interested in coding, taking pictures, cycling and drawing maps</p>
        </Card>
        <Card title="Contacts">
          <div>
            <span className="text-muted">
              Telegram:{' '}
              <a className="text-color" href="https://t.me/k_one_o_two">
                @k_one_o_two
              </a>
            </span>
          </div>

          <div>
            <span className="text-muted">
              Matrix:{' '}
              <a
                className="text-color"
                href="https://matrix.to/#/@k.one.o.two:matrix.org"
              >
                @k.one.o.two
              </a>
            </span>
          </div>

          <div>
            <span className="text-muted">
              Mail:{' '}
              <a className="text-color" href="mailto:mail@k102.tk">
                mail@k102.tk
              </a>
            </span>
          </div>
        </Card>
        <Card title="Social links">
          <div>
            <a
              className="text-color"
              href="https://stackoverflow.com/users/709711/k102"
            >
              StackOverflow
            </a>
          </div>
          <div>
            <a
              className="text-color"
              href="https://www.linkedin.com/in/kirill-sergeev-914a02a5/"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a className="text-color" href="https://github.com/k-one-o-two">
              Github
            </a>
          </div>
          <div>
            <a className="text-color" href="https://www.deviantart.com/k102">
              Devianart
            </a>
          </div>
        </Card>
      </div>
    </>
  );
}

export default HomePage;
