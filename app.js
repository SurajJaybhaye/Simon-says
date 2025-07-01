let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let maxLevel = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("press");
        started = true;
        levelUp();
    }
    
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    }, 250);
}

function btnPress(){
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
   
    userSeq.push(userColor);
    //  console.log(userSeq); 
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    console.log(level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        
         maxLevel = Math.max(level,maxLevel);
        h2.innerHTML = `Game Over!  Score: <b>${level}<b> <br> Max Score: ${maxLevel} <br> Press Any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }

}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}