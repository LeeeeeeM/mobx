import * as mobx from "../lib/mobx.es6"

console.log(mobx)

const addBtn = document.getElementById("add")
const minusBtn = document.getElementById("minus")
const display = document.getElementById("display")

debugger

const bankUser = mobx.observable({
    name: "Ivan Fan",
    income: 3,
    debit: 2
})

mobx.autorun(() => {
    display.innerHTML = `i'm the content ${bankUser.income}`
})

addBtn.addEventListener("click", () => {
    bankUser.income++
})

minusBtn.addEventListener("click", () => {
    bankUser.income--
})
