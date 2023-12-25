const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
var temperature = document.getElementsByClassName("temperature");
var humidity = document.getElementsByClassName("humidity");
var windSpeed = document.getElementsByClassName("windSpeed");
var minTemp = document.getElementById("minTemp");
var maxTemp = document.getElementById("maxTemp");
var feels = document.getElementById("feels");
var windDeg = document.getElementById("windDeg");
var sunrise = document.getElementById("sunrise");
var sunset = document.getElementById("sunset");
var result;
let p = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna",options);
p.then((value1) => {
    if(value1.ok){
        return value1.json();
    }
    else if(value1.status == "400"){
        alert("Choose Other Region");
    }
    else{
        alert("Check Internet Connection");
    }
}).then((value2) => {
  result = value2;
  if(result==undefined){
    return;
  }
  setData();
}).catch((err)=>{
    console.log("Error is "+err);
})
let search = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
search_btn.addEventListener("click",()=>{
    let p = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+search.value,options);
    p.then((value1) => {
        if(value1.ok){
            return value1.json();
        }
        else if(value1.status == "400"){
            alert("Choose Other Region");
        }
        else{
            alert("Check Internet Connection");
        }
    }).then((value2) => {
      result = value2;
      console.log(result);
      if(result!=undefined){
          document.getElementById("city").innerText = search.value.charAt(0).toUpperCase()+search.value.substring(1).toLowerCase();
          setData();
      }
    })
})
setData = ()=>{
    temperature[0].innerText = result.temp;
    temperature[1].innerText = result.temp;
    humidity[0].innerText = result.humidity;
    humidity[1].innerText = result.humidity;
    windSpeed[0].innerText = result.wind_speed;
    windSpeed[1].innerText = result.wind_speed;
    minTemp.innerText = result.min_temp;
    maxTemp.innerText = result.max_temp;
    feels.innerText = result.feels_like;
    windDeg.innerText = result.wind_degrees;
    sunrise.innerText = result.sunrise;
    sunset.innerText = result.sunset;
    console.log(result);
}
let p0 = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna",options);
    p0.then((value1) => {
        if(value1.ok){
            return value1.json();
        }
        else if(value1.status == "400"){
            alert("Choose Other Region");
        }
        else{
            alert("Check Internet Connection");
        }
    }).then((value2) => {
      result = value2;
      if(result==undefined){
        return;
      }
      document.getElementsByClassName("cloud")[0].innerText = result.cloud_pct;
      document.getElementsByClassName("feel")[0].innerText = result.feels_like;
      document.getElementsByClassName("humiditys")[0].innerText = result.humidity;
      document.getElementsByClassName("max_temp")[0].innerText = result.max_temp;
      document.getElementsByClassName("min_temp")[0].innerText = result.min_temp;
      document.getElementsByClassName("temp")[0].innerText = result.temp;
      document.getElementsByClassName("wind_degree")[0].innerText = result.wind_degrees;
      document.getElementsByClassName("wind_speed")[0].innerText = result.wind_speed;
    }).catch((err)=>{
        console.log(err);
    })
    
    let p1 = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chapra",options);
    p1.then((value1) => {
        if(value1.ok){
            return value1.json();
        }
    }).then((value2) => {
      result = value2;
      if(result==undefined){
        return;
      }
      document.getElementsByClassName("cloud")[1].innerText = result.cloud_pct;
      document.getElementsByClassName("feel")[1].innerText = result.feels_like;
      document.getElementsByClassName("humiditys")[1].innerText = result.humidity;
      document.getElementsByClassName("max_temp")[1].innerText = result.max_temp;
      document.getElementsByClassName("min_temp")[1].innerText = result.min_temp;
      document.getElementsByClassName("temp")[1].innerText = result.temp;
      document.getElementsByClassName("wind_degree")[1].innerText = result.wind_degrees;
      document.getElementsByClassName("wind_speed")[1].innerText = result.wind_speed;
    }).catch((err)=>{
        console.log(err);
    })
    
    let p2 = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",options);
    p2.then((value1) => {
        if(value1.ok){
            return value1.json();
        }
    }).then((value2) => {
      result = value2;
       if(value1.ok){
            return value1.json();
        }
      document.getElementsByClassName("cloud")[2].innerText = result.cloud_pct;
      document.getElementsByClassName("feel")[2].innerText = result.feels_like;
      document.getElementsByClassName("humiditys")[2].innerText = result.humidity;
      document.getElementsByClassName("max_temp")[2].innerText = result.max_temp;
      document.getElementsByClassName("min_temp")[2].innerText = result.min_temp;
      document.getElementsByClassName("temp")[2].innerText = result.temp;
      document.getElementsByClassName("wind_degree")[2].innerText = result.wind_degrees;
      document.getElementsByClassName("wind_speed")[2].innerText = result.wind_speed;
    }).catch((err)=>{
        console.log(err);
    })
    
    let p3 = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=australia",options);
    p3.then((value1) => {
        if(value1.ok){
            return value1.json();
        }
    }).then((value2) => {
      result = value2;
      if(result==undefined){
        return;
      }
      document.getElementsByClassName("cloud")[3].innerText = result.cloud_pct;
      document.getElementsByClassName("feel")[3].innerText = result.feels_like;
      document.getElementsByClassName("humiditys")[3].innerText = result.humidity;
      document.getElementsByClassName("max_temp")[3].innerText = result.max_temp;
      document.getElementsByClassName("min_temp")[3].innerText = result.min_temp;
      document.getElementsByClassName("temp")[3].innerText = result.temp;
      document.getElementsByClassName("wind_degree")[3].innerText = result.wind_degrees;
      document.getElementsByClassName("wind_speed")[3].innerText = result.wind_speed;
    }).catch((err)=>{
        console.log("Error is "+err);
    })
