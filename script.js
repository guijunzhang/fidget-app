const btnEl = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const numEl = document.getElementById("num");

let count = 0;

btnEl.addEventListener("click", () => {
    count++;
    numEl.innerText = count;
})

btn2El.addEventListener("click", () => {
    count = 0;
    numEl.innerText = count;
})