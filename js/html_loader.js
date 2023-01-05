function includeHTML(elmnt) {
      // const xhttp = new Array(z.length);
      console.log(elmnt.getAttribute("id"));
      /*search for elements with a certain atrribute:*/
      file = "./theme/" + elmnt.getAttribute("id")+".html";
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            // elmnt.removeAttribute("w3-include-html");
            // includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
      }
}

function callAllSection(){
  var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("section");
    for (i = 0; i < z.length; i++) includeHTML(z[i]);
}

callAllSection();