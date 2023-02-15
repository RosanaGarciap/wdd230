//////////////////////////////////////////////////////////////////////////
// Build Directory Page
const url = "https://rosanagarciap.github.io/wdd230/chamber/scripts/images.json";
const presentation = document.querySelector('#directory');
let title = document.createElement('h1'); // fill in the blank
presentation.appendChild(title);

const displayDirectory = (Directorys) => {
    Directorys.forEach((Directory) => {
      // Create elements to add to the div.presentation element
      let card = document.createElement('section');
      
      let fullName = document.createElement('h3'); // fill in the blank
      let email = document.createElement('p'); // fill in the blank
      let address = document.createElement('p'); // fill in the blank
      let phone= document.createElement('p'); // fill in the blank
      let level= document.createElement('h4'); // fill in the blank
      let web = document.createElement('a'); // fill in the blank

      card.setAttribute("class", "presentation-card")

      web.textContent = "Website";
      web.setAttribute('href',Directory.url);
      title.textContent = "DIRECTORY";
      phone.textContent = `${Directory.phone}`;
      email.textContent = `${Directory.email}`;
      address.textContent = `${Directory.address}`;
      level.textContent = `${Directory.level}`;

      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the Directory's full name
      let DirectoryFullName = `${Directory.name}`;
      fullName.textContent = `${DirectoryFullName} `; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', Directory.icon);
      portrait.alt = `Picture of ${DirectoryFullName}`;// fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '60');
      portrait.setAttribute('height', '50');
  
      // Append the section(card) with the created elements
      card.appendChild(portrait);
      card.appendChild(fullName); //fill in the blank
      card.appendChild(level); //fill in the blank
      card.appendChild(phone); //fill in the blank
      card.appendChild(email); //fill in the blank
      card.appendChild(address); //fill in the blank
      card.appendChild(web); //fill in the blank

      presentation.appendChild(card);
    }); // end of arrow function and forEach loop
  }
  

async function getDirectoryData() {
    const response = await fetch(url);
    let datas = await response.json();
    //console.table(data.Directorys);
    displayDirectory(datas.directory);
  }
  
getDirectoryData();