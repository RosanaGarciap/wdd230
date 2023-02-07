const url = "https://rosanagarciap.github.io/wdd230/scripts/assignments.json";
const list = document.querySelector('#menu');


const displayWeeks = (data) => {
    let j = 0
    for (var week in data) {
        j = j+1;
      // Create elements to add to the list
      const item = document.createElement('li');
      const number = document.createElement('b');
      number.textContent = `Week ${j}: `;
      item.appendChild(number)
      let i = 0;
      data[week].forEach(element => {
        i=i+1;
        const link = document.createElement('a');
        link.textContent = `${element[1]} |`;
        link.href = `${element[0]}`; 
        item.appendChild(link);       
      });
      
      list.appendChild(item);

    }; // end of arrow function and forEach loop
    
  }
  

async function getWeekLinks() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayWeeks(data);
  }

getWeekLinks();

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const urlClima = 'https://api.openweathermap.org/data/2.5/weather?q=Caracas,ve&appid=ea355e01fe2811da8431678b0cf96cf7&units=imperial';

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', `Icon ${desc}`);
    captionDesc.textContent = `${desc}`;
  }

async function apiFetch() {
    try {
      const response = await fetch(urlClima);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();