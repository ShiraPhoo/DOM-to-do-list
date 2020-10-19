let input = document.querySelector(".addItem");
let addItem = document.querySelector("#newItem");
let item = document.querySelector(".itemDiv");
let setDate = document.querySelector("#date");

addItem.addEventListener("submit", setItem);

let editValue;
let edit = false;

function init() {
  input.value = "";
}

// Add New Item Function
function setItem(e) {
  e.preventDefault();

  // Get Input Value
  let value = input.value.charAt(0).toUpperCase() + input.value.slice(1);

  if (value !== "" && edit === false) {
    let element = document.createElement("div");
    element.classList.add("item");

    element.innerHTML = `<input type="checkbox" />
                        <p>${value}</p>
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        <div class="vl"></div>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>`;
    item.style.display = "block";
    item.appendChild(element);

    // Delete and Edit Button
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    init();
  } else if (value !== "" && edit === true) {
    editValue.innerHTML = value;
    init();
  } else {
    displayAlert("Please Enter Item Value!", "danger");
  }
}

// Delete Item Function
function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  item.removeChild(element);
  displayAlert("Removed Item Value!", "danger");
}

// Edit Item Function
function editItem(e) {
  const element = e.currentTarget.parentElement;
  editValue = e.currentTarget.previousElementSibling;
  input.value = editValue.innerHTML;
  edit = true;
}

// Display Alert Function
function displayAlert(text, action) {
  document.querySelector(".alert").textContent = text;
  document.querySelector(".alert").classList.add(`alert-${action}`);
  document.querySelector(".alertDiv").style.display = "block";

  setTimeout(function () {
    document.querySelector(".alert").textContent = "";
    document.querySelector(".alert").classList.remove(`alert-${action}`);
    document.querySelector(".alertDiv").style.display = "none";
  }, 1200);
}

// Display Date Function
function displayDate() {
  let date = new Date().getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[new Date().getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[new Date().getMonth()];
  let fullYear = new Date().getFullYear();
  console.log(date, day, fullYear, month);

  setDate.textContent = `${day}, ${month}, ${fullYear}`;
}

displayDate();
