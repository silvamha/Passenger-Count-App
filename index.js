// document.getElementById("count-el").innerText = 5;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let count = 0;
console.log(count);

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

function increaseByOne() {
  let counter = 0;
  counter++;
  console.log(counter);
}

increaseByOne();
increaseByOne();
