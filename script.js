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
  name: "NBA TV Philippines",
  logo: "https://i.imgur.com/sG7zuX0.png",
  type: "dash",
  manifestUri: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd",
  clearKey: {
    "d1f8a0c97b3d4e529a6f2c4b8d7e1f90": "58ab331d14b66bf31aca4284e0a3e536"
  },
  category: "Sports"
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

/* NEW ADDED CHANNEL */

{
name: 'Disney Channel',
logo: 'https://i.imgur.com/NVRbZfJ.png',
type: 'hls',
manifestUri: 'https://v2.thetvapp.to/hls/DisneyChannelEast/tracks-v1a1/mono.m3u8?token=U_7l27bYV-93dxuK0lNdgQ&expires=1778433290&user_id=MTI0LjIxNy4zLjg2',
category: "Kids"
},

{
  name: 'ESPN',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png',
  type: 'hls',
  manifestUri: 'https://k1.thetvapp.to/hls/ESPN/tracks-v1a1/mono.m3u8?token=RicbQMM67PcUm6KCDuUWCQ&expires=1778740782&user_id=MTI0LjIxNy4zLjg2',
  clearKey: 
    'test',
  category: 'Sports'
},

{
  name: "A2Z",
  logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/A2Z_Channel_11_Logo.png",
  type: "dash",
  manifestUri: "http://136.239.173.2:6610/001/2/ch00000090990000001087/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20Tg5pgSMSITY%2FHYvvCWJRp%2BqHRrK8UUahwItHhKpXgPXKytokK1MIobcue1ImXa0ZEA%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001176&contentid=ch00000000000000001176&videoid=ch00000090990000001087&recommendtype=0&userid=1287297673984&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=U4DB4Z0H2EXXXX&NeedJITP=1&JITPMediaType=DASH&JITPDRMType=NO",
  clearKey: {
    "d1f8a0c97b3d4e529a6f2c4b8d7e1f90": "58ab331d14b66bf31aca4284e0a3e536"
  },
  category: "Local"
},,

{
name: 'Sari-Sari',
logo: 'https://i.imgur.com/MXxN1UO.png',
type: 'dash',
manifestUri: 'https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_sarisari/default/index.mpd',
clearKey:{
'0a7ab3612f434335aa6e895016d8cd2d':'b21654621230ae21714a5cab52daeb9d'
},
category: "Local"
},

{
name:"HITS Movies",
logo:"https://static.wikia.nocookie.net/logopedia/images/4/4a/HITS_MOVIES_ASIA.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hitsmovies/default/index.mpd",
clearKey:{
"f56b57b32d7e4b2cb21748c0b56761a7":"3df06a89aa01b32655a77d93e09e266f"
},
category:"Movies"
},

 {
name:"ESPNs",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png",
type:"hls",
manifestUri:"https://v18.thetvapp.to/hls/ESPN/tracks-v1a1/mono.m3u8?token=LJht2sNkWCDgqrsrqJ_1sg&expires=1777126467&user_id=MTI0LjIxNy4zLjg2",
category:"Entertainment"
},

 {
name:"GMA News TV",
logo:"https://static.wikia.nocookie.net/russel/images/e/ec/GMA_Logo_2024.png",
type:"dash",
manifestUri:"https://abslive.akamaized.net/dash/live/2099522/gnews3/manifest.mpd",
clearKey:{
"d5d848730e4a4f9b962290039dd2b96b":"c959dc12f1bff5a66d030117fb7e9855"
},
category:"News"
},

{
name:"GTV",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/GTV_Philippines_Logo_Vector.svg/1200px-GTV_Philippines_Logo_Vector.svg.png",
type:"dash",
manifestUri:"https://nox1.alwaysdata.net/conv.php/gtv.mpd",
clearKey:{
"0f8537d8412b11edb8780242ac120002":"2ffd7230416150fd5196fd7ea71c36f3"
},
category:"Local"
},

 {
name:"HBO Family HD",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/HBO_Family_Asia_logo.svg/300px-HBO_Family_Asia_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd",
clearKey:{
"872910c843294319800d85f9a0940607":"f79fd895b79c590708cf5e8b5c6263be"
},
category:"Movies"
},

{
name:"HBO Boxing",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HBO_Signature.svg/2560px-HBO_Signature.svg.png",
type:"dash",
manifestUri:"https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/cmtyd9kpfe/out/v1/813bba04214e4f4dab57f0129365635a/cenc.mpd",
clearKey:{
"a4b2fe10c9d62d32220e8ea2dceda6f9":"e6e1173c892f7fbd60a37a76a78935cb"
},
category:"Movies"
},

 {
name:"RPTV HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/5/5b/RPTV_%282024%29.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd",
clearKey:{
"1917f4caf2364e6d9b1507326a85ead6":"a1340a251a5aa63a9b0ea5d9d7f67595"
},
category:"Local"
},

{
name:"CINE MO!",
logo:"https://upload.wikimedia.org/wikipedia/en/2/2b/Cinemo_logo_vectorized.svg",
type:"dash",
manifestUri:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-cinemo-dash-abscbnono/274e2d6f-1c93-41a7-b9b2-80679e43a06e/index.mpd",
clearKey:{
"aa8aebe35ccc4541b7ce6292efcb1bfb":"f06b6031a3604cc6708c14d83f1a1b27"
},
category:"Movies"
},

 {
name:"Animal Planet",
logo:"https://d3faj0w6aqatyx.cloudfront.net/uploads/2018/10/25115647/AnimalPlanet_Vertical_OneLineLarge_RGB-002.jpg",
type:"dash",
manifestUri:"https://nog-live1-ott.izzigo.tv/12/out/u/dash/ANIMAL-PLANET-HD/default.mpd",
clearKey:{
"ecc518be0092c0ed80d8b1eeb243c5b6":"7292a98762ff0ce0cf7ab33158f95ecf"
},
category:"Entertainment"
},

{
name:"Tagalog Movie Channel (TMC)",
logo:"https://upload.wikimedia.org/wikipedia/en/2/27/Tmc2021logo.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd",
clearKey:{
"96701d297d1241e492d41c397631d857":"ca2931211c1a261f082a3a2c4fd9f91b"
},
category:"Movies"
},

 {
name:"DreamWorks HD",
logo:"https://cms.cignal.tv/Upload/Images/Dream-Works.jpg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd",
clearKey:{
"7b1e9c4d5a2f4d8c9f106d3a8b2c1e77":"8b2904224c6cee13d2d4e06c0a3b2887"
},
category:"Kids"
},

{
name:"Pinoy Box Office (PBO)",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Pinoy_Box_Office_logo.svg/1200px-Pinoy_Box_Office_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd",
clearKey:{
"dcbdaaa6662d4188bdf97f9f0ca5e830":"31e752b441bd2972f2b98a4b1bc1c7a1"
},
category:"Movies"
},

{
name:"HBO Pop",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/HBO_Family_Asia_logo.svg/300px-HBO_Family_Asia_logo.svg.png",
type:"dash",
manifestUri:"https://zap-live1-ott.izzigo.tv/15/out/u/dash/HBO-POP-HD/default.mpd",
clearKey:{
"861ab989089891d84ad0da296954437c":"3bdf94f9fc1888529f8d27d070d38566"
},
category:"Movies"
},

{
name:"Cinemax HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/f/f0/611-cinemax.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd",
clearKey:{
"b207c44332844523a3a3b0469e5652d7":"fe71aea346db08f8c6fbf0592209f955"
},
category:"Movies"
},

 {
name:"Bilyonaryo",
logo:"https://static.wikia.nocookie.net/tv-philippines/images/c/ce/BilyonaryoNewsChannel_Logo_-_Black_%282024%29.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default/index.mpd",
clearKey:{
"227ffaf09bec4a889e0e0988704d52a2":"b2d0dce5c486891997c1c92ddaca2cd2"
},
category:"Entertainment"
},

{
name:"Hits HD",
logo:"https://static.wikia.nocookie.net/logopedia/images/e/e9/Hits_%28Southeast_Asia%29.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd",
clearKey:{
"6d2f8a1c9b5e4c7da1f03e7b9d6c2a55":"37c9835795779f8d848a6119d3270c69"
},
category:"Entertainment"
},

{
name:"ABC Australia",
logo:"https://upload.wikimedia.org/wikipedia/en/5/57/ABC_Australia_logo.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
clearKey:{
"389497f9f8584a57b234e27e430e04b7":"3b85594c7f88604adf004e45c03511c0"
},
category:"Entertainment"
},

{
name:"Buko",
logo:"https://upload.wikimedia.org/wikipedia/en/c/c0/BuKo_Buhay_Komedya_Logo.jpg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
clearKey:{
"d273c085f2ab4a248e7bfc375229007d":"7932354c3a84f7fc1b80efa6bcea0615"
},
category:"Entertainment"
},

{
name:"Asian Food Network",
logo:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Asian_Food_Network.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd",
clearKey:{
"1619db30b9ed42019abb760a0a3b5e7f":"5921e47fb290ae263291b851c0b4b6e4"
},
category:"Lifestyle"
},

{
name:"TAP Sports",
logo:"https://upload.wikimedia.org/wikipedia/en/6/6e/TAP_Sports_channel_logo.png",
type:"dash",
manifestUri:"https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",
clearKey:{
"eabd2d95c89e42f2b0b0b40ce4179ea0":"0e7e35a07e2c12822316c0dc4873903f"
},
category:"Sports"
},

{
name:"KBS World SD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/KBS_World_%282009%29.svg/1200px-KBS_World_%282009%29.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/kbsworld/default/index.mpd",
clearKey:{
"22ff2347107e4871aa423bea9c2bd363":"c6e7ba2f48b3a3b8269e8bc360e60404"
},
category:"Entertainment"
},

{
name:"Sony Cine",
logo:"https://static.wikia.nocookie.net/logopedia/images/f/fb/Sony_Cine_2021_Logo.png",
type:"hls",
manifestUri:"https://a-cdn.klowdtv.com/live1/cine_720p/chunks.m3u8",
category:"Movies"
},

{
name:"BBC News",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/640px-BBC_News_2022_%28Alt%29.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/bbcworld_news_sd/default/index.mpd",
clearKey:{
"f59650be475e4c34a844d4e2062f71f3":"119639e849ddee96c4cec2f2b6b09b40"
},
category:"News"
},

{
name:"HITS Now",
logo:"https://cms.cignal.tv/Upload/Images/Hits%20Now.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd",
clearKey:{
"f9c3d6b18a2e4d7f9e453b1a8c6d2f70":"ce8874347ec428c624558dcdc3575dd4"
},
category:"Entertainment"
},

 {
name:"Rock Entertainment",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Rock_Entertainment.png/435px-Rock_Entertainment.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd",
clearKey:{
"0f852fb8412b11edb8780242ac120002":"4cbc004d8c444f9f996db42059ce8178"
},
category:"Entertainment"
},

{
name:"Bloomberg",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/768px-New_Bloomberg_Logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bloomberg_sd/default/index.mpd",
clearKey:{
"3b8e6d1f2c9a4f7d9a556c1e7b2d8f90":"09f0bd803966c4befbd239cfa75efe23"
},
category:"News"
},

{
name:"Knowledge Channel",
logo:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Knowledge_Channel_logo.png",
type:"dash",
manifestUri:"https://abslive.akamaized.net/dash/live/2027618/kc/manifest.mpd",
clearKey:{
"bd1f88dd3b254514bf7a113188c10dc2":"ea86da60f0116f3b92a86acf45b8e071"
},
category:"Entertainment"
},

{
name:"DepEd TV",
logo:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Depedtvlogo.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/depedch_sd/default/index.mpd",
clearKey:{
"0f853706412b11edb8780242ac120002":"2157d6529d80a760f60a8b5350dbc4df"
},
category:"Entertainment"
},

{
name:"CNA",
logo:"https://logowik.com/content/uploads/images/cna-channel-news-asia9392.jpg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/channelnewsasia/default/index.mpd",
clearKey:{
"b259df9987364dd3b778aa5d42cb9acd":"753e3dba96ab467e468269e7e33fb813"
},
category:"News"
},

{
name:"CCTV 4",
logo:"https://upload.wikimedia.org/wikipedia/en/0/08/CCTV-4_channel.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_cctv4/default/index.mpd",
clearKey:{
"b83566836c0d4216b7107bd7b8399366":"32d50635bfd05fbf8189a0e3f6c8db09"
},
category:"Entertainment"
},

 {
name:"TVUP",
logo:"https://i0.wp.com/up.edu.ph/wp-content/uploads/2017/05/logo-image2.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd",
clearKey:{
"83e813ccd4ca4837afd611037af02f63":"a97c515dbcb5dcbc432bbd09d15afd41"
},
category:"Entertainment"
},

{
name:"Fashion TV HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Fashion_TV_logo.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/fashiontvhd/default/index.mpd",
clearKey:{
"9d7c1f2a6b4e4a8d8f33c1e5b7d2a960":"3a18c535c52db7c79823f59036a9d195"
},
category:"Lifestyle"
},

{
name:"Tap TV",
logo:"https://upload.wikimedia.org/wikipedia/commons/9/94/TapTV-ph.png",
type:"dash",
manifestUri:"https://conv.iyad.space/live/136.239.173.3/001/2/ch00000090990000001149/manifest.mpd?AuthInfo=v87HD9rEhwHiAdYyrP20TsXah2%2FZLFNNIdWrVrXDMAroVo9XMLpd0k2y9rVerSvmsyK4TH4mOENKJ45mwOyS0g%3D%3D&version=v1.0&BreakPoint=0&virtualDomain=001.live_hls.zte.com&programid=ch00000000000000001319&contentid=ch00000000000000001319&videoid=ch00000090990000001149&recommendtype=0&userid=1130216695762&boid=001&stbid=02%3A00%3A00%3A00%3A00%3A00&terminalflag=1&profilecode=&usersessionid=OXNJGU1PKJQXXX&NeedJITP=1&JITPDRMType=NO",
clearKey:{
"f6804251e90b4966889b7df94fdc621e":"55c3c014f2bd12d6bd62349658f24566"
},
category:"Entertainment"
},

{
name:"Tap Edge",
logo:"https://static.wikia.nocookie.net/russel/images/5/57/TAP_Edge_Logo_November_2020.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapedge/default/index.mpd",
clearKey:{
"4553f7e8011f411fb625cefc39274300":"98f2f1d153367e84b5d559dc9dfb9a35"
},
category:"Entertainment"
},

{
name:"Crime Investigation",
logo:"",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/crime_invest/default/index.mpd",
clearKey:{
"21e2843b561c4248b8ea487986a16d33":"db6bb638ccdfc1ad1a3e98d728486801"
},
category:"Entertainment"
},

{
name:"Billard TV",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OegsZ4b19w7-9_72uXZNHJoo29CB7tRHyg&s",
type:"hls",
manifestUri:"https://1b29dd71cd5e4191a3eb26afff631ed3.mediatailor.us-west-2.amazonaws.com/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SportsTribal-BilliardTV/BILLIARDTV_SCTE.m3u8",
category:"Entertainment"
},

{
name:"Lifetime SD",
logo:"https://logowik.com/content/uploads/images/lifetime-tv-new-20202036.jpg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_lifetime/default/index.mpd",
clearKey:{
"cf861d26e7834166807c324d57df5119":"64a81e30f6e5b7547e3516bbf8c647d0"
},
category:"Lifestyle"
},

{
name:"CGTN",
logo:"https://ui.cgtn.com/static/ng/resource/images/logo_title.png",
type:"dash",
manifestUri:"https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd",
clearKey:{
"0f854ee4412b11edb8780242ac120002":"9f2c82a74e727deadbda389e18798d55"
},
category:"News"
},

{
name:"France 24",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/800px-FRANCE_24_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd",
clearKey:{
"0f85614a412b11edb8780242ac120002":"9f9d44d353607e0fef8b4f824e9ab5fc"
},
category:"News"
}, 

 {
name:"Viva Cinema",
logo:"https://static.wikia.nocookie.net/logopedia/images/0/07/Viva_Cinema_2021.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
clearKey:{
"07aa813bf2c147748046edd930f7736e":"3bd6688b8b44e96201e753224adfc8fb"
},
category:"Movies"
},

{
name:"One Sports+",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Sports_logo.svg/768px-One_Sports_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd",
clearKey:{
"322d06e9326f4753a7ec0908030c13d8":"1e3e0ca32d421fbfec86feced0efefda"
},
category:"Sports"
},{
name:"Viva Cinema",
logo:"https://static.wikia.nocookie.net/logopedia/images/0/07/Viva_Cinema_2021.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
clearKey:{
"07aa813bf2c147748046edd930f7736e":"3bd6688b8b44e96201e753224adfc8fb"
},
category:"Movies"
},

{
name:"Warner TV HD",
logo:"https://static.wikia.nocookie.net/logopedia/images/5/55/Warner_TV.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_warnerhd/default/index.mpd",
clearKey:{
"4503cf86bca3494ab95a77ed913619a0":"afc9c8f627fb3fb255dee8e3b0fe1d71"
},
category:"Entertainment"
},

{
name:"Nickelodeon SD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nickelodeon_2023_logo_%28outline%29.svg/768px-Nickelodeon_2023_logo_%28outline%29.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/dr_nickelodeon/default/index.mpd",
clearKey:{
"9ce58f37576b416381b6514a809bfd8b":"f0fbb758cdeeaddfa3eae538856b4d72"
},
category:"Kids"
},

{
name:"History HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/History_HD_Logo.svg/2560px-History_HD_Logo.svg.png",
type:"dash",
manifestUri:"https://ucdn.mediaquest.com.ph/bpk-tv/dr_historyhd/default/index.mpd",
clearKey:{
"a7724b7ca2604c33bb2e963a0319968a":"6f97e3e2eb2bade626e0281ec01d3675"
},
category:"Lifestyle"
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

 {
name:"Discovery Channel",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Discovery_Channel_-_Logo_2019.svg/512px-Discovery_Channel_-_Logo_2019.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/discovery/default/index.mpd",
clearKey:{
"d9ac48f5131641a789328257e778ad3a":"b6e67c37239901980c6e37e0607ceee6"
},
category:"Lifestyle"
},

{
name:"National Geographic",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/960px-Natgeologo.svg.png",
type:"dash",
manifestUri:"https://v4-vno-j13-cdn-01.live.cdn.cgates.lt/live/dash/561901/index.mpd",
clearKey:{
"6d647aff767c453daa5fb54a44c783c6":"2f971e6a1cc58e7085afc761a3f13162"
},
category:"Entertainment"
},

{
name:"MYX",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Myxphlogo.svg/1200px-Myxphlogo.svg.png",
type:"dash",
manifestUri:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-myxnola-dash-abscbnono/index.mpd",
clearKey:{
"cf861d26e7834166807c324d57df5119":"64a81e30f6e5b7547e3516bbf8c647d0"
},
category:"Local"
},

{
name:"tvN Premium HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_tvN.svg/375px-Logo_tvN.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnpre/default/index.mpd",
clearKey:{
"e1bde543e8a140b38d3f84ace746553e":"b712c4ec307300043333a6899a402c10"
},
category:"Entertainment"
},

 {
name:"TAP Movies HD",
logo:"https://static.wikia.nocookie.net/russel/images/c/cb/TAP_Movies_Logo_2021.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd",
clearKey:{
"71cbdf02b595468bb77398222e1ade09":"c3f2aa420b8908ab8761571c01899460"
},
category:"Movies"
},
{
name:"AXN",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/AXN_logo.svg/395px-AXN_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd",
clearKey:{
"8a6c2f1e9d7b4c5aa1f04d2b7e9c1f88":"05e6bfa4b6805c46b772f35326b26b36"
},
category:"Entertainment"
},
{
name:"Nick Jr",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nick_Jr._logo_2023_%28outline%29.svg/960px-Nick_Jr._logo_2023_%28outline%29.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd",
clearKey:{
"bab5c11178b646749fbae87962bf5113":"0ac679aad3b9d619ac39ad634ec76bc8"
},
category:"Kids"
},
{
name:"Premier Sports HD",
logo:"https://static.wikia.nocookie.net/russel/images/f/f8/Premier_Sports_Logo_2021.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd",
clearKey:{
"b8b595299fdf41c1a3481fddeb0b55e4":"cd2b4ad0eb286239a4a022e6ca5fd007"
},
category:"Sports"
},
{
name:"One News",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OneNewsPH_logo.svg/800px-OneNewsPH_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
clearKey:{
"2e6a9d7c1f4b4c8a8d33c7b1f0a5e924":"4c71e178d090332fbfe72e023b59f6d2"
},
category:"News"
},
{
name:"Celestial Movies Pinoy",
logo:"https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/305764493_476556937813865_3812090384144915110_n.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
clearKey:{
"0f8537d8412b11edb8780242ac120002":"2ffd7230416150fd5196fd7ea71c36f3"
},
category:"Movies"
},
{
name:"Tap Action Flix Movies",
logo:"https://static.wikia.nocookie.net/logopedia/images/8/88/TAP_ActionFlix_logo.png",
type:"dash",
manifestUri:"https://nox1.alwaysdata.net/conv.php/tapactionflix.mpd",
clearKey:{
"4553f7e8011f411fb625cefc39274300":"98f2f1d153367e84b5d559dc9dfb9a35"
},
category:"Movies"
},
{
name:"DreamWorks (Tagalized)",
logo:"https://cms.cignal.tv/Upload/Images/Dream-Works.jpg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworktag/default/index.mpd",
clearKey:{
"564b3b1c781043c19242c66e348699c5":"d3ad27d7fe1f14fb1a2cd5688549fbab"
},
category:"Kids"
},
{
name:"Teleradyo Serbisyo",
logo:"https://upload.wikimedia.org/wikipedia/en/archive/2/2e/20231130051829%21TeleRadyo_Serbisyo_logo.svg",
type:"dash",
manifestUri:"https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/48fc2f9d-055e-4c0c-adab-a81b6956a20b/index.mpd",
clearKey:{
"47c093e0c9fd4f80839a0337da3dd876":"603248b858276f533a13e17f2f48c711"
},
category:"Entertainment"
}, 

 {
name:"IBC 13",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/IBC_13_Logo_2011.svg/1200px-IBC_13_Logo_2011.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/ibc13_sd_new/default1/index.mpd",
clearKey:{
"16ecd238c0394592b8d3559c06b1faf5":"05b47ae3be1368912ebe28f87480fc84"
},
category:"Local"
},
{
name:"Lotus Macau",
logo:"https://cms.cignal.tv/Upload/Thumbnails/mo-macau-lotus-tv-3757.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/lotusmacau_prd/default/index.mpd",
clearKey:{
"60dc692e64ea443a8fb5ac186c865a9b":"01bdbe22d59b2a4504b53adc2f606cc1"
},
category:"Entertainment"
},
{
name:"MPTV",
logo:"https://static.wikia.nocookie.net/russel/images/8/8d/MPTV_Logo_2023.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_mptv/default/index.mpd",
clearKey:{
"6aab8f40536f4ea98e7c97b8f3aa7d4e":"139aa5a55ade471faaddacc4f4de8807"
},
category:"Local"
},
{
name:"Discovery Science",
logo:"",
type:"dash",
manifestUri:"https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryscience2/default/manifest.mpd",
clearKey:{
"5458f45efedb4d6f8aa6ac76c85b621b":"dbf8a0a306a64525ba3012fd225370c0"
},
category:"Lifestyle"
},
{
name:"Travel Channel",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2018_Travel_Channel_logo.svg/640px-2018_Travel_Channel_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/travel_channel_sd/default/index.mpd",
clearKey:{
"f3047fc13d454dacb6db4207ee79d3d3":"bdbd38748f51fc26932e96c9a2020839"
},
category:"Lifestyle"
},
{
name:"SPOTV 2 HD",
logo:"https://static.wikia.nocookie.net/logopedia/images/6/68/SPOTV2_logo_2018.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.netqp-pldt-live-bpk-01-prod.akamaized.net",
clearKey:{
"7eea72d6075245a99ee3255603d58853":"6848ef60575579bf4d415db1032153ed"
},
category:"Sports"
},
{
name:"Arirang",
logo:"https://upload.wikimedia.org/wikipedia/commons/6/64/Arirang_logo.png",
type:"dash",
manifestUri:"https://converse.nathcreqtives.com/1107/manifest.mpd",
category:"Entertainment"
},
{
name:"BBC Earth HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/7/7e/BBC_Earth_2023.svg",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_bbcearth_hd1/default/index.mpd",
clearKey:{
"34ce95b60c424e169619816c5181aded":"0e2a2117d705613542618f58bf26fc8e"
},
category:"News"
}, 

 {
name:"PTV 4",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/PTV_4_Para_Sa_Bayan_Logo_June_2017.svg/800px-PTV_4_Para_Sa_Bayan_Logo_June_2017.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_ptv4_sd/default/index.mpd",
clearKey:{
"71a130a851b9484bb47141c8966fb4a3":"ad1f003b4f0b31b75ea4593844435600"
},
category:"Local"
},
{
name:"True FM TV",
logo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Radyo5truefmlogo.webp/640px-Radyo5truefmlogo.webp.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd",
clearKey:{
"a4e2b9d61c754f3a8d109b6c2f1e7a55":"1d8d975f0bc2ed90eda138bd31f173f4"
},
category:"Entertainment"
},
{
name:"PremierTennis",
logo:"https://static.wikia.nocookie.net/russel/images/f/f8/Premier_Sports_Logo_2021.png",
type:"dash",
manifestUri:"https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",
clearKey:{
"59454adb530b4e0784eae62735f9d850":"61100d0b8c4dd13e4eb8b4851ba192cc"
},
category:"Sports"
},
{
name:"NHK World Japan",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NHK_World.svg/300px-NHK_World.svg.png",
type:"hls",
manifestUri:"https://media-tyo.hls.nhkworld.jp/hls/w/live/master.m3u8",
category:"Entertainment"
},
{
name:"SPOTV HD",
logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/SPOTV_logo.svg/1200px-SPOTV_logo.svg.png",
type:"dash",
manifestUri:"https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd",
clearKey:{
"ec7ee27d83764e4b845c48cca31c8eef":"9c0e4191203fccb0fde34ee29999129e"
},
category:"Sports"
}, 

 {
 name: 'Test Stream',
 logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
 type: 'hls',
 manifestUri: 'https://c0c65b821b3542c3a4dca92702f59944.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_BabySharkTV/playlist.m3u8',
 category: "Kids"
},

 {
      name: 'Test Stream',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  type: 'hls',
  manifestUri: 'https://linear-899.frequency.stream/dist/cineverse/899/hls/master/playlist.m3u8',
  category: "Local"
},

 {
      name: 'Test Stream',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  type: 'hls',
  manifestUri: 'https://dvu7aia8rjlfm.cloudfront.net/master.m3u8',
  category: "Local"
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
const categories = ["All","Sports","Local","News","Movies","Kids","Entertainment","Lifestyle"];

/* ================= CORE SYSTEM (UNCHANGED) ================= */

const video = document.getElementById("video");
const channelsContainer = document.getElementById("channels");
const categoriesContainer = document.getElementById("categories");
const searchInput = document.getElementById("search");

let player;

async function initPlayer(){
player = new shaka.Player(video);
player.addEventListener("error", e => console.log(e));
}

async function loadStream(channel){
try{
if(channel.type === "dash"){
player.configure({
drm:{ clearKeys: channel.clearKey || {} }
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

function renderChannels(category = "All"){
channelsContainer.innerHTML = "";

const keyword = searchInput.value.toLowerCase();

let filtered = streams.filter(channel => {
const matchCategory =
category === "All" || channel.category === category;

const matchSearch =
channel.name.toLowerCase().includes(keyword);

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
<div class="live-badge">LIVE</div>
`;

card.addEventListener("click", () => loadStream(channel));
channelsContainer.appendChild(card);
});
}

function createCategories(){
categories.forEach(category => {
const btn = document.createElement("button");
btn.innerText = category;

btn.onclick = () => {
document.querySelectorAll(".category-btn")
.forEach(b => b.classList.remove("active"));

btn.classList.add("active");
renderChannels(category);
};

btn.className = "category-btn";
categoriesContainer.appendChild(btn);
});

document.querySelector(".category-btn").classList.add("active");
}

searchInput.addEventListener("input", () => {
const active = document.querySelector(".category-btn.active");
renderChannels(active.innerText);
});

window.addEventListener("load", () => {
setTimeout(() => {
const loading = document.getElementById("loading");
loading.style.opacity = "0";
setTimeout(() => loading.style.display = "none", 500);
}, 1800);
});

document.addEventListener("DOMContentLoaded", async () => {
await initPlayer();
createCategories();
renderChannels();

if(streams.length > 0){
loadStream(streams[0]);
}
});