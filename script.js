// creare function getComputerChoice
// return rock paper || scissors
// use math.random(2)
// 


function getComputerChoice() {
     return Math.floor(Math.random() * 3);
 }

console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt("Make your choice! Rock, paper or scissors)?", "");
    
    if (input === "rock") {
        return "rock";
    } else if (input === "paper") { 
        return "paper";
    } else if (input === "scissors") {
        return "scissors"
    } else {
        return "invalid response"
    }


}

console.log(getHumanChoice());
