 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {

   new YT.Player('player', {
     videoId: 'y91UJ-zVatk',
     playerVars: {
        autoplay: true, //자동 재생 유무
        mute: true,
        loop: true, //반복 재생 유무
        playlist: 'y91UJ-zVatk'
     },
     events: {
        onReady: function(event){
            event.target.mute();
        }
     }
   });
 }