// script.js

const streams = [

{
name:"PBA Rush",
logo:"https://i.imgur.com/J4QCDLG.png",
type:"mpegdash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
clearKey:{
'd7f1a9c36b2e4f8d9a441c5e7b2d8f60':'fb83c86f600ab945e7e9afed8376eb1e'
},
category:"Sports"
},

{
name:"NBA TV Philippines",
logo:"https://i.imgur.com/sG7zuX0.png",
type:"mpegdash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd",
clearKey:{
'd1f8a0c97b3d4e529a6f2c4b8d7e1f90':'58ab331d14b66bf31aca4284e0a3e536'
},
category:"Sports"
},

{
name:"CNN",
logo:"https://i.imgur.com/onQ2oxw.png",
type:"hls",
manifestUri:"https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
category:"News"
},

{
name:"MovieSphere",
logo:"https://i.imgur.com/51RWtvd.png",
type:"hls",
manifestUri:"https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8",
category:"Movies"
},

{
name:"Japanim TV",
logo:"https://i.imgur.com/iYRTs2n.png",
type:"hls",
manifestUri:"https://foxkidstv.be:3369/stream/play.m3u8",
category:"Anime"
},

{
name:"Moonbug Kids",
logo:"https://i.imgur.com/H5Ha3ll.png",
type:"hls",
manifestUri:"https://moonbug-rokuus.amagi.tv/playlist.m3u8",
category:"Kids"
},

{
name:"Yahoo Finance",
logo:"https://i.imgur.com/pl4w2NN.png",
type:"hls",
manifestUri:"https://yahoo-samsung.amagi.tv/playlist.m3u8",
category:"News"
}

];

const categories = [
"All",
"Sports",
"News",
"Movies",
"Anime",
"Kids"
];

const video =
document.getElementById("video");

const channelsContainer =
document.getElementById("channels");

const categoriesContainer =
document.getElementById("categories");

const statusBox =
document.getElementById("status");

const loader =
document.getElementById("loader");

const searchInput =
document.getElementById("searchInput");

const themeBtn =
document.getElementById("themeBtn");

let player;

/* PLAYER */

async function initPlayer(){

player = new shaka.Player(video);

player.addEventListener(
'error',
event=>{

console.log(event);

showStatus("Playback Error");

});

}

/* STATUS */

function showStatus(text){

statusBox.innerHTML = text;

statusBox.style.display = "block";

clearTimeout(statusBox.timer);

statusBox.timer = setTimeout(()=>{

statusBox.style.display = "none";

},2000);

}

/* LOAD STREAM */

async function loadStream(channel){

showStatus(
"Loading " + channel.name
);

try{

if(channel.type === "mpegdash"){

player.configure({

drm:{
clearKeys:
channel.clearKey || {}
}

});

}

await player.load(
channel.manifestUri
);

showStatus(
channel.name + " Ready"
);

}
catch(error){

console.log(error);

showStatus(
channel.name + " unavailable"
);

}

}

/* CATEGORY */

function createCategories(){

categories.forEach(category=>{

const btn =
document.createElement("button");

btn.innerText = category;

btn.onclick = ()=>{

document
.querySelectorAll(".categories button")
.forEach(button=>{

button.classList.remove("active");

});

btn.classList.add("active");

renderChannels(category);

};

categoriesContainer.appendChild(btn);

});

document
.querySelectorAll(".categories button")[0]
.classList.add("active");

}

/* RENDER CHANNELS */

function renderChannels(category){

channelsContainer.innerHTML = "";

let filtered = streams;

if(category !== "All"){

filtered =
streams.filter(
item =>
item.category === category
);

}

/* SEARCH FILTER */

const search =
searchInput.value.toLowerCase();

filtered =
filtered.filter(
item =>
item.name.toLowerCase()
.includes(search)
);

filtered.forEach(channel=>{

const card =
document.createElement("div");

card.className = "card";

card.innerHTML = `

<img src="${channel.logo}">

<div class="channel-name">
${channel.name}
</div>

`;

/* FIX CLICK */

card.addEventListener(
"click",
()=>{

loadStream(channel);

});

channelsContainer
.appendChild(card);

});

}

/* SEARCH */

searchInput.addEventListener(
"input",
()=>{

const active =
document.querySelector(
".categories button.active"
);

const category =
active
? active.innerText
: "All";

renderChannels(category);

});

/* THEME */

themeBtn.addEventListener(
"click",
()=>{

document.body
.classList.toggle("light");

if(
document.body
.classList.contains("light")
){

themeBtn.innerHTML = "🌞";

}else{

themeBtn.innerHTML = "🌙";

}

});

/* START */

async function start(){

await initPlayer();

createCategories();

renderChannels("All");

loadStream(streams[0]);

setTimeout(()=>{

loader.style.opacity = "0";

setTimeout(()=>{

loader.style.display = "none";

},400);

},1200);

}

document.addEventListener(
"DOMContentLoaded",
start
);