const videoContainer = document.getElementById('video-container');

function carregarVideo(urlVideo) {
    const video = document.createElement('video');
    video.src = urlVideo;
    video.controls = true;
    video.autoplay = false;
    video.style.width = "100%";
    video.style.borderRadius = "15px";
    videoContainer.appendChild(video);
}

// Chame a função passando o link do vídeo
carregarVideo('caminho-do-seu-video.mp4');