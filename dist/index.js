#! /usr/bin/env node
import inquirer from "inquirer";
const systemGenNum = Math.floor(Math.random() * 10);
const userInput = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter Your Guess between 1 to 10",
    },
]);
const userGuess = userInput;
if (userGuess === systemGenNum) {
    console.log("You ans Matched");
    console.log(`${userInput.userGuess} userGuess = ${systemGenNum} systemGuess`);
}
else {
    console.log("Try Again");
    console.log(`${userInput.userGuess} userGuess != ${systemGenNum} systemGuess`);
}
