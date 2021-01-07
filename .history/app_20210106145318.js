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

//declare getJoke
const getJoke = async () => {
    let result = document.getElementById('result');
    result.innerHTML = "";
    let checkboxes = [...document.getElementsByName('category')].filter((checkbox)=>checkbox.checked);
    let category = "";
    if(any.checked){
        category = "Any";
    }
    if(custom.checked){ 
        category = checkboxes.map((c)=>c.value).join();
    }
    //console.log user selected joke category
    console.log(category);
    //declare url = dynamically generate url inserting user selected category
    let url = `https://v2.jokeapi.dev/joke/${category}`;
    //declare keyword = HTML form div 'keyword'
    let keyword = document.getElementById("keyword").value;
    //if keyword does not equal empty; dynamically generate url with user keyword input
    if(keyword != ""){
        url = `https://v2.jokeapi.dev/joke/${category}?contains=${keyword}`;
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    if(data.type == "single"){
        result.innerHTML = `<h3>${data.joke}</h3>`;
    }
    if(data.type == "twopart"){
        result.innerHTML = `<h3>${data.setup}</h3>`;
        setTimeout(()=>{
            result.innerHTML += `<h3>${data.delivery}</h3>`;
        },1000);
    }
}

let submit = document.getElementById('submit button');
submit.addEventListener("click", getJoke);
