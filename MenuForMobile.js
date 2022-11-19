const _list = document.getElementById("NavMobileUl");
const _menuImage = document.getElementById("MenuImage");
const _mainBody = document.getElementById("MainBody");
const _logo = document.getElementById("LogoImage");

function OpenList(){
    console.log("Open btn");
    _list.style.display = "block";
    _menuImage.style.display = "none";
    _mainBody.style.display = "none";
    _logo.style.display = "none";
}
function CloseList(){
    console.log("Close btn");
    //if(list.style.display == "block"){
        _list.style.display = "none";
        _menuImage.style.display = "block";
        _mainBody.style.display = "block";
        _logo.style.display = "block";
}
