
function generateJoke() {
fetch('https://v2.jokeapi.dev/joke/Any')
.then(res => res.json())
.then(data => {
    document.getElementById("setup").textContent = data.setup;
    document.getElementById("delivery").textContent = data.delivery;
});
}