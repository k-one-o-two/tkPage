<script setup lang="ts">
import { ascii } from "../ascii";
import Card from "./Card.vue";
</script>

<template>
    <div class="flex flex-column">
        <div class="text-center">
            {/* <Image src="k102.svg" height="200"></Image> */}
        </div>
        <div class="card" title="About me">
            <h1>About me</h1>
            <p>I'm a software dev from Saint-Petersburg, living in Espoo.</p>
            <p>Here are some texts regarding my interests</p>
            <h1>Texts</h1>
            <div>
                <Card title="QGIS" link="/mapping" :art="ascii.mapping">
                    <p class="m-0">
                        Notes regarding QGIS usage for creating maps
                    </p>
                </Card>
                <Card title="Dashware" link="/dashware" :art="ascii.dashware">
                    <p>Notes on using DashWare tool</p>
                </Card>
                <Card title="On crappy photo" link="/crap" :art="ascii.crap">
                    <p>
                        This is my attempt to explain how to
                        <b>not shoot</b> crappy photos
                    </p>
                </Card>
                <Card
                    title="On not-so-crappy photo"
                    link="/uncrap"
                    :art="ascii.uncrap"
                >
                    <p>
                        That is my attempt to explain how to <b>shoot not</b> so
                        crappy photos - highly opinionated
                    </p>
                </Card>
                <Card title="Auroras" link="/aurora" :art="ascii.aurora">
                    <p>Yet another guide on how to take pictures of auroras</p>
                </Card>
                <Card title="TG bot" link="/bot" :art="ascii.bot">
                    <p>Notes on using Node.js for Telegram bot backend</p>
                </Card>
                <Card title="Jimp image editor" link="/img" :art="ascii.img">
                    <p>In case you want to edit images in your Node.js app</p>
                </Card>
                <Card
                    title="Paginated queries speedup"
                    link="/speed"
                    :art="ascii.speed"
                >
                    <p>
                        Notes on improving speed of paginated database queries
                        in Postgresql and Node.js
                    </p>
                </Card>
            </div>
        </div>
        <div class="card">
            <h1>Contacts</h1>
            <div>
                <p>
                    Telegram:
                    <a href="https://t.me/k_one_o_two">@k_one_o_two</a>
                </p>
            </div>

            <!-- <div>
                <p>
                    Matrix:{' '}
                    <a href="https://matrix.to/#/@k.one.o.two:matrix.org">
                        @k.one.o.two
                    </a>
                </p>
            </div> -->

            <div>
                <p>
                    Mail:{' '}
                    <a href="mailto:k.one.o.two@gmail.com"
                        >k.one.o.two@gmail.com</a
                    >
                </p>
            </div>
        </div>
        <div class="card">
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
                <a href="https://www.deviantart.com/k102">Devianart</a>
            </div>
            <div>
                <a href="https://www.youtube.com/@k-one-o-two">YouTube</a>
            </div>
        </div>
    </div>
</template>
