const cardName = document.querySelector('#name')
const cardNumber = document.querySelector('#number')
const cardMonth = document.querySelector('#month')
const cardYear = document.querySelector('#year')
const cvc = document.querySelector('#cvc')
const button = document.querySelector('#button')
const confirmMessage = document.querySelector('.confirm')
const form = document.querySelector('form')
const formInput = document.querySelectorAll('input')
const cardNameInput = document.querySelector('.card-name')
const cardNumberInput = document.querySelector('.card-number')
const cardCvcInput = document.querySelector('.card-cvc')
const cardYearInput = document.querySelector('#yearDetails')
const cardMonthInput =document.querySelector('p')

const arrayList = [
    cardNameInput, cardNumberInput, cardCvcInput, cardYearInput, cardMonthInput
]

const newElement = textNode => {
    const errorMessage = document.createElement('p')
    errorMessage.classList.add('error')
    const text = document.createTextNode(textNode)
    errorMessage.appendChild(text)
    return errorMessage
}

cardName.addEventListener('input', addText)
cardNumber.addEventListener('input', addNumber)
cvc.addEventListener('input', addCvc)
cardYear.addEventListener('input', addYear)
cardMonth.addEventListener('input', addMonth)
button.addEventListener('click', confirmForm)

function addText() {
    cardNameInput.innerHTML = cardName.value
}

function addNumber() {   
    cardNumberInput.innerHTML = cardNumber.value
}

function addCvc() {
    cardCvcInput.innerHTML = cvc.value
}

function addYear() { 
    cardYearInput.innerHTML = cardYear.value
}

function addMonth() {
    cardMonthInput.innerHTML = cardMonth.value
}

function confirmForm(e) {
    e.preventDefault()
    let x = cardName.value
    
    if(x === '') {
       const errorMessage = newElement('Please fill out this form')
       const cardNameInfo = document.querySelector('.card-input-box');
       cardNameInfo.appendChild(errorMessage);
       setTimeout(() => errorMessage.remove(), 5000);
       button.removeEventListener('click', confirmForm)
       numberFormat()
       dateFormat()
       cvcFormat()
    } else if(x !== '' && number !== '') {
        confirmMessage.style.display = 'block'
        form.style.display = 'none'
        const btn = document.querySelector('.btn') 
        btn.addEventListener('click', () => {
            confirmMessage.style.display = 'none'
            form.style.display = 'block'
            for(let i = 0; i < formInput.length; i++)  {
                for(let j = 0; j <arrayList.length; j++) {
                    formInput[i].value = ''
                    arrayList[j].innerHTML = ''
                }               
            }
        })
    }
}

function numberFormat() {
    let number = cardNumber.value
    if(isNaN(number)) {
        const errorMessage = newElement('Wrong format, numbers only')
        const numberInfo = document.querySelector('#numberFormat')
        numberInfo.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    } else if(number === '') {
       const errorMessage = newElement('Please fill out this form')
        const numberInfo = document.querySelector('#numberFormat')
        numberInfo.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    }
}

function dateFormat() {
    let date = cardYear.value

    if(date === '') {
       const errorMessage = newElement("Can't be blank")
        const yearInfo = document.querySelector('.date-input')
        yearInfo.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    } else if(isNaN(date)) {
        const errorMessage = newElement('Wrong format, numbers only')
        const yearInfo = document.querySelector('.date-input')
        yearInfo.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    }
}

function cvcFormat() {
    let cvcNumber = cvc.value

    if(isNaN(cvcNumber)) {
        const errorMessage = newElement('Numbers only')
        const cvcInfo = document.querySelector('.cvc-block')
        cvcInfo.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    } else if(cvcNumber === '') {
        const errorMessage = newElement("Can't be blank")
       const cvcInfo = document.querySelector('.cvc-block')
        cvcInfo.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    }
}


confirmForm()