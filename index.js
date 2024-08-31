// document.getElementById("count-el").innerText = 5;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const greetingEl = document.getElementById("greeting-el");
const counterEl = document.getElementById("counter-el");
let count = 0;
console.log(count);

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
  console.log(count);
});

saveBtn.addEventListener("click", function () {
  counterEl.innerText += ` ${count} - `;
  count = 0;
  countEl.textContent = count;
  console.log(count);
});

let userName = "Ed";

let msg = "You have three new notifications";
displayMsg = () => {
  console.log(`${userName}, ${msg}!`);
};
displayMsg();

// greetingEl.innerText = `${userName}, ${msg}! 🎉`;

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
let emoji = "j";
let name = "Ed";
let greeting = "Hi, my name is ";
let myGreeting = `${greeting} ${name}`;
console.log(myGreeting);

// let sum = 4 + 5;

// console.log(sum)
// console.log("2" + "4") =
// console.log("5" + 1) = 51
// console.log(100 + "100") = "100100"
// console.log(incrementBtn);

// function showNumber() {
//   let num = 42;
//   console.log(num);
// }

// showNumber();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function addLaps() {

//   let totalLaps = lap1 + lap2 + lap3;
//   console.log(totalLaps);
// }

// addLaps()

// let lapsCompleted = 0;

// function incrementLap() {
//   lapsCompleted += 1;
//   console.log(lapsCompleted);
// }

// incrementLap()
// incrementLap()
// incrementLap()

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
