// script.js

const streams = [

/* SPORTS */

{
name:"PBA Rush",
logo:"https://i.imgur.com/J4QCDLG.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
clearKey:{
"d7f1a9c36b2e4f8d9a441c5e7b2d8f60":"fb83c86f600ab945e7e9afed8376eb1e"
},
category:"Sports"
},

{
name:"NBA TV Philippines",
logo:"https://i.imgur.com/sG7zuX0.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd",
clearKey:{
"d1f8a0c97b3d4e529a6f2c4b8d7e1f90":"58ab331d14b66bf31aca4284e0a3e536"
},
category:"Sports"
},

{
name:"One Sports HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Sports_logo.svg/768px-One_Sports_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd",
clearKey:{
"53c3bf2eba574f639aa21f2d4409ff11":"3de28411cf08a64ea935b9578f6d0edd"
},
category:"Sports"
},

{
name:"UAAP Varsity",
logo:"https://upload.wikimedia.org/wikipedia/en/6/6f/Uaapvarsitychannel.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd",
clearKey:{
"95588338ee37423e99358a6d431324b9":"6e0f50a12f36599a55073868f814e81e"
},
category:"Sports"
},

/* LOCAL */

{
name:"Kapamilya",
logo:"https://static.wikia.nocookie.net/russel/images/2/29/Kapamilya_Channel_3D_Logo_2020.png",
type:"dash",
manifestUri:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/ccd312c8-e528-40ec-902c-e4205750ed11/index.mpd",
clearKey:{
"bd17afb5dc9648a39be79ee3634dd4b8":"b475084a1a58857e18480e30fbb0e544"
},
category:"Local"
},

{
name:"GMA Pinoy TV",
logo:"https://i.imgur.com/Eo0f51v.png",
type:"dash",
manifestUri:"https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd",
clearKey:{
"c95ed4c44b0b4f7fa1c6ebbbbaab21a1":"47635b8e885e19f2ccbdff078c207058"
},
category:"Local"
},

{
name:"TV5 HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TV5_%28Philippines%29_logo.svg/2048px-TV5_%28Philippines%29_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd",
clearKey:{
"2615129ef2c846a9bbd43a641c7303ef":"07c7f996b1734ea288641a68e1cfdc4d"
},
category:"Local"
},

{
name:"Jeepney TV",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Jeepney_TV_Logo_2015.svg/1200px-Jeepney_TV_Logo_2015.svg.png",
type:"dash",
manifestUri:"https://abslive.akamaized.net/dash/live/2027618/jeepneytv/manifest.mpd",
clearKey:{
"dc9fec234a5841bb8d06e92042c741ec":"225676f32612dc803cb4d0f950d063d0"
},
category:"Local"
},

/* NEWS */

{
name:"CNN",
logo:"https://i.imgur.com/onQ2oxw.png",
type:"hls",
manifestUri:"https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8",
category:"News"
},

{
name:"ANC",
logo:"https://static.wikia.nocookie.net/abscbn/images/a/a6/ANC_%282015%29.svg",
type:"dash",
manifestUri:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/2baa7f21-a6a9-43a5-8428-bf3a5af9111b/index.mpd",
clearKey:{
"4bbdc78024a54662854b412d01fafa16":"8c6c920cf3f7df2087b0ae1a4a8c6058"
},
category:"News"
},

{
name:"Al Jazeera",
logo:"https://logowik.com/content/uploads/images/al-jazeera-tv6503.jpg",
type:"hls",
manifestUri:"https://live-hls-web-aje-gcp.thehlive.com/AJE/index.m3u8",
category:"News"
},

/* MOVIES */

{
name:"Cinema One",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Cinema_One_2013_logo.svg/800px-Cinema_One_2013_logo.svg.png",
type:"dash",
manifestUri:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-cinemaone-dash-abscbnono/ea95e9da-cacb-4a57-bce2-a709ea82cf5a/index.mpd",
clearKey:{
"58d0e56991194043b8fb82feb4db7276":"c116c612201e178193693eced13d7319"
},
category:"Movies"
},

{
name:"HBO HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/4/4a/HBO_HD.png",
type:"hls",
manifestUri:"https://v12.thetvapp.to/hls/HBOEast/tracks-v1a1/mono.m3u8",
category:"Movies"
},

{
name:"HBO Hits",
logo:"https://upload.wikimedia.org/wikipedia/en/f/fc/HBOHits-ASIA.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default/index.mpd",
clearKey:{
"b04ae8017b5b4601a5a0c9060f6d5b7d":"a8795f3bdb8a4778b7e888ee484cc7a1"
},
category:"Movies"
},

{
name:"MovieSphere",
logo:"https://i.imgur.com/51RWtvd.png",
type:"hls",
manifestUri:"https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8",
category:"Movies"
},

/* KIDS */

{
name:"Cartoon Network",
logo:"https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cartoonnetworkhd/default/index.mpd",
clearKey:{
"a2d1f552ff9541558b3296b5a932136b":"cdd48fa884dc0c3a3f85aeebca13d444"
},
category:"Kids"
},

{
name:"Animax",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Animax_logo.svg/1200px-Animax_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
clearKey:{
"92032b0e41a543fb9830751273b8debd":"03f8b65e2af785b10d6634735dbe6c11"
},
category:"Kids"
},

{
name:"Moonbug Kids",
logo:"https://i.imgur.com/H5Ha3ll.png",
type:"hls",
manifestUri:"https://moonbug-rokuus.amagi.tv/playlist.m3u8",
category:"Kids"
}

];

