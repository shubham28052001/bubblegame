var timer=60;
var score =0;
var hitrn=0;

 // event bubbling == //jispe click karenge wo element par event raise hoga,aur event listener na milne par event element 
//  ke parent par listener doondega wahan bhi na milne par parent ke parent ke parent me doondega 



function makebubble(){
    var container="";
for(var i=1;i<161;i++){
    var rn=Math.floor(Math.random()*20)
      container +=`<div id="bubble">${rn}</div>` ;
}

document.querySelector("#panelbottom").innerHTML=container;
}
function GetnewHit(){
    hitrn = Math.floor(Math.random()*20);
    document.querySelector("#hitval").textContent =hitrn;
}
function increaseScore(){  
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){          //because minus me na jaye
            timer--;
   document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint); //timer rokne ke liye
            document.querySelector("#panelbottom").innerHTML="<h1>Game Over!</h1>"
        }
    },1000)
}

document.querySelector("#panelbottom").addEventListener
("click",function(dets){
 var clicknum =  Number(dets.target.textContent); //target=kis par click hua ye batayega
              //textcontent= div ke andar sirf text aayega jabki target pura div aayega 
              //Number= ab ye jo hai ye number nahi hai string hai string ko number me badalne ke liye
  
  if(clicknum===hitrn){
    increaseScore();
    makebubble();
    GetnewHit();
  }

            })

runtimer();
makebubble();
GetnewHit();

