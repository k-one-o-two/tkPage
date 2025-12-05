import Head from "next/head";
import { Card } from "../components/card";

import { note as auroraNote } from "./aurora";
import { note as botNote } from "./bot";
import { note as crapNote } from "./crap";
import { note as dashNote } from "./dashware";
import { note as imgNote } from "./img";
import { note as mapNote } from "./mapping";
import { note as speedNote } from "./speed";
import { note as uncrapNote } from "./uncrap";
import { note as bikeNote } from "./bike";
import { note as natureNote } from "./nature";

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
        <div className="card article" title="About me">
          <h1>About me</h1>
          <p>I'm a software dev from Saint-Petersburg, living in Espoo.</p>
          <p>Here are some texts regarding my interests</p>
          <h1>Texts</h1>
          <div className="main-list">
            <Card title="QGIS" link="/mapping" art={mapNote.art}>
              <p className="m-0">
                Notes regarding QGIS usage for creating maps
              </p>
            </Card>
            <Card title="Dashware" link="/dashware" art={dashNote.art}>
              <p>Notes on using DashWare tool</p>
            </Card>
            <Card title="On crappy photo" link="/crap" art={crapNote.art}>
              <p>
                This is my attempt to explain how to <b>not shoot</b> crappy
                photos
              </p>
            </Card>
            <Card
              title="On not-so-crappy photo"
              link="/uncrap"
              art={uncrapNote.art}
            >
              <p>
                That is my attempt to explain how to <b>shoot not</b> so crappy
                photos - highly opinionated
              </p>
            </Card>
            <Card title="Auroras" link="/aurora" art={auroraNote.art}>
              <p>Yet another guide on how to take pictures of auroras</p>
            </Card>
            <Card title="TG bot" link="/bot" art={botNote.art}>
              <p>Notes on using Node.js for Telegram bot backend</p>
            </Card>
            <Card title="Jimp image editor" link="/img" art={imgNote.art}>
              <p>In case you want to edit images in your Node.js app</p>
            </Card>
            <Card
              title="Paginated queries speedup"
              link="/speed"
              art={speedNote.art}
            >
              <p>
                Notes on improving speed of paginated database queries in
                Postgresql and Node.js
              </p>
            </Card>
            <Card
              title="Reflections on cycling"
              link="/bike"
              art={bikeNote.art}
            >
              <p>What I've learned from cycling non-stop for several years</p>
            </Card>
            <Card
              title="Day trip suggestions"
              link="/nature"
              art={natureNote.art}
            >
              <p>
                A list of natural spots worth seeing as a day trip from Espoo
              </p>
            </Card>
          </div>
        </div>
        <div className="card">
          <h1>Contacts</h1>
          <div>
            <p>
              Telegram: <a href="https://t.me/k_one_o_two">@k_one_o_two</a>
            </p>
          </div>

          <div>
            <p>
              Matrix:{" "}
              <a href="https://matrix.to/#/@k.one.o.two:matrix.org">
                @k.one.o.two
              </a>
            </p>
          </div>

          <div>
            <p>
              Mail:{" "}
              <a href="mailto:k.one.o.two@gmail.com">k.one.o.two@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="card">
          <h1>Social links</h1>
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
            <a href="https://www.istockphoto.com/fi/portfolio/k102?mediatype=photography2">
              iStock
            </a>
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
