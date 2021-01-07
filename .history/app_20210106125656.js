let option = document.getElementById("options");
let custom = document.getElementById("custom");
let any = document.getElementById("any");


any.addEventListener("click", (e)=>{
    if(e.target.checked){
        option.disabled = true;
    }
});

custom.addEventListener("click", (e)=>{
    if(e.target.checked){
        option.disabled = false;
    }
});

const getJoke = async () => {
    let result = document.getElementById('result');
    result.innerHTML = "";
    let checkboxes = [...document.getElementsByName('category')].filter((checkbox)=>checkbox.checked);
    let category = "";
    if(any.checked){
        category = "Any";
    }
    if(custom.checked){
        // checkboxes.forEach((checkbox) => {
        // if(checkbox.checked){
        //     category += checkbox.value + ",";
        // }
        // });
        // if(category != ""){
        //     category = category.substring(0, category.length - 1);
        // }
        // else{
        //     category = "Programming";
        // }  
        category = checkboxes.map((c)=>c.value).join();
    }

    console.log(category);
    let url = `https://v2.jokeapi.dev/joke/${category}`;
    let keyword = document.getElementById("keyword").value;
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

let btn = document.getElementById('tell-btn');
btn.addEventListener("click", getJoke);
