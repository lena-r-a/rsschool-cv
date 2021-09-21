const btn = document.querySelector(".nav");
const btn1 = document.querySelector(".burger");
const nav = document.querySelector(".navigation")
const task = document.querySelector(".task")

btn.addEventListener("click", function () {
    nav.classList.toggle("displaynone")
})

btn1.addEventListener("click", function () {
    nav.classList.toggle("displaynone")
})

console.log(task.textContent)