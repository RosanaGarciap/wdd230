const url = "https://rosanagarciap.github.io/wdd230/chamber/scripts/images.json";
const list = document.querySelector('#list-members');

let i = 1;
const displayMembers = (members) => {
    members.forEach((member) => {
      // Create elements to add to the list
      let image = document.createElement('img');
      let item = document.createElement('li');

      image.src = member;
      // Append the section(card) with the created elements
      item.appendChild(image); //fill in the blank
      list.appendChild(item); 

    }); // end of arrow function and forEach loop
  }
  

async function getImageData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
  }
  
getImageData();
