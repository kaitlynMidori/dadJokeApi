"use strict";

function getJokes(category){
    const url = `https://v2.jokeapi.dev/joke/${category}`;
    console.log(`finding jokes for ${category}`);

    fetch(url)
    .then (response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(.err => {
        $("#js-error-message").text(`Something went wrong: ${err.message}`);
    })
}

function displayResults(responseJson){
    console.log(responseJson);
    $("#results").empty();
    console.log("empty");

    $("#results").append(`${responseJson.joke}`);
    $("#results").append(`${responseJson.setup}`);
    $("#results").append(`${responseJson.delivery}`);
}



