// fetch("https://dad-jokes.p.rapidapi.com/joke/type/general", {
// fetch("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes", {
//         "method": "GET",
//         "url": "/random/type/:type",
//         "headers": {
//             "access-control-allow-origin": "*",
//             "content-security-policy": "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
//             "content-type": "application/json; charset=utf-8",
//             "date": "Sat, 10 Oct 2020 23:12:01 GMT",
//             "etag": "W/\"bfc1-Tsj80C+bviVvUIk5Cvn8WaZS7J0\"",
//             "expect-ct": "max-age=0",
//             "referrer-policy": "no-referrer",
//             "server": "RapidAPI-1.2.6",
//             "strict-transport-security": "max-age=15552000; includeSubDomains",
//             "via": "1.1 vegur",
//             "x-content-type-options": "nosniff",
//             "x-dns-prefetch-control": "off",
//             "x-download-options": "noopen",
//             "x-frame-options": "SAMEORIGIN",
//             "x-permitted-cross-domain-policies": "none",
//             "x-rapidapi-region": "AWS - us-east-1",
//             "x-rapidapi-version": "1.2.6",
//             "x-xss-protection": "0",
//             "content-length": "49089",
//             "connection": "Close",
//             "x-rapidapi-key": "e82a6ca64fmshac1b6e29139d108p153ff7jsncd763353e550",
//             "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes",
    "method": "GET",
    "headers": {
        "access-control-allow-origin": "*",
        "content-security-policy": "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
        "content-type": "application/json; charset=utf-8",

        "etag": "W/\"bfc1-Tsj80C+bviVvUIk5Cvn8WaZS7J0\"",
        "expect-ct": "max-age=0",
        "referrer-policy": "no-referrer",
        "server": "RapidAPI-1.2.6",
        "strict-transport-security": "max-age=15552000; includeSubDomains",

        "x-content-type-options": "nosniff",
        "x-dns-prefetch-control": "off",
        "x-download-options": "noopen",
        "x-frame-options": "SAMEORIGIN",
        "x-permitted-cross-domain-policies": "none",
        "x-rapidapi-region": "AWS - us-east-1",
        "x-rapidapi-version": "1.2.6",
        "x-xss-protection": "0",


        "x-rapidapi-key": "e82a6ca64fmshac1b6e29139d108p153ff7jsncd763353e550",
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
    }
};


$.ajax(settings).done(function(response) {
    console.log(response);
});