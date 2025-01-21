import Head from 'next/head';
import { Card } from '../components/card';

function HomePage() {
  return (
    <>
      <Head>
        <title>k102 home page</title>
      </Head>
      <div className="flex flex-column">
        <div className="text-center">
          {/* <Image src="k102.svg" height="200"></Image> */}
        </div>
        <div className="card" title="About me">
          <h3>About me</h3>
          <p>I'm a software dev from Saint-Petersburg, living in Espoo.</p>
          <p>Here are some texts regarding my interests^</p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 30,
              marginBottom: 40,
            }}
          >
            <Card title="QGIS" link="/mapping">
              <p className="m-0">
                Notes regarding QGIS usage for creating maps
              </p>
            </Card>
            <Card title="Dashware" link="/dashware">
              <p>Notes on using DashWare tool</p>
            </Card>
            <Card title="On crappy photo" link="/crap">
              <p>
                This is my attempt to explain how to <b>not shoot</b> crappy
                photos
              </p>
            </Card>
            <Card title="On not-so-crappy photo" link="/uncrap">
              <p>
                That is my attempt to explain how to <b>shoot not</b> so crappy
                photos - highly opinionated
              </p>
            </Card>
            <Card title="Auroras" link="/aurora">
              <p>Yet another guide on how to take pictures of auroras</p>
            </Card>
            <Card title="TG bot" link="/bot">
              <p>Notes on using node.js for telegram bot backend</p>
            </Card>
            <Card title="Jimp image editor" link="/img">
              <p>In case you want to edit images in your node.js app</p>
            </Card>
          </div>
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
            <a href="https://www.youtube.com/@k-one-o-two">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
