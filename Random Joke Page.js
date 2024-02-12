let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function displayResult(result) {
    spinnerEl.classList.add("d-none");
    jokeTextEl.textContent = result.value
}

function jokeBtn() {
    spinnerEl.classList.remove("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            displayResult(jsonData);
        });
}

jokeBtnEl.addEventListener("click", jokeBtn);