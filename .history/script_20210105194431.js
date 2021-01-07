"use strict";

const jokeURL = "https://v2.jokeapi.dev/joke/";

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
  }

function getJokes(category, type) {
    const params = {
        category: category,
        type: type,
    };//declare queryString as formatQueryParams
    const queryString = formatQueryParams(params)
    //declare url to bind user input string to jokeURL
    const url = jokeURL + '?' + queryString;
    console.log(url);

    //innitiate url fetch request with argument ('url')
    fetch(url)
      //check for resolved promise
        .then(response => {
          // if resposne = true
            if (response.ok) {
              //return promise response object
                return response.json();
            }
            //raise exception to reject promise error and trigger .catch
            throw new Error(response.statusText);
        })
        //return response
        .then(responseJson => displayResults(responseJson))
        //innitiate .catch handle error
        .catch(err => {
          //display error message
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}
function displayResults(responseJson) {
    console.log(responseJson);
    // if there are previous results, remove them
    $('#results-list').empty();

    //if responseJson object does not have a length (there are no JSON results)
    if (!Object.keys(responseJson).length) {
      //display message in results list
        $('#results-list').append(`<h2>Sorry, No Products Found For That Make-Up and/or Brand</h2>`);
    }
    // iterate through the items array
    for (let i = 0; i < responseJson.data.length; i++) {

        // for each makeup object in the items array, add a list item to the results 
        //list with the full name, img, price, description, url
        $('#results-list').append(
            `<li class="each-product-result">
              <p class="product-price">${responseJson.data[i].joke}</p>
              <p class="product-description">${responseJson[i].setup}</p>
              <p class="product-description">${responseJson[i].delivery}</p>
            </li>`
        )
    };

    //display the hidden results section  
    $('#results-list').removeClass('hidden');

    //clear inputs after results load
    $('#joke-category').val('')
    $('#joke-type').val('')
};


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