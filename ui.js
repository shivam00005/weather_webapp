class UI{
  constructor(){
    this.country=document.getElementById('w-country')
    this.location =document.getElementById('w-location');
    this.location1 =document.getElementById('w-location1');
    this.disc =document.getElementById('w-disc');
    this.string =document.getElementById('w-string');
    this.img = document.getElementById('w-icon');
    this.humidity =document.getElementById('humidity');
    this.feelslike =document.getElementById('feelslike');
    this.wind =document.getElementById('wind');
    this.cloud =document.getElementById('cloud');
  }
  paint(weather){
    this.country.textContent = `Country : ${weather.location.country}`;
    
    this.location.textContent = `State : ${weather.location.region}`;
    
    this.location1.textContent=
  `City : ${ weather.location.name}`;
  
  this.disc.textContent=`Condition : ${weather.current.condition.text}`;
  
  this.string.textContent=`Temp : ${weather.current.temp_c}  °c ( ${weather.current.temp_f} f)`;
  this.img.setAttribute('src', weather.current.condition.icon);
  this.humidity.textContent=`Humidity: ${weather.current.humidity}%` ;
  this.feelslike.textContent=`Feels like: ${weather.current.feelslike_c}°c ( ${weather.current.feelslike_f} f )` ;
  this.wind.textContent=`Wind : From the ${weather.current.wind_dir} at: ${weather.current.wind_kph} KPH` ;
  this.cloud.textContent=`cloud: ${weather.current.cloud}%` ;
  }
}