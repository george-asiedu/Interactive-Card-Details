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
        const para = document.createElement('p')
        para.classList.add('error')
        const textNode1 = document.createTextNode('Wrong format, numbers only')
        para.appendChild(textNode1)
    
        const numberInfo = document.querySelector('#numberFormat')
        numberInfo.appendChild(para)
    } else if(number === '') {
        const para = document.createElement('p')
        para.classList.add('error')
        const textNode1 = document.createTextNode('Please fill out this form')
        para.appendChild(textNode1)
    
        const numberInfo = document.querySelector('#numberFormat')
        numberInfo.appendChild(para)
    }
}

function dateFormat() {
    let date = cardYear.value

    if(date === '') {
        const errorText = document.createElement('p') 
        errorText.classList.add('errorMessage')
        const textNode2 = document.createTextNode("Can't be blank")
        errorText.appendChild(textNode2)

        const yearInfo = document.querySelector('.date-input')
        yearInfo.appendChild(errorText)
    } else if(isNaN(date)) {
        const errorText2 = document.createElement('p') 
        errorText2.classList.add('errorMessage')
        const textNode3 = document.createTextNode("Wrong format, numbers only")
        errorText2.appendChild(textNode3)

        const yearInfo = document.querySelector('.date-input')
        yearInfo.appendChild(errorText2)
    }
}

function cvcFormat() {
    let cvcNumber = cvc.value

    if(isNaN(cvcNumber)) {
        const errorText2 = document.createElement('p') 
        errorText2.classList.add('errorMessage')
        const textNode3 = document.createTextNode("Numbers only")
        errorText2.appendChild(textNode3)

        const cvcInfo = document.querySelector('.cvc-block')
        cvcInfo.appendChild(errorText2)
    } else if(cvcNumber === '') {
        const errorText2 = document.createElement('p') 
        errorText2.classList.add('errorMessage')
        const textNode3 = document.createTextNode("Can't be blank")
        errorText2.appendChild(textNode3)

        const cvcInfo = document.querySelector('.cvc-block')
        cvcInfo.appendChild(errorText2)
    }
}


confirmForm()