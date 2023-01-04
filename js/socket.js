var xmlhttp = new XMLHttpRequest();
    var url = "./js/data.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            document.getElementById("data").innerHTML=myArr.text;
        }
    };
const getJSON = function () {
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

setInterval(getJSON, 2000);