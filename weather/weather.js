let Basicurl = "http://api.weatherapi.com/v1/current.json?key=98966dcc6cd24051833152718242703&q="

let btn =document.querySelector(".btn-search")
    
btn.addEventListener("click", async (e)=>{
    e.preventDefault();
    wheather() 
})



async function wheather(){
   
    let locationName = document.querySelector('#location').value
    let url =`${Basicurl}${locationName}&aqi=no`
    let res = await fetch(url);
    let data = await res.json();
   
    

    let name = data['location'].name
    let place = document.querySelector(".location");
    place.innerText = name;

    let temp = document.querySelector(".temp");
    temp.innerText = `${data['current'].temp_c}\u00B0c`;

    let time = document.querySelector(".time");
    time.innerText = data['location'].localtime.slice(10,16);

    let text = document.querySelector(".txt-tmp")
    text.innerText = data['current'].condition.text

    let feelsLike = document.querySelector(".feelsLike")
    feelsLike.innerText = `Feels like: ${data['current'].feelslike_c}\u00B0`

    let humidity =  document.querySelector(".humidity")
    humidity.innerText = `Humidity: ${data['current'].humidity}`;

}








 