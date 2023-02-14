const url = 'https://icanhazdadjoke.com/';

// headers: {
//   Accept: 'application/json',
//   'User-Agent': 'learning app',
// }


fetch("https://icanhazdadjoke.com/", {

    headers : {
        'Accept' : "application/json"
    }

}).then(function(value) {

    return value.json()
}).then(function(v) {

    console.log(v);
})


