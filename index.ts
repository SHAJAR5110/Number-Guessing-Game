#! /usr/bin/env node

import inquirer from "inquirer";
let keepgoing=true;
console.log("---------------Number Guessing Game---------------\n");
let nameOfPlayer= await inquirer.prompt([{message: "Enter your Name: ",type: "string",name:"player"}])
let randomNumber=Math.random();
let integerNumber=Math.floor(randomNumber*10);
// console.log(integerNumber);
do {
const answer=await inquirer.prompt([{message:"Guess the number between (0-10): ",type:"number",name: "num1"}]);
if(answer.num1==integerNumber){
console.log(`Congratulations! ${nameOfPlayer.player} you Guess the right Number ${integerNumber}`);
break;}    
else
console.log("Try Agian..!\n");
} while (keepgoing);