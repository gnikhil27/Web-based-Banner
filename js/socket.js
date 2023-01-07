function fullScreen(){
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen))
    {
        if (document.documentElement.requestFullScreen){
            document.documentElement.requestFullScreen();
        }
        else if (document.documentElement.mozRequestFullScreen){ // Firefox
            document.documentElement.mozRequestFullScreen();
        }
        else if (document.documentElement.webkitRequestFullScreen){   // Chrome, Safari & Opera
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else if (document.msRequestFullscreen){ // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    }
}
var xmlhttp = new XMLHttpRequest();
    var url = "/data.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            set_mode(myArr);
            // dataTag = document.getElementsByClassName("data");
            // for(let i = 0 ; i < dataTag.length ; i++) {
            //     dataTag[i].innerHTML=myArr.text;
            // };
        }
    };
const getJSON = function () {
    // fullScreen();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

setInterval(getJSON, 2000);