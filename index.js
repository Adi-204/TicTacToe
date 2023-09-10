console.log("Welcome!")
let music = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isWinner = false;

//Change turn function
const changeTurn=()=>{
    return turn === "X"?"0":"X";
}

//CheckWinner
const CheckWinner=()=>{
    let boxtxt = document.getElementsByClassName("txt");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach((item)=>{
        if((boxtxt[item[0]].innerHTML === boxtxt[item[1]].innerHTML) && (boxtxt[item[1]].innerHTML === boxtxt[item[2]].innerHTML) && (boxtxt[item[0]].innerHTML!=='')){
            document.querySelector('.info').innerHTML=boxtxt[item[0]].innerHTML + 
            ' Won!'
            isWinner = true;
            document.getElementsByTagName('img')[0].style.width='200px';
            gameOver.play();
        }
    });
}
music.play();
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((ele)=>{
    let boxtxt = ele.querySelector(".txt");
    ele.addEventListener('click',()=>{
        if(boxtxt.innerHTML == ""){
            boxtxt.innerHTML=turn;
            turn = changeTurn();
            turnAudio.play();
            CheckWinner();
            if(!isWinner){
                document.querySelector(".info").innerHTML = turn + " turn";
            }
        }
    });
});

//Reset Game
let resetBtn = document.querySelector("#btn");
resetBtn.addEventListener('click',()=>{
    let boxtxts = document.getElementsByClassName("txt");
    Array.from(boxtxts).forEach((ele)=>{
        ele.innerHTML="";
    });
    isWinner = false;
    turn = 'X';
    document.querySelector(".info").innerHTML = turn + " turn";
    document.getElementsByTagName('img')[0].style.width='0px';

})

