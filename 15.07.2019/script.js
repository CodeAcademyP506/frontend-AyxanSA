var inputbox = document.getElementsByClassName("clickedBox")[0];
 var searchbox = document.getElementsByClassName("searchbox")[0];

inputbox.addEventListener("click",function(){
    if(searchbox.style.visibility=="hidden"){
        searchbox.style.visibility ="visible"
        searchbox.style.opacity ="1"
    }
    else{
        searchbox.style.opacity ="0"
        searchbox.style.visibility ="hidden"
    }
})


