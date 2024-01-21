// tic tac toe game

// click function
let boxes = document.getElementsByClassName("box");

let score = document.getElementById("score");

let dash = document.getElementById("dash");

let flag = 0;

let x = 0;
let o = 0;

let click =0;

window.sessionStorage.setItem("X",0)
window.sessionStorage.setItem("O",0)

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

        if(click === 9 && winngingCheck() !== 1 && winngingCheck() !== 2){
            dash.innerText = "Draw"
            setTimeout(()=>{
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].removeAttribute("data-XO");
                    boxes[i].children[0].innerText = "";
                    boxes[i].style.backgroundColor = "transparent";
                }
                click = 0;
                dash.innerText = "tic tac toe";
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].addEventListener("click",clicked)
                }
            },3000)
        }
        
        // winning checking every move
        if(winngingCheck() === 1){
            x++
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].removeEventListener("click",clicked)
            }
            sessionStorage.setItem("X",x)
            dash.innerText = "X is the winner"
            score.children[0].innerText = `X=${sessionStorage.getItem("X")}`
            
            //reset function for x
            setTimeout(()=>{
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].removeAttribute("data-XO");
                    boxes[i].children[0].innerText = "";
                    boxes[i].style.backgroundColor = "transparent";
                }
                click = 0;
                dash.innerText = "tic tac toe";
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].addEventListener("click",clicked)
                }
            },3000)
        }else if(winngingCheck() === 2){
            o++
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].removeEventListener("click",clicked)
            }
            sessionStorage.setItem("O",o)
            dash.innerText = "O is the winner"
            score.children[1].innerText = `O=${sessionStorage.getItem("O")}`

            //reset function for o
            setTimeout(()=>{
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].removeAttribute("data-XO");
                    boxes[i].children[0].innerText = "";
                    boxes[i].style.backgroundColor = "transparent";
                }
                click = 0;
                dash.innerText = "tic tac toe";
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].addEventListener("click",clicked)
                }
            },3000)
        }
    }
}

//adding function to boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",clicked)
}

// winning compination
let winngingX1 = [1,1,1,0,0,0,0,0,0];
let winngingX2 = [0,0,0,1,1,1,0,0,0];
let winngingX3 = [0,0,0,0,0,0,1,1,1];
let winngingX4 = [1,0,0,1,0,0,1,0,0];
let winngingX5 = [0,1,0,0,1,0,0,1,0];
let winngingX6 = [0,0,1,0,0,1,0,0,1];
let winngingX7 = [1,0,0,0,1,0,0,0,1];
let winngingX8 = [0,0,1,0,1,0,1,0,0];
let winngingO1 = [2,2,2,0,0,0,0,0,0];
let winngingO2 = [0,0,0,2,2,2,0,0,0];
let winngingO3 = [0,0,0,0,0,0,2,2,2];
let winngingO4 = [2,0,0,2,0,0,2,0,0];
let winngingO5 = [0,2,0,0,2,0,0,2,0];
let winngingO6 = [0,0,2,0,0,2,0,0,2];
let winngingO7 = [2,0,0,0,2,0,0,0,2];
let winngingO8 = [0,0,2,0,2,0,2,0,0];

//winning arranys
let winngingArrayX = [winngingX1,winngingX2,winngingX3,winngingX4,winngingX5,winngingX6,winngingX7,winngingX8]
let winngingArrayO = [winngingO1,winngingO2,winngingO3,winngingO4,winngingO5,winngingO6,winngingO7,winngingO8]

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
            console.log("X is winning")
            three[0].style.backgroundColor = "lightblue"
            three[1].style.backgroundColor = "lightblue"
            three[2].style.backgroundColor = "lightblue"
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
            console.log("O is winning")
            three[0].style.backgroundColor = "lightblue"
            three[1].style.backgroundColor = "lightblue"
            three[2].style.backgroundColor = "lightblue"
            return 2;
        }
    }
}