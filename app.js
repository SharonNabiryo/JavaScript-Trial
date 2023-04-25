// ----------dark mode btn----------------

const content = document.getElementsByTagName("body")[0];
const darkMode = document.getElementById("dark-change");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});

// ----------end dark mode btn----------------

// ---------------DROPDOWN MENU================

const toggleBtn = document.querySelector(".toggle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");

  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtn.classList = isOpen ? "fas fa-xmark" : "fas fa-bars";
});

// -----------------COUNTER----------------

const addEl = document.getElementById("add-el");
const subtractEl = document.getElementById("subtract-el");
const countEl = document.getElementById("count-el");

let count = 0;

function addElem() {
  count += 1;
  countEl.textContent = count;
}

addEl.addEventListener("click", function () {
  addElem();
});

subtractEl.addEventListener("click", function () {
  count -= 1;
  countEl.textContent = count;
});

// ----------------INPUT BTN----------------
const saveBTN = document.getElementById("save-btn");
const passengerNames = document.getElementById("passenger-names");
const ulEl = document.getElementById("passenger-list");
const saveCount = document.getElementById("save-count");
const passengerCount = document.getElementById("passenger-count");

// saveBTN.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = passengerNames.value;
//   ulEl.appendChild(li);

//   passengerNames.value = "";
// });

// --------------OR--------------

// APPENDING AN ARRAY TO THE DOM FROM INPUT VALUE
let names = [];

saveBTN.addEventListener("click", function () {
  names.push(passengerNames.value);
  passengerNames.value = "";
  //   console.log(names);

  let listNames = "";
  for (let i = 0; i < names.length; i++) {
    listNames = `<li>${names[i]}</li>`;
  }
  ulEl.innerHTML += listNames;
  console.log(names);
});

// saveBTN.addEventListener("click", function () {
//   ulEl.innerHTML += "<li>" + passengerNames.value + "</li>";
//   passengerNames.value = "";
// });

// ---COUNT BUTTON

saveCount.addEventListener("click", function () {
  if (countEl.textContent === "0") {
    alert("Please add a passenger");
  } else {
    passengerCount.innerHTML += countEl.textContent + ", ";
    countEl.textContent = 0;
  }
});
