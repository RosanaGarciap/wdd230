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