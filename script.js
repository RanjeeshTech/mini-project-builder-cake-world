/*Fill your code */
var count=1;
var chococount = 0;
var strawberrycount = 0;
var butterscothcount = 0;
var vanillacount = 0;
var redvelvetcount = 0;
var total = 0;
function chocolate(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#7B3F00";
            document.getElementById("chocolate").style.display="block";
            total=total+300;
            chococount++;
            document.getElementById("quantity1").innerHTML="x"+chococount;
            document.getElementById("chocolate-btn").style.backgroundColor="white";
            document.getElementById("candles").style.visibility="hidden";
            document.getElementById("total").style.visibility = "hidden";
        }
    }
    count++;
}
function strawberry(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor=" #fc5a8d";
            document.getElementById("strawberry").style.display="block";
            total=total+100;
            strawberrycount++;
            document.getElementById("quantity2").innerHTML="x"+strawberrycount;
            document.getElementById("strawberry-btn").style.backgroundColor="white";
            document.getElementById("candles").style.visibility="hidden";
            document.getElementById("total").style.visibility = "hidden";
        }
    }
    count++;
}
function butterscoth(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#E3963E";
            document.getElementById("butterscoth").style.display="block";
            total=total+200;
            butterscothcount++;
            document.getElementById("quantity3").innerHTML="x"+butterscothcount;
            document.getElementById("butterscoth-btn").style.backgroundColor="white";
            document.getElementById("candles").style.visibility="hidden";
            document.getElementById("total").style.visibility = "hidden";
        }
    }
    count++;
}
function vanilla(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#F3E5AB";
            document.getElementById("vanilla").style.display="block";
            total=total+250;
            vanillacount++;
            document.getElementById("quantity4").innerHTML="x"+vanillacount;
            document.getElementById("vanilla-btn").style.backgroundColor="white";
            document.getElementById("candles").style.visibility="hidden";
            document.getElementById("total").style.visibility = "hidden";
        }
    }
    count++;
}
function redvelvet(){
    for(let i=0;i<6;i++){
        if(count==i){
            document.getElementById("layer"+i).style.visibility="visible";
            document.getElementById("layer"+i).style.backgroundColor="#9c0000";
            document.getElementById("redvelvet").style.display="block";
            total=total+350;
            redvelvetcount++;
            document.getElementById("quantity5").innerHTML="x"+redvelvetcount;
            document.getElementById("redvelvet-btn").style.backgroundColor="white";
            document.getElementById("candles").style.visibility="hidden";
            document.getElementById("total").style.visibility = "hidden";
        }
    }
    count++;
}
function buycake(){
    document.getElementById("total-cost").innerHTML = total;
    document.getElementById("total").style.display = "block";
    document.getElementById("total").style.visibility = "visible";
    if(count==6){
        document.getElementById("candles").style.top="10px";
        document.getElementById("candles").style.visibility="visible";
    }   
    if(count==5){
        document.getElementById("candles").style.top="60px";
        document.getElementById("candles").style.visibility="visible";
    }  
    if(count==4){
        document.getElementById("candles").style.top="110px";
        document.getElementById("candles").style.visibility="visible";
    }  
    if(count==3){
        document.getElementById("candles").style.top="160px";
        document.getElementById("candles").style.visibility="visible";
    }  
    if(count==2){
        document.getElementById("candles").style.top="210px";
        document.getElementById("candles").style.visibility="visible";
    }  
}