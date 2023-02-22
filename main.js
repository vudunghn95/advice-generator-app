const id = document.getElementById("id");
const quote = document.getElementById("quote");
const dice = document.getElementById("dice");

function fetchAPI() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      id.textContent = data.slip.id;
      quote.textContent = data.slip.advice;
    });
}
dice.addEventListener("click", fetchAPI);
fetchAPI();