/* CATEGORIES */

const categories = [
"All",
"Sports",
"Local",
"News",
"Movies",
"Kids"
];

const video = document.getElementById("video");
const channelsContainer = document.getElementById("channels");
const categoriesContainer = document.getElementById("categories");
const searchInput = document.getElementById("search");

let player;

/* INIT PLAYER */

async function initPlayer(){

player = new shaka.Player(video);

player.addEventListener("error", e => {
console.log(e);
});

}

/* LOAD STREAM */

async function loadStream(channel){

try{

if(channel.type === "dash"){

player.configure({
drm:{
clearKeys: channel.clearKey || {}
}
});

await player.load(channel.manifestUri);

}else{

video.src = channel.manifestUri;
video.play();

}

}catch(err){

console.log(err);

}

}

/* RENDER CHANNELS */

function renderChannels(category = "All"){

channelsContainer.innerHTML = "";

const keyword = searchInput.value.toLowerCase();

let filtered = streams.filter(channel => {

const matchCategory =
category === "All" ||
channel.category === category;

const matchSearch =
channel.name.toLowerCase()
.includes(keyword);

return matchCategory && matchSearch;

});

filtered.forEach(channel => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<img src="${channel.logo}" class="logo">

<div class="info">
<h3>${channel.name}</h3>
<p>${channel.category}</p>
</div>

<div class="live-badge">
LIVE
</div>
`;

card.addEventListener("click", () => {
loadStream(channel);
});

channelsContainer.appendChild(card);

});

}

/* CATEGORIES */

function createCategories(){

categories.forEach(category => {

const btn = document.createElement("button");

btn.innerText = category;

btn.onclick = () => {

document
.querySelectorAll(".category-btn")
.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

renderChannels(category);

};

btn.className = "category-btn";

categoriesContainer.appendChild(btn);

});

document
.querySelector(".category-btn")
.classList.add("active");

}

/* SEARCH */

searchInput.addEventListener("input", () => {

const active =
document.querySelector(".category-btn.active");

renderChannels(active.innerText);

});

/* LOADING SCREEN */

window.addEventListener("load", () => {

setTimeout(() => {

const loading =
document.getElementById("loading");

loading.style.opacity = "0";

setTimeout(() => {
loading.style.display = "none";
},500);

},1800);

});

/* START */

document.addEventListener(
"DOMContentLoaded",
async () => {

await initPlayer();

createCategories();

renderChannels();

if(streams.length > 0){

loadStream(streams[0]);

}

});