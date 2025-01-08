const btn=document.querySelector(".btn")
const cityInput=document.querySelector("#city")
const tem=document.querySelector("#temp-div")
btn.addEventListener("click", async function()
{
let city=cityInput.value;
const weatherinfo= await getWeatherInfo(city)
console.log(weatherinfo.main.temp)
 tem .innerHTML= weatherinfo.main.temp + "°C"
})
 async function getWeatherInfo(city)
{
    const apikey="7709f3f763bfd9c8ebe38480be6db158";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    const reponse= await fetch(apiUrl);
    const data= await reponse.json();
    return data;
        
    
}

