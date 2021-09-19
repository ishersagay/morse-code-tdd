import {arrToMorse} from "./translator.js";

const translate = document.querySelector(".morse__btn");


translate.addEventListener("click", evt => {
 const userInput = document.querySelector(".english_value").value
 console.log(userInput)
})
