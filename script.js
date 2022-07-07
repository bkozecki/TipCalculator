const bill = document.querySelector("#bill");
const ppl = document.querySelector("#people");
const tip = document.querySelector("#tip");
const person = document.querySelector("#person");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".btn_custom");
const btn = document.querySelectorAll(".btn");
const zero = document.querySelector(".zero");
const pplWrap = document.querySelector(".wrapA");
const billWrap = document.querySelector(".A");

const obj = {
  A: 0.05,
  B: 0.1,
  C: 0.15,
  D: 0.25,
  E: 0.5,
  custom: custom.value,
};

custom.addEventListener("input", function (e) {
  let value = e.target.value / 100;
  let tipVal = parseFloat(bill.value * value);
  let billFinal = Number(bill.value) + tipVal;
  let tipPer = tipVal / Number(ppl.value);
  let billPer = billFinal / Number(ppl.value);
  tip.textContent = `$ ${tipPer.toFixed(2)}`;
  person.textContent = `$ ${billPer.toFixed(2)}`;
});

function calcTip() {
  btn.forEach((btn) =>
    btn.addEventListener("click", function () {
      if (ppl.value === 0 || ppl.value === "") {
        zero.style.visibility = "visible";
        pplWrap.style.border = "2px solid orange";
      } else {
        zero.style.visibility = "hidden";
        pplWrap.style.border = "none";
        let val = btn.value;
        let tipVal = parseFloat(bill.value * obj[val]);
        let billFinal = Number(bill.value) + tipVal;
        let tipPer = tipVal / Number(ppl.value);
        let billPer = billFinal / Number(ppl.value);
        tip.textContent = `$ ${tipPer.toFixed(2)}`;
        person.textContent = `$ ${billPer.toFixed(2)}`;
      }
    })
  );
}
calcTip();

reset.addEventListener("click", function () {
  bill.value = "";
  ppl.value = "";
  custom.value = "";
  tip.textContent = "$0.00";
  person.textContent = "$0.00";
  zero.style.visibility = "hidden";
  pplWrap.style.border = "none";
});
