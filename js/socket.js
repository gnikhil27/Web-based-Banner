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
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

setInterval(getJSON, 2000);