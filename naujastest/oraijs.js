"use strict";

const dokas = document.getElementById("testas");
// const naujas = document.createElement("div");
// variables i kuriuos dedu info is jsono
let place = {},
    forecastType,
    forecastCreationTimeUtc,
    forecastTimestamps = [],
    mainObj= {},
    mainObj2={};

// fetchinimas
fetchAsync()
async function fetchAsync(){
    const response = await fetch('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
    const data = await response.json();
    // console.log(data)
    place = data.place; 
    forecastType = data.forecastType;
    forecastCreationTimeUtc = data.forecastCreationTimeUtc;
    forecastTimestamps = data.forecastTimestamps;
    // mainObj = forecastTimestamps[0].airTemperature;
    mainObj2 = forecastTimestamps;
    // console.log(mainObj)
    console.log(mainObj2)
    // dokas.innerHTML = mainObj;
    ciklas();
}
function ciklas (){
    for(let i=0; i<mainObj2.length; i++){
        // dokas.appendChild(naujas).
        dokas.innerHTML += `airTemperature ${mainObj2[i].airTemperature} `;
        dokas.innerHTML += `windSpeed ${mainObj2[i].windSpeed} `;
        dokas.innerHTML += `windDirection ${mainObj2[i].windDirection} `;
        dokas.innerHTML += `conditionCode ${mainObj2[i].conditionCode} <br>`;
    }
}
