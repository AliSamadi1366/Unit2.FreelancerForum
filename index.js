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
  const price = PRICE_RANGE[Math.floor(Math.random() * PRICE_RANGE.length)];
  const freelancer = { name, occupation, price };
  return freelancer;
}
//Initialize a state variable to an array of NUM_FREELANCERS freelancer objects
let freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
