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

//added or Withdraw comfrom
conform.addEventListener(`click`,()=>{
  let amount = parseFloat(inputAmount.value)
  let balance  = parseFloat(mainBalance.textContent)
  // balance added condition
  if (balanceAction == `add`){
    if(amount <= 0 || isNaN(amount)){
      alert(`⚠️ please Inter valid Adedd Amount `)
      inputAmount.value = ``
      return
    }
    balance += amount
    mainBalance.textContent = balance
    inputAmount.value = ``

  }
  // balance Withdraw condition
  if (balanceAction= `Withdraw`){
    if (amount <= 0 || isNaN(amount) ){
      alert(`⚠️ please Inter valid Withdraw Amount `)
      return
    } else if(amount>balance){
      alert(`⚠️ Insufficient Balance!`)
      return

    } else{
      balance += amount
      mainBalance.textContent = balance
    }
  }


})

// cancel add and Withdraw form 
cancel.addEventListener(`click`,()=>{
  let conform = window.confirm(`Are You Sure? You Are cancel `)
  if (conform){
    inputForm.classList.add(`hidden`)
    addMoney.classList.remove(`hidden`)
    Withdraw.classList.remove(`hidden`)
    return
  } 
  
})






