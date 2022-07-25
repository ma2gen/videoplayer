const main = () => {
    const video = document.getElementById('video-player');

    //ビデオファイル選択ボタン
    const fileSelector = document.getElementById('video-file');
    const videoselectButton = document.getElementById('video-select');
    videoselectButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileSelector.click();
    });

    //ビデオファイル選択
    fileSelector.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file.type.match('video.*')) {
            console.log('This file is not video.');
            return;
        }

        video.src = window.URL.createObjectURL(file);
        video.load();
        video.play();
    });


    //ビデオフルスクリーンボタン
    const videoFullScreenButton = document.getElementById('video-fullscreen');
    videoFullScreenButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
        else if (video.webkitRequestsFullscreen) {
            video.webkitRequestsFullscreen();
        }
        else if (video.mozRequestFullscreen) {
            video.mozRequestFullscreen();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});