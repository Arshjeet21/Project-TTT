let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let msgpop = document.querySelector(".msgpop");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX , playerO

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgpop.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congrats, Winner ${winner}`;
    msgpop.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of WinPatterns) {
        let [a, b, c] = pattern;
        let pos1Val = boxes[a].innerText;
        let pos2Val = boxes[b].innerText;
        let pos3Val = boxes[c].innerText;
        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);