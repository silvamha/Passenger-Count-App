// document.getElementById("count-el").innerText = 5;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let count = 0;
console.log(count);

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
  console.log(count);
});

function showNumber() {
  let num = 42;
  console.log(num);
}

showNumber();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
function addLaps() {

  let totalLaps = lap1 + lap2 + lap3;
  console.log(totalLaps);
}

addLaps()

let lapsCompleted = 0;

function incrementLap() {
  lapsCompleted += 1;
  console.log(lapsCompleted);
}

incrementLap()
incrementLap()
incrementLap()