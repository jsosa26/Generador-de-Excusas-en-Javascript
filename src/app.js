/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  document.querySelector("#Excusa").innerHTML = `
    ${who[getRandomInt(who.length)]}
    ${what[getRandomInt(what.length)]}
    ${when[getRandomInt(when.length)]} `;

  //console.log("Hello Rigo from the console!");
};
