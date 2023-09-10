let celsius=document.querySelector(".celsius input");
let fahrenheit=document.querySelector(".fahrenheit input");
let kelvin=document.querySelector(".kelvin input");

let button=document.querySelector(".bottom button");

function roundNumber(number){
    return Math.round(number*100)/100;
}

celsius.oninput = () => {
    let tempInC=parseFloat(celsius.value);
    let tempInF=(tempInC*(9/5)) + 32;
    let tempInk=tempInC + 273.15;

    fahrenheit.value=roundNumber(tempInF);
    kelvin.value=roundNumber(tempInk);
}

fahrenheit.oninput = () =>{
    let tempInF=parseFloat(fahrenheit.value);
    let tempInC=(tempInF - 32) * (5/9);
    let tempInk= (tempInF -32) * (5/9) + 273.15;

    celsius.value=roundNumber(tempInC);
    kelvin.value=roundNumber(tempInk);
}

kelvin.oninput = () =>{
    let tempInk=parseFloat(kelvin.value);
    let tempInC=tempInk - 273.15;
    let tempInF=(tempInk - 273.15) * (9/5) + 32;
    celsius.value=roundNumber(tempInC);
    fahrenheit.value=roundNumber(tempInF);
}

button.onclick = () =>{
    celsius.value="";
    fahrenheit.value="";
    kelvin.value="";
}

