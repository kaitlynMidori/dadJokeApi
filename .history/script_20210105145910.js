"use strict";

function getJoke(userInput) {
    const params= {
        type = userInput,
    };
    const queryString = formatQueryParams(params);
    const url = searchURL + "?" + queryString;
    console.log(url);
    fetch("https://dad-jokes.p.rapidapi.com/joke/type/general", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e82a6ca64fmshac1b6e29139d108p153ff7jsncd763353e550",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}