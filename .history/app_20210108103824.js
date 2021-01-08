//declare 'option', 'custom', 'any' element id's
let option = document.getElementById("options");
let custom = document.getElementById("custom");
let any = document.getElementById("any");

//add event listener on click
//if 'any' option checked
//disable options
any.addEventListener("click", (e)=>{
    if(e.target.checked){
        option.disabled = true;
    }
});

//add event listener on click
//if 'custom' option checked
//enable options
custom.addEventListener("click", (e)=>{
    if(e.target.checked){
        option.disabled = false;
    }
});

//declare asyncrynous getJoke
const getJoke = async () => {
    //declare result  = HTML div 'result' element id
    let result = document.getElementById('result');
    //replace result element with empty string
    result.innerHTML = "";
    //declare checkboxes= filter category checkboxes for checked
    let checkboxes = [...document.getElementsByName('category')].filter((checkbox)=>checkbox.checked);
    //declare category as empty string
    let category = "";
    //if 'any' type is checked
    if(any.checked){
        //category = 'any'
        category = "Any";
    }
    //if 'custom' type is checked
    if(custom.checked){ 
        //category = map to join checked category values
        category = checkboxes.map((c)=>c.value).join();
    }
    //console.log user selected joke category
    console.log(category);
    //declare url = dynamically generate url inserting user selected category
    let url = `https://v2.jokeapi.dev/joke/${category}blacklistFlags=nsfw`;
    //declare keyword = HTML form div 'keyword' element id
    // let keyword = document.getElementById("keyword").value;
    // //if keyword does not equal empty; dynamically generate url with user keyword input
    // if(keyword != ""){
    //     url = `https://v2.jokeapi.dev/joke/${category}?contains=${keyword}blacklistFlags=nsfw`;
    // }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    //if JSON data response = API doc response 'single'
    if(data.type == "single"){
        //insert API doc 'joke' into response element
        result.innerHTML = `<h3>${data.joke}</h3>`;
    }
    //if JSON data response = API doc response 'twopart'
    if(data.type == "twopart"){
        //insert API doc 'setup' into response element
        result.innerHTML = `<h3>${data.setup}</h3>`;
        //display 'delivery' after 1 second
        setTimeout(()=>{
            //insert API doc 'delivery' into response element
            result.innerHTML += `<h3>${data.delivery}</h3>`;
        },1000);
    }
}

//declare submit = HTML button 'submit button' 
let submit = document.getElementById('submit button');
//upon 'submit', add event listener for 'click and activate 'getJoke'
submit.addEventListener("click", getJoke);
