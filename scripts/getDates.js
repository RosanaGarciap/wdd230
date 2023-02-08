function last_modified_date() {
    if (Date.parse(document.lastModified) != 0)
        document.getElementById("date").innerHTML = document.lastModified;    
    document.getElementById("year").innerHTML =new Date().getFullYear()
}
last_modified_date();

const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.checked) {
		main.style.background = "#282A3A";
        h2.style.color = "#D8bcab";
        h1.style.color = "#272932";
        header.style.color = "#272932";
        header.style.background = "#D8bcab";
        footer.style.color = "#272932";
        footer.style.background = "#D8bcab";
	} else {
		main.style.background = "#fff";
		main.style.color = "#272932";
        h2.style.color = "#272932";
        footer.style.color = "#735F32";
        footer.style.background = "#272932";
        header.style.background = "#272932";
	}
});

/**
 * Hamburger Menu
 */

const menubutton = document.querySelector(".menu-button");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("menu-item"));
	menubutton.classList.toggle("close");
});

// initialize display elements

const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


/**Event Listener generate Table */

const table = document.querySelector("#submition");

function verifyInput() {
    let v1 = document.getElementById("fusername");
    let v2 = document.getElementById("frusername");
    if (v1.value==v2.value && v1.value.length > 0) {
        v2.style.backgroundColor = "white";
        v2.style.borderColor = "green";
        displayTable();
    } else {
        v2.style.backgroundColor = "#aa3333";
        v2.style.borderColor = "#aa3333";
        alert("Error: the username fields doesn't match or are empty");
    }
}
function displayTable() {
 /** Create rows */
    
    const div = document.querySelector("#tabla");
    div.replaceChildren();
    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    const theader = document.createElement('tr');
    let field = document.createElement('th');
    let value = document.createElement('th');
    field.textContent  = "FIELD";
    value.textContent = "VALUE";

    theader.appendChild(field);
    theader.appendChild(value);
    thead.appendChild(theader);
    tabla.appendChild(thead);

    //CELLS
    const username = document.createElement('tr');
    const mail = document.createElement('tr');
    const ranting = document.createElement('tr');
    const name = document.createElement('tr');

    // VALUES
    let field1 = document.createElement('th');
    let value1 = document.createElement('td');

    field1.textContent = "NAME:";
    value1.textContent = document.getElementById("fname").value;
    name.appendChild(field1);
    name.appendChild(value1);
    
    let field2 = document.createElement('th');
    let value2 = document.createElement('td');

    field2.textContent = "EMAIL:";
    value2.textContent = document.getElementById("femail").value;
    mail.appendChild(field2);
    mail.appendChild(value2);
    

    let field3 = document.createElement('th');
    let value3 = document.createElement('td');

    field3.textContent = "RATING:";
    value3.textContent = document.getElementById("r").value;
    ranting.appendChild(field3);
    ranting.appendChild(value3);
    

    let field4 = document.createElement('th');
    let value4 = document.createElement('td');
    field4.textContent = "USERNAME";
    value4.textContent = document.getElementById("fusername").value;
    username.appendChild(field4);    
    username.appendChild(value4);

    tbody.appendChild(name);
    tbody.appendChild(mail);
    tbody.appendChild(ranting);
    tbody.appendChild(username);

    tabla.appendChild(tbody);

    div.appendChild(tabla);
}




