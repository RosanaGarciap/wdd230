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
      portrait.setAttribute('width', '200');
      portrait.setAttribute('height', '200');
  
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
