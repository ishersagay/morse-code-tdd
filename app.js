import {arrToMorse} from "./translator.js";

let value = document.getElementsByClassName(`.value`);
const button = document.getElementsByClassName(`.morse__btn`);
button = addEventListener("submit", () => {
 console.log(arrToMorse(value))
})

console.log(value)