let userScore=0;
let compScore=0;

uScore=document.querySelector("#user-score");
cScore=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was DRAW..!";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    msg.style.color="white";
    if(userWin)
    {
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        msg.style.backgroundColor="green";
    }
    else
    {
        msg.innerText=`You Loose! ${compChoice} beats Your ${userChoice}`;
        compScore++;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //generate comp choice
    const compChoice=getCompChoice();

    if(userChoice===compChoice)
    {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false : true;
        }else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors" ? false : true;
        }else{
            userWin= compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    uScore.innerText=`${userScore}`;
    cScore.innerText=`${compScore}`;
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});