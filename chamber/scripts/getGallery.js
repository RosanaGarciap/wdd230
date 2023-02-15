const url = "https://rosanagarciap.github.io/wdd230/chamber/scripts/images.json";

const cards = document.querySelector('#gallery');

const displayGallery = (Gallerys) => {
    Gallerys.forEach((Gallery) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); // fill in the blank

      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the Gallery's full name
      let GalleryFullName = `${Gallery.title}`;
      fullName.textContent = `${GalleryFullName} `; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', Gallery.url);
      portrait.alt = `Picture of ${GalleryFullName}`;// fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '150');
      portrait.setAttribute('height', '150');
  
      // Append the section(card) with the created elements
      card.appendChild(portrait);
      card.appendChild(fullName); //fill in the blank
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }
  

async function getGalleryData() {
    const response = await fetch(url);
    let datas = await response.json();
    //console.table(data.Gallerys);
    displayGallery(datas.gallery);
  }
  
getGalleryData();



// initialize display elements

const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");
let today = new Date();
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
    // Days from last visit

    let lastVisit = new Date(localStorage.getItem("lastvisit"));
    // check if is the waing days of December, if so ... change to next year.
    let daysleft = (Date.now()-lastVisit.getTime()) / 84600000;

    daysLeftOutput.innerHTML = `${daysleft.toFixed(
        0
    )} days<br> From last visit ${lastVisit}`;

} else {
	visitsDisplay.textContent = `This is your first visit!`;
    window.localStorage.setItem("lastvisit", today); 
    daysLeftOutput.innerHTML = `0 days<br> From last visit`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date demonstration
