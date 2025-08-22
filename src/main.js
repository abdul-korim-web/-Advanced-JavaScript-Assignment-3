// access html element
let mainBalance = document.querySelector(`.mainBalance`)
let addMoney = document.querySelector(`.addMoney`)
let Withdraw = document.querySelector(`.Withdraw`)
let History = document.querySelector(`.History`)
let inputForm = document.querySelector(`.inputForm`)
let inputAmount = document.querySelector(`.inputAmount`)
let conform = document.querySelector(`.conform`)
let cancel = document.querySelector(`.cancel`)
let balanceAction;


// Add select 
addMoney.addEventListener(`click`,()=>{
  inputForm.classList.toggle(`hidden`)
  inputAmount.placeholder= `Enter Add Amount....`
  balanceAction = `add`
  Withdraw.classList.toggle(`hidden`)
  
})
//Withdraw select
Withdraw.addEventListener(`click`,()=>{
  inputForm.classList.toggle(`hidden`)
  addMoney.classList.toggle(`hidden`)
  inputAmount.placeholder= `Enter Withdraw Amount....  `
  balanceAction = `Withdraw`
  
})

// Form preventDefault
inputForm.addEventListener(`submit`,(e)=>{
  e.preventDefault()
})

