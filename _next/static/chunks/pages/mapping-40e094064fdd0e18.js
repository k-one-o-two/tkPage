(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{7636:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mapping",function(){return s(3797)}])},1697:function(e,t,s){"use strict";s.d(t,{z:function(){return r}});var i=s(5893),n=s(5675),o=s.n(n),a=s(7294);function r(e){let{src:t,height:s}=e,[n,r]=(0,a.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{onClick:()=>{console.info("click"),r(!0)},style:{position:"relative",height:"400px",cursor:"pointer"},children:(0,i.jsx)(o(),{src:t,alt:"Image",fill:!0,style:{objectFit:"contain"}})}),(0,i.jsxs)("div",{onClick:()=>{console.info("click"),r(!1)},style:{display:n?"block":"none",position:"fixed",left:0,top:0,height:"100vh",width:"100vw",background:"#4C566A",textAlign:"center",alignContent:"center",zIndex:100500,cursor:"pointer"},children:[" ",(0,i.jsx)(o(),{src:t,alt:"Image",fill:!0,style:{objectFit:"contain"}})]})]})}},3797:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(1697);t.default=function(){let e=[];return e.push({title:"Own rides map",html:(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Why"}),(0,i.jsxs)("p",{children:["So, I have realized that I ",(0,i.jsx)("i",{children:"need"})," to draw a map of my rides, and do it myself. Yeah, I know that there are a lot of tools out there, but this is not fun. I mean, doing what others have already done way better, suffering meanwhile is fun, right?"]}),(0,i.jsx)("h3",{children:"How"}),(0,i.jsx)("p",{children:'I use Strava, so I have decided to check how can it help me. You can actually export all your data from it. To do so, go to your account settings, you are looking for "Delete" section.'}),(0,i.jsx)(n.z,{src:"/1/delete.png"}),(0,i.jsx)("p",{children:'After pressing the "Get started" button, you will be able to "Request Your Archive" on the next page. You will get a zip archive soon after requesting it.'}),(0,i.jsx)(n.z,{src:"/1/gpxs.png"}),(0,i.jsx)("p",{children:"Great, right?"}),(0,i.jsx)("h4",{children:"No."}),(0,i.jsx)("p",{children:'The thing is, I use Suunto 5 watches to record my activities. It\'s good, but its output is not a gpx, but a fit file, even an archived one. So, along with some gpx files (I used Garmin Edge before), I have received a bunch if "fit.gz" ones'}),(0,i.jsx)("p",{children:"First, I thought to try to use them as they are, but have failed to find a tool to batch convert them into the format I understand. Not that I was looking too hard, but still, It seemed not to be straightforward."}),(0,i.jsx)("h4",{children:"Let's get them from Strava then!"}),(0,i.jsx)("p",{children:"For every Strava activity you may get a gpx file, that's pretty simple"}),(0,i.jsx)(n.z,{src:"/1/export.png"}),(0,i.jsx)("p",{children:"Shortly, I've realized that I have to press this damn button quite a lot (yeah, I didn't bother to count) of times. So, let's automate! It was supposed to be fun, right?"}),(0,i.jsx)("h4",{children:"A bit of code"}),(0,i.jsx)("p",{children:"So, I have downloaded one gpx and recorder my request using Fiddler. This gave me useful headers, that I could use to get other files. Actually, you only need to send the Cooke one. After a couple of minutes I came up with the following:"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:"\nfs = require('fs');\n\nconst save = async (activity) => {\nconst myHeaders = new Headers();\nmyHeaders.append(\n    'Cookie',\n    'Cookie:\n    sp=8e_strava_cbv2=true;..ff',\n);\n\nconst res = await fetch(\n    `https://www.strava.com/\n    activities/\n    ${activity}/\n    export_gpx`,\n    { headers: myHeaders },\n);\n"})}),(0,i.jsx)("p",{children:'The only thing - where do I get those ids? Luckily, there is an "activities" file in the export I\'ve done before. So it was not completely useless, yay!'}),(0,i.jsx)("p",{children:"So just put them into an array and call like that"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:"\nnames.forEach((name) => save(name));\n            "})}),(0,i.jsx)("p",{children:"Surprisingly, there seems to be no limit on such requests, so after a short while, I've got all my desired files."}),(0,i.jsx)("h4",{children:"Now what?"}),(0,i.jsx)("p",{children:"QGIS. This is a powerful software, so I'm a bit ashamed to use it for such a small task, using like 10% of what it is capable of. But after all, I'm already using Lightroom to move a couple of sliders, so why not."}),(0,i.jsx)("p",{children:'Gpx can be imported by using "Layer > Add Layer > Add vector layer" menu.'}),(0,i.jsx)(n.z,{src:"/1/qgis1.png"}),(0,i.jsx)("p",{children:"The only thing I actually needed was a line. After adding them all, don't repeat my mistake and group them together, otherwise you'll keep copying a style from one line to the whole group, QGIS will consume all the RAM it could find."}),(0,i.jsx)("h4",{children:"Adding tiles"}),(0,i.jsx)(n.z,{src:"/1/qgis2.png"}),(0,i.jsxs)("p",{children:["I had to add some XYZ tiles. XYZ means that those tiles are obtained from a tile server by X and Y coordinates and a zoom level. You can add some manually, but it will require some manual work, which is no fun (which is still a goal of the whole thing). I have managed to find a script that will add some well-known tiles to QGIS:",(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://raw.githubusercontent.com/klakar/QGIS_resources/master/collections/Geosupportsystem/python/qgis_basemaps.py",children:"qgis_basemaps.py"}),(0,i.jsx)("br",{}),"There is a Python console (Plugins > Python Console). After running this script I've got a nice list of differently styled tiles."]}),(0,i.jsx)("h3",{children:"Non-flat Earth"}),(0,i.jsx)("p",{children:'So far so good, but the map is flat, while I\'d like to show that I sometimes suffer riding uphill. There are several ways to add elevation data to the map, but the easiest is to use a thing called "hillshade". This is pretty much self explanatory - this is a raster image of shades, produced by hills.'}),(0,i.jsxs)("p",{children:["After quite extensive googling (while I use duckduckgo, so... ducking?), I came across this resource",(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://asiointi.maanmittauslaitos.fi/karttapaikka/?lang=en",children:"asiointi.maanmittauslaitos.fi"}),(0,i.jsx)("br",{}),"It allows to download quite a lot of stuff, the needed hillshade among them:"]}),(0,i.jsx)(n.z,{src:"/1/hillshade.png"}),(0,i.jsx)("p",{children:'After "ordering" it, I have received a message from "no-reply@maanmittauslaitos.fi" with a download link. I\'ve got some .tif files. Not knowing what am I supposed to do with them, I;ve just drag\'n\'dropped them in QGIS. Aaand it just worked, that simple.'}),(0,i.jsx)("h3",{children:"Styling"}),(0,i.jsx)("p",{children:"To actually show the hillshade, I have put a map (OSM) on top of it, and made it's semi-transparent"}),(0,i.jsx)("p",{children:"Now, combining all that I've done before, I have managed to display a non-flat map with my track on it, this is how it looks like"}),(0,i.jsx)(n.z,{src:"/1/hill.png"}),(0,i.jsx)("p",{children:"Well, in reality this hill looks a bit more impressive:"}),(0,i.jsx)(n.z,{height:400,src:"/1/view.jpg"}),(0,i.jsx)("h3",{children:"Adding speed"}),(0,i.jsx)("p",{children:"After performing all of this, I have decided to try and show my speed. Unfortunately, gpx track point does not contain speed, it looks like this:"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:'\n<trkpt lat="60.1824680" lon="24.7411490">\n  <ele>35.3</ele>\n  <time>2023-02-14T12:15:00Z</time>\n  <extensions>\n    <gpxtpx:TrackPointExtension>\n    <gpxtpx:hr>76</gpxtpx:hr>\n    </gpxtpx:TrackPointExtension>\n  </extensions>\n</trkpt>\n'})}),(0,i.jsxs)("p",{children:["There is a useful QGIS plugin, called"," ",(0,i.jsx)("a",{href:"https://anitagraser.com/2019/02/02/movement-data-in-gis-20-trajectools-v1-released/",children:"Trajectools"}),", which can be used for exactly this task."]}),(0,i.jsx)(n.z,{src:"/1/trajectools.png"}),(0,i.jsx)("p",{children:'When installed It will add itself to the "Processing toolbox" panel. What I\'ve used was "Basic > Add speed (m/s) to points" This will create a new set of points, each of them contains a new value - speed.'}),(0,i.jsx)("p",{children:"Now, let's colorize them. Unfortunately, I don't know how to colorize a line, so here's how to make it as line-like as possible."}),(0,i.jsx)("p",{children:"First, we need to color each point according to the speed."}),(0,i.jsx)(n.z,{src:"/1/speed1.png"}),(0,i.jsx)("p",{children:"Here we may create an expression which will be used to calculate the color. It can look like this:"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:"ramp_color(\n 'blue2red',\n scale_linear(\n  meters_per_sec * 3600 / 1000,\n  0,\n  30,\n  0,\n  1)\n)"})}),(0,i.jsx)("p",{children:"The hell does this mean? Yeah, this language is confusing at best. Anyway, here's what is happening here."}),(0,i.jsxs)("p",{children:['"ramp_color" - is a function to calculate the color code (hex). It takes two arguments - name of the gradient (here I\'ve created my own just ',(0,i.jsx)("i",{children:"for fun"}),", but you mau use an existing one) and a value, which should be a number from 0 to 1."]}),(0,i.jsx)("p",{children:'"scale_linear" - since we are required to give [0, 1] value to the "ramp_color" function, we have to normalize our "meters_per_sec" value. So it takes 5 arguments: the value to normalize, its minimum, its maximum, normalized minimum and normalized maximum. So, 0 will become 0, 30 km/h will become 1.'}),(0,i.jsx)(n.z,{src:"/1/speed2.png"}),(0,i.jsx)("p",{children:"The result is not great, but for now this is my best. On this map a hillshade and a Stamen Toner layers were used"}),(0,i.jsx)("h3",{children:"Done"}),(0,i.jsx)("p",{children:"So, that's it. I had some specific fun doing this and learned something new."})]})}),e.map((e,t)=>(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("h3",{children:e.title}),e.html]},t))}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=7636)}),_N_E=e.O()}]);