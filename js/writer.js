function writeString(e, str, i) {
    e.innerHTML = e.innerHTML + str[i];
}
  
function deleteString(e) {
e.innerHTML = e.innerHTML.substring(0, e.innerHTML.length - 1);

if (e.innerHTML.length == 0)
    slowlyWrite(e, text);
    // slowlyWrite(e, text[mi++]);
}

function slowlyDelete(e) {
for (var i = 0; i < e.innerHTML.length; i++) {
    setTimeout(deleteString, typSpd / 2 * i, e);
}
}

function slowlyWrite(e, str) {
    // if(str != undefined)
for (var i = 0; i < str.length; i++) {
    setTimeout(writeString, typSpd * i, e, str, i);
}
}
  