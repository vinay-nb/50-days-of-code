const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We love js";
let idx = 1;
let speed = 300 / speedEl.value;

writText();

function writText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
