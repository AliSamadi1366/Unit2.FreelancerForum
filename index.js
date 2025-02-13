/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
// === State ===
// Write a function that returns a freelancer object with a randomly name, occupation and rate according to the provided constants
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}
//Initialize a state variable to an array of NUM_FREELANCERS freelancer objects
let freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
//Write a function that returns the average rate of all freelancers in state.
function rateAverage(freelancers) {
  let total = 0;
  for (const freelancer of freelancers) {
    total += freelancer.rate;
  }
  return total / freelancers.length;
}
//Use that function to initialize a state variable which will store the average rate of all freelancers
let rateaverage = rateAverage(freelancers);
// === component ===
// Write a component function to represent a single freelancer.
function FreeLancerRow(freelancer) {
  const { name, occupation, rate } = freelancer;
  const $row = document.createElement("tr");
  $row.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>${rate}</td>
    `;
  return $row;
}
//Write a component function to represent an array of freelancers.
function FreeLancerRows() {
  const $table = document.createElement("table");
  $table.classList.add("tfreelancers");
  $table.innerHTML = `
  <thead>
    <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Rate</th>
    </tr>
  </thead>
  <tbody></tbody>
  `;
  const $rows = freelancers.map(FreeLancerRow);
  $table.replaceChildren(...$rows);
  return $table;
}
//Write a component function to represent the average rate of all freelancers.
function AverageRate() {
  const $figcaption = document.createElement("p");
  $figcaption.classList.add("text");
  $figcaption.innerHTML = `
    <p> The average rate is $${rateaverage}</p>
    `;
  return $figcaption;
}
// === render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <FreeLancerRows></FreeLancerRows>
    `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("FreeLancerRows").replaceWith(FreeLancerRows());
}
render();
