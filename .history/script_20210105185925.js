"use strict";

function getJokes(category, type) {
    const url = `https://v2.jokeapi.dev/joke/${category}?type=${type}`;
    console.log("Finding &{category}, ${type}jokes ");
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
  
    console.log(responseJson);
    
    // if there are previous results, remove them 
    $("#results").empty();
    console.log("emptied");
    
    // add the lyrics to the results section
    $("#results").append(`${responseJson.lyrics}`);
  
    // display the results section
    $("#results").removeClass("hidden");
    console.log("displayed");
  
  }


// function formatQueryParams(params) {
//     const queryItems = Object.keys(params)
//       .map(key => `${key}=${params[key]}`)
//     return queryItems.join('&');
//   }
 
//  function displayResults(responseJson, maxResults) {
//      // if there are previous results, remove them
//      console.log(responseJson);
//      $("#results-list").empty();
//      // iterate through the data array
//      for (let i = 0; i < responseJson.data.length; i++) {
//          $("#results-list")
//              .append(`<li><h3><a href=“${responseJson.body[i].url}“>${responseJson.body[i].setup}</a></h3>
//          <p>${responseJson.body[i].punchline}</p>
//          </li>`);
//      }
//      //display the results section
//      $("#results").removeClass("hidden");
//  }

// function getJoke(userInput) {
//     let searchURL = "https://dad-jokes.p.rapidapi.com/joke/type/:type"
//     const params= {
//         type: userInput,
//     };
//     const queryString = formatQueryParams(params);
//     const url = searchURL + "?" + queryString;
//     console.log(url);
//     fetch(url, {
// 	"method": "GET",
// 	"headers": {
//         "Accept": "application/json, text/plain, */*",
//         "Content-type": "application/json",
// 		"x-rapidapi-key": "e82a6ca64fmshac1b6e29139d108p153ff7jsncd763353e550",
// 		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
// 	}
//             })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 throw new Error(response.statusText);
//             })
//             .then((responseJson) => displayResults(responseJson, maxResults))
//             .catch((err) => {
//                 $("#error-message").text(`Something went wrong: ${err.message}`);
//             });
//     }

// function watchForm() {
//     $("form").submit((event) => {
//         event.preventDefault();
//         let userInput = $("#type").val();
//         getJoke(userInput);
//     });
// }
// $(watchForm);