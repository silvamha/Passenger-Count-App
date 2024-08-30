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


let bonusPoints = 50;
bonusPoints=bonusPoints+50;
console.log(bonusPoints);

bonusPoints=bonusPoints-75;
console.log(bonusPoints);

bonusPoints=bonusPoints+45;
console.log(bonusPoints)