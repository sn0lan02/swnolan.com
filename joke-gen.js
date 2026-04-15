fetch('https://v2.jokeapi.dev/joke/Any')
.then(res => {
    return res.json();
})

console.log(res)