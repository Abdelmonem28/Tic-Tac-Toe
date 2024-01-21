// tic tac toe game
// click function
let boxes = document.getElementsByClassName("box");
let score = document.getElementById("score");
let dash = document.getElementById("dash");
let flag = 0, x = 0, o = 0, click = 0;

function adding(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click",clicked)
    }
}
function remove(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener("click",clicked)
    }
}
function reset(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeAttribute("data-XO");
        boxes[i].children[0].innerText = "";
        boxes[i].style.backgroundColor = "transparent";
    }
    click = 0;
    dash.innerText = "tic tac toe";
    adding()
}

let clicked = (e)=>{
    if(!(e.currentTarget.hasAttribute("data-XO"))){
        click++;
        if (flag === 0) {
            flag++;
            // edit the span and dashboard value
            e.currentTarget.children[0].innerText = "X";
            dash.innerText = "O";
            // set attribute to box to know it's x or o
            e.currentTarget.setAttribute("data-XO",1);
        }else if(flag === 1){
            flag--;
            // edit the span and dashboard value
            e.currentTarget.children[0].innerText = "O";
            dash.innerText = "X";
            // set attribute to box to know it's x or o
            e.currentTarget.setAttribute("data-XO",2);
        }
        // draw checking
        if(click === 9 && winngingCheck() !== 1 && winngingCheck() !== 2){
            dash.innerText = "Draw"
            setTimeout(reset,3000)
        }
        // winning checking every move
        if(winngingCheck() === 1){
            x++
            remove();
            dash.innerText = "X is the winner"
            score.children[0].innerText = `X=${x}`
            //reset function for x
            setTimeout(reset,3000)
        }else if(winngingCheck() === 2){
            o++
            remove();
            dash.innerText = "O is the winner"
            score.children[1].innerText = `O=${o}`
            //reset function for o
            setTimeout(reset,3000)
        }
    }
}
//adding function to boxes
adding()
// winning compination
let winngingX1 = [1,1,1,0,0,0,0,0,0], winngingX2 = [0,0,0,1,1,1,0,0,0], winngingX3 = [0,0,0,0,0,0,1,1,1], winngingX4 = [1,0,0,1,0,0,1,0,0], winngingX5 = [0,1,0,0,1,0,0,1,0], winngingX6 = [0,0,1,0,0,1,0,0,1], winngingX7 = [1,0,0,0,1,0,0,0,1], winngingX8 = [0,0,1,0,1,0,1,0,0], winngingO1 = [2,2,2,0,0,0,0,0,0], winngingO2 = [0,0,0,2,2,2,0,0,0], winngingO3 = [0,0,0,0,0,0,2,2,2], winngingO4 = [2,0,0,2,0,0,2,0,0], winngingO5 = [0,2,0,0,2,0,0,2,0], winngingO6 = [0,0,2,0,0,2,0,0,2], winngingO7 = [2,0,0,0,2,0,0,0,2], winngingO8 = [0,0,2,0,2,0,2,0,0];
//winning arranys
let winngingArrayX = [winngingX1,winngingX2,winngingX3,winngingX4,winngingX5,winngingX6,winngingX7,winngingX8], winngingArrayO = [winngingO1,winngingO2,winngingO3,winngingO4,winngingO5,winngingO6,winngingO7,winngingO8]
//winning check function
function winngingCheck(){
    let three=[];
    // X checking
    XLoop:for (let i = 0; i < winngingArrayX.length; i++) {
        let X=0;
        three = [];
        for (let j = 0; j < 9; j++) {
            if(winngingArrayX[i][j] === parseInt(boxes[j].getAttribute("data-XO"))){
                X++;
                three.push(boxes[j]);
            }
        }
        if (X === 3){
            three.forEach((ele)=>ele.style.backgroundColor = "lightblue");
            return 1;
        }
    }
    // O checking
    OLoop:for (let i = 0; i < winngingArrayO.length; i++) {
        let O=0;
        three = [];
        for (let j = 0; j < 9; j++) {
            if(winngingArrayO[i][j] === parseInt(boxes[j].getAttribute("data-XO"))){
                O++;
                three.push(boxes[j]);
            }
        }
        if (O === 3){
            three.forEach((ele)=>ele.style.backgroundColor = "lightblue");
            return 2;
        }
    }
}