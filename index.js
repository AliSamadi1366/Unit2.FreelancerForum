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
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min +1)) + PRICE_RANGE.min;
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
console.log(rateAverage(freelancers))