const amount = document.querySelector(".amount")
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
let count = 0;
const input = document.querySelector("input")
amount.innerText =`${count}`
plus.addEventListener('click', function(){
    count += 1
    amount.innerText =`${count}`
})
minus.addEventListener('click', function(){
    count -= 1
    amount.innerText =`${count}`
})



