/*Fill your code */
var count=1;
var chocolate = function(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#7B3F00";
            document.getElementById("chocolate").style.display="block";
        }
    }
    count++;
}
var strawberry = function(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor=" #fc5a8d";
            document.getElementById("strawberry").style.display="block";
        }
    }
    count++;
}
var butterscoth = function(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#E3963E";
            document.getElementById("butterscoth").style.display="block";
        }
    }
    count++;
}
var vanilla = function(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#F3E5AB";
            document.getElementById("vanilla").style.display="block";
        }
    }
    count++;
}
var redvelvet = function(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#9c0000";
            document.getElementById("redvelvet").style.display="block";
        }
    }
    count++;
}
