const url = 'https://icanhazdadjoke.com/';

// headers: {
//   Accept: 'application/json',
//   'User-Agent': 'learning app',
// }

function radomdisplay()

{
fetch("https://icanhazdadjoke.com/", {

    headers : {
        'Accept' : "application/json"
    }

}).then(function(value) {

    return value.json()
}).then(function(v) {

    document.getElementById("result").innerHTML = v.joke;
})


}

radomdisplay();