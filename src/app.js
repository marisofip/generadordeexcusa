/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quien = ["the dog", "my granma", "his turtle", "my bird"];
let que = ["eat", "pissed", "crushed", "broked"];
let donde = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuse(quien, que, donde) {
  let aleatorioquien = Math.floor(Math.random() * quien.length);
  let aleatorioque = Math.floor(Math.random() * que.length);
  let aleatoriodonde = Math.floor(Math.random() * donde.length);

  return (
    quien[aleatorioquien] +
    " " +
    que[aleatorioque] +
    " " +
    donde[aleatoriodonde]
  );
}
window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuses").innerHTML = excuse(quien, que, donde);
};
