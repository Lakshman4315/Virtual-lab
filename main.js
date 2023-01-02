
function toggle(){
    if(document.getElementById("sidenav").style.display == "none"){
        document.getElementById("sidenav").style.display = "block";
        document.getElementById("content").style.marginLeft="15%";
    }else{
        document.getElementById("sidenav").style.display = "none";
        document.getElementById("content").style.marginLeft="2%";

    }
}