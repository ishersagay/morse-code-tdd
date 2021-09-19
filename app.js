import {arrToMorse} from "./translator.js";

const translate = document.querySelector(".morse__btn");
const output = document.querySelector(".morse_output");


translate.addEventListener("click", evt => {
 const userInput = document.querySelector(".english_value").value
 let morseCode = arrToMorse(userInput)
 output.innerHTML = morseCode
 console.log(morseCode)
})
