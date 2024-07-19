let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");

let turnO=true; //playerX ,playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
    trunO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
          console.log("box was clicked");
          if(turnO){
            box.innerText="O";
            turnO=false;
          } else{
            box.innerText="X";
            turnO=true;
          }
          box.disabled=true;
           winnerFunction();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (Winner) => {
    msg.innerText = 'Congratulations, Winner is ${Winner} ';
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const winnerFunction =()=>{
    for(let Patterns of winPatterns){
        
        let pos1val=boxes[Patterns[0]].innerText;
        let pos2val=boxes[Patterns[1]].innerText;
        let pos3val=boxes[Patterns[2]].innerText;
        if(pos1val !="" && pos2val !== "" && pos3val !==""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner!!",pos1val);
        
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);