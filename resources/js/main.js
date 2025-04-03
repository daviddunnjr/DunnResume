function ChangeTheme(x) {
    document.querySelector("link[id='theme-css']").href = "./css/"+x+".css";
    return;
}

function PrintPage() {
    window.print();
}

function Show() {
    document.getElementById('content').style.display = "block";
    document.getElementById('show').style.display = `none`;
    document.getElementById('hide').style.display = `inline-block`;
}

function Hide() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('show').style.display = `inline-block`;
    document.getElementById('hide').style.display = `none`;
}

function Close() {
    document.getElementById('tools').style.display = 'none';
}

/* Borrowed from W3 */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}