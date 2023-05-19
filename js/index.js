// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

document.getElementById("add-button").addEventListener("click", function () {
  // Get form values
  var eventInput = document.getElementById("event").value;
  var dateInput = document.getElementById("date").value;
  var timeInput = document.getElementById("time").value;
  var durationInput = document.getElementById("duration").value;
  var repeatInput = document.getElementById("repeat").value;

  // Create a new event card
  var eventCard = document.createElement("div");
  eventCard.classList.add("event-card");

  var eventCardContent = document.createElement("div");
  eventCardContent.classList.add("event-card-content");

  // Create card elements
  var eventTitle = document.createElement("h3");
  eventTitle.textContent = eventInput;

  var eventDetails = document.createElement("p");
  eventDetails.innerHTML = `<strong>Date:</strong> ${dateInput}<br><strong>Time:</strong> ${timeInput}<br><strong>Duration:</strong> ${durationInput}<br><strong>Repeat:</strong> ${repeatInput}`;

  // Append elements to the event card
  eventCardContent.appendChild(eventTitle);
  eventCardContent.appendChild(eventDetails);
  eventCard.appendChild(eventCardContent);

  // Append the event card to the events section
  var eventsSection = document.getElementById("events-section");
  eventsSection.appendChild(eventCard);

  // Clear form inputs
  document.getElementById("event").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("repeat").value = "";
});
