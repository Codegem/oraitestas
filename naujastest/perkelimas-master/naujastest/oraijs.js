"use strict";

let mainObj= {};
let showObj = function() {
    for (let prop in mainObj){
        // console.log(prop);
        // console.log(mainObj[prop]);
    }    
}

// fetchinimas
fetchAsync()
async function fetchAsync(){
    const atsakymai = document.getElementById("vieta");
    const response = await fetch('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
    const data = await response.json();
    mainObj = data.forecastTimestamps;
    for(let i = 0; i<mainObj.length; i++)
    {
        atsakymai.innerHTML += mainObj[i];
        
    }   
    console.log(mainObj)

    showObj();
}