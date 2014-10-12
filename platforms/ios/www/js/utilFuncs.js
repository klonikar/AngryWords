function isAndroidBrowser() {
    return /Android/i.test(navigator.userAgent);
}

function isIOSBrowser() {
    return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}

function isWindowsBrowser() {
    return /(Windows)/g.test(navigator.userAgent);
}

function drawStringOnCanvas(str) {
    btnClear_onClick();
    canvasContext.fillStyle = "lightgrey";
    canvasContext.font = "150px Arial";
    canvasContext.fillText(str, 25, 150);
}

function playAudio(id) {
    var audioElement = document.getElementById(id);
    var url = audioElement.firstChild.getAttribute('src');
    var my_media = new Media("/android_asset/www/" + url,
            // success callback
             function () { /*console.log("playAudio():Audio Success"); */ },
            // error callback
             function (err) { console.log("playAudio():Audio Error: ", err); }
    );
           // Play audio
    my_media.play();
}

var g_titleCardText = '<div class="introCard"><ul><li>Tap on the card title and images to know how to pronounce the letter or word. </li><li>Increase the speaker volume if you can not hear the pronunciation. </li><li>You can practice writing the letter or word in the scribble area below.</li><li> Swipe/scroll (slowly) to left or right for more letters.</li><li>Best viewed on mobile chrome (phone or tablet)</li></div>';
