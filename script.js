const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiURL = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    jokeEl.innerText = "Loading...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";
    jokeEl.innerText = data.joke;
  } catch (error) {
    jokeEl.innerText = "An error occurred, please try again later.";
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";
    console.error(error);
  }
}
btnEl.addEventListener("click", getJoke);
