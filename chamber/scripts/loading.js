/**
 * Hamburger Menu
 */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.querySelectorAll('.item')
        .forEach((function(x){ x.setAttribute("style","display:none");}));
  } else {
    x.className = "topnav";
    document.querySelectorAll('.item')
        .forEach((function(x){ x.setAttribute("style","display:block");}));
  }
}


//**  Weather */

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


const url = "https://rosanagarciap.github.io/wdd230/chamber/scripts/images.json";
const list = document.querySelector('#list-members');


const displayMembers = (members) => {
    members.forEach((member) => {
      // Create elements to add to the list
      let image = document.createElement('img');

      image.src = member;
      
      list.appendChild(image); // Append image

    }); // end of arrow function and forEach loop
  }


async function getImageData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.Gallerys);
    displayMembers(data.members);
  }
  
getImageData();



