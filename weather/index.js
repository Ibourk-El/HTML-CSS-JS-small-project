let d_num = document.getElementById("D-num");
let h_num = document.getElementById("H-num");
let w_num = document.getElementById("W-num");
let name_city = document.getElementById("city");
let search = document.getElementById("search");
let btn = document.getElementById("search-btn");
let img = document.getElementById("img");

async function myFeach(city) {
  const weather_ipa = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=895f07a39c9cbed055faa7a665459e3b&units=metric`;
  const response = await fetch(weather_ipa);
  if (response.status === 200) {
    const data = await response.json();

    name_city.textContent = data.name;
    d_num.innerText = data.main.temp;
    h_num.innerText = data.main.humidity;
    w_num.innerText = data.wind.speed;
    if (data.weather.main === "clear") {
      img.src = "images/clear.png";
    }
    if (data.weather[0].main === "Snow") {
      img.src = "images/snow.png";
    }
    if (data.weather[0].main === "Clouds") {
      img.src = "images/clouds.png";
    }
    if (data.weather[0].main === "Drizzle") {
      img.src = "images/drizzle.png";
    }
    if (data.weather[0].main === "Rain") {
      img.src = "images/rain.png";
    }
    if (data.weather[0].main === "Mist") {
      img.src = "images/mist.png";
    }
  } else {
    alert("Your City Name Not Exest");
  }
}

btn.onclick = () => {
  if (search.value !== "") {
    myFeach(search.value);
    document.querySelector(".data").style.display = "flex";
  }
};

search.onfocus = () => {
  document.querySelector(".data").style.display = "none";
};
