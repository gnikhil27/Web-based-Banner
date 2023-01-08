const typSpd = 150; 
const waitTime = 1000;
let l_text, ci=0, stopped=false;
function writeString(e, str, i) {
    e.innerHTML = e.innerHTML + str[i];

    if(e.innerText == str)
    {   console.log("here");
        if(ci++==l_text.length)ci=0;
        setTimeout(slowlyDelete, waitTime, e);
    }
}
  
function deleteString(e) {
e.innerHTML = e.innerHTML.substring(0, e.innerHTML.length - 1);

if (e.innerHTML.length == 0)
    slowlyWrite(e, l_text[ci]);
}

function slowlyDelete(e) {
    // if(stopped)return;
    // stopped=true;
for (var i = 0; i < e.innerText.length; i++) {
    setTimeout(deleteString, typSpd / 2 * i, e);
}

}

function slowlyWrite(e, str) {
    // if(str != undefined)
console.log("Called Slowly write")
for (var i = 0; i < str.length; i++) {
    setTimeout(writeString, typSpd * i, e, str, i);
}
}