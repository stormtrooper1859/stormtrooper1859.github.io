var btn = document.getElementById('btn');
var video = document.getElementById('video');
var video2 = document.getElementById('video2');
var source = document.getElementById('source');

btn.addEventListener('click', function(e){
    video.setAttribute('src', 'https://video-preview.s3.yandex.net/sTNfhQAAAAA.mp4');
});

video.addEventListener('loadeddata', function(e){
    console.log('video');
    console.log(e);
});

video2.addEventListener('loadeddata', function(e){
    console.log('video2');
    console.log(e);
});

source.addEventListener('loadeddata', function(e){
    console.log('source');
    console.log(e);
});

