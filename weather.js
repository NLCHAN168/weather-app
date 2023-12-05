async function getForecast(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c46a0d359b944ff58b092117232611&q=${city}&aqi=no`
  );
  response.json().then(function (data) {
    const { name, region, country } = data.location;
    const { temp_f, temp_c } = data.current;
    console.log(name + ", " + region + ", " + country);
    console.log(temp_f + "F");
    console.log(temp_c + "C");
    let obj = {
      name,
      region,
      country,
      temp_f,
      temp_c,
    };
    place.innerText = obj.name + ", " + obj.region + ", " + obj.country;
    temperature.innerText = obj.temp_f + "F" + "\n" + obj.temp_c + "C";
    return obj;
  });
}

const div = document.createElement("div");
div.innerText = "City Forecaster";
document.body.appendChild(div);
const form = document.createElement("form");
const input = document.createElement("input");
const search = document.createElement("button");
search.innerText = "SEARCH";
search.addEventListener("click", () => getForecast(input.value));
input.setAttribute("type", "text");
input.setAttribute("placeholder", "city");
input.setAttribute("id", "city");
form.appendChild(input);
div.appendChild(search);
div.appendChild(form);

const place = document.createElement("div");
const temperature = document.createElement("div");

div.appendChild(place);
div.appendChild(temperature);
