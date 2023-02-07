const url = "./scripts/assignments.json";
const list = document.querySelector('#menu');


const displayWeeks = (data) => {
    let j = 0
    for (const week of data) {
        j = j+1;
      // Create elements to add to the list
      let item = document.createElement('li');
      let number = document.createElement('b');
      number.textContent = `Week ${j}`;
      item.appendChild(number)
      let i = 0;
      week.forEach(element => {
        let link = document.createElement('a');
        link.textContent = `Assignment ${i} |`;
        link.href = `${element}`; 
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