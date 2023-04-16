const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
const config = {
  headers: {
    Accept: "application/json",
  },
};

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
