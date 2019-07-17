alert("click on playerone and playertwo buttons!And continue playing")
var p1button=document.querySelector("#p1");
var p2button=document.getElementById("p2");
var resetbutton=document.getElementById("reset");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var numinput=document.querySelector("input");
var displayscore=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver=false;
var winningscore=5;


p1button.addEventListener("click",function(){
	if(!gameOver){
    p1score++;
    if(p1score===winningscore){
     p1display.classList.add("winner");
     gameOver=true;
     alert("playerone won the game!!To play again click reset");
     }
    p1display.textContent=p1score;
}
});

p2button.addEventListener("click",function(){
	if(!gameOver){
    p2score++;
    if(p2score===winningscore){
    	p2display.classList.add("winner");
    	gameOver=true;
    	alert("playertwo won the game!!To play again click reset");
    }
    p2display.textContent=p2score;
}
});

resetbutton.addEventListener("click",function(){
   reset();
});
function reset() {
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver=false;
}

numinput.addEventListener("change",function(){
    displayscore.textContent=numinput.value;
    winningscore=Number(numinput.value);
    reset();
});
