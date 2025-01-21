document.addEventListener('DomContentLoaded',()=> {
    const api={
    key:"JWBYTGG2H9WMLJ3RRAJ2E8AZD",
    base:"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
};
const Input=document.getElementById('input');
Input.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
        getweather(Input.value);
        document.querySelector('.main-weather').style.display="block";

    }
});
function getWeather(city){
    fetch(`${api.base}/${city}?key=${api.key}&unitGroup=metric`)
    .then(respnse=>respnse.json())
    .then(showWeather);
}
function showWeather(details){
    let city=document.getElementByID('city');
    city.innerHTML=`${details.resolveAddress}`;
    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(details.days[0].temp)}&deg;C`;
    let minMax=document.getElementById('min-max');
    minMax.innerHTML=`${Math.round(details.days[0].tempmin)}&deg;C(Min) and ${Math.round(details.days[0].tempmax)}&deg;C(Max)`;
    let weathertype=document.getElementById('Weather-type');
    weathertype.innerHTML=`${details.days[0].conditions}`;
}

});