const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // fill in the blank
      let portrait = document.createElement('img');
      let birthdate = document.createElement('p');
      let place = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name
      let prophetFullName = `${prophet.name} ${prophet.lastname}`;
      fullName.textContent = `${prophetFullName} `; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.alt = `Portrait of ${prophetFullName}`;// fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
      birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
      place.textContent = `Place of Birth: ${prophet.place}`;
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(birthdate); 
      card.appendChild(place);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }
  

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
getProphetData();

