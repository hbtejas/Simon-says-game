let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];


let started=false;
let level=0;


let h2=document.querySelector("h2"); 

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let rancolor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${rancolor}`);
    // console.log(ranIdx);
    // console.log(rancolor);
    // console.log(ranBtn);  
    gameseq.push(rancolor);
    console.log(gameseq);
    gameFlash(ranBtn);
}

function checkAns(idx){
    // console.log("current level:",level);

    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start.` ;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}



let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);

}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}