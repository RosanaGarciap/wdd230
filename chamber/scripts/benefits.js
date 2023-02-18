// SHOW MEMBERSHIP BENEFTS 
const url = "https://rosanagarciap.github.io/wdd230/chamber/scripts/membership.json";
const list = document.querySelector('#bn');
const type = document.querySelector('#type');

const displayBenefits = (Benefitss) => {
    Benefitss.forEach((Benefits) => {
      // Create elements to add to the div.presentation element
      let card = document.createElement('li');

      let b= document.createElement('p'); // fill benefit
  
      // Append the section(card) with the created elements
      card.appendChild(b)

      list.appendChild(card);
    }); // end of arrow function and forEach loop
  }
  

async function getBenefitsData() {
    const response = await fetch(url);
    let datas = await response.json();
    const beneficio = document.getElementById("account").value;
    let level = document.createElement('h3'); // fill in the blank
    
    if (beneficio = "np") {
        level.textContent = `Non-Profit`;
        type.appendChild(level);
        displayBenefits(datas.nonprofit);
    }
    if (beneficio = "bronze") {
        level.textContent = `Bronze`;
        type.appendChild(level);
        displayBenefits(datas.bronze);
    }
    if (beneficio = "silver") {
        level.textContent = `Silver`;
        type.appendChild(level);
        displayBenefits(datas.silver);
    }
    if (beneficio = "golden") {
        level.textContent = `Golden`;
        type.appendChild(level);
        displayBenefits(datas.golden);
    }
    //console.table(data.Benefitss);
  }
  
getBenefitsData();