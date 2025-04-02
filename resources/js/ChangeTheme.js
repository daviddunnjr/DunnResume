function ChangeTheme(x) {
    document.querySelector("link[id='theme-css']").href = "./css/"+x+".css";
    return;
}