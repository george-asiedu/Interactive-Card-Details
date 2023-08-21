const inputBox = document.querySelectorAll('.card-input-box')
const input = document.querySelectorAll('.card-input-box input')
const dateBlock = document.querySelectorAll('.date-block')
const month = document.querySelector('#month')
const cvcInput = document.querySelector('#cvc')
const button = document.querySelector('#button')
// const cardNumber = document.querySelector('#number')
// const cardMonth = document.querySelector('#month')
// const cardYear = document.querySelector('#year')
// const cvc = document.querySelector('#cvc')
// const button = document.querySelector('#button')
// const confirmMessage = document.querySelector('.confirm')
// const form = document.querySelector('form')
// const formInput = document.querySelectorAll('input')
// const cardNameInput = document.querySelector('.card-name')
// const cardNumberInput = document.querySelector('.card-number')
// const cardCvcInput = document.querySelector('.card-cvc')
// const cardYearInput = document.querySelector('#yearDetails')
// const cardMonthInput =document.querySelector('p')

// const arrayList = [
//     cardNameInput, cardNumberInput, cardCvcInput, cardYearInput, cardMonthInput
// ]

const newElement = textNode => {
    const errorMessage = document.createElement('p')
    errorMessage.classList.add('error')
    const text = document.createTextNode(textNode)
    errorMessage.appendChild(text)
    return errorMessage
}

button.addEventListener('click', () => {
    validateName()
    validateNumber()
    validateDate()
    validateCvc()

    if(input.values !== '' && dateInput.values !== '' && cvcInput !== '') {
        const confirm = document.querySelector('.confirm')
        const form = document.querySelector('form')
        confirm.style.display = 'block'
        form.style.display = 'none'
    }
})



// const newElement2 = textNode2 => {
//     const errorMessage = document.createElement('p')
//     errorMessage.classList.add('errorMessage')
//     const text = document.createTextNode(textNode2)
//     errorMessage.appendChild(text)
//     return errorMessage
// }

const validateName = () => {
    if(input[0].value === '') {
        const errorMessage = newElement("Please fil out this form")
        inputBox[0].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000)
    }
}

const validateNumber = () => {
    if(input[1].value === '') {
        const errorMessage = newElement("Please fil out this form")
        inputBox[1].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000)
    } else if(isNaN(input[1].value)) {
        const errorMessage = newElement('Wrong format, numbers only')
        inputBox[1].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000)
    }
}

const validateDate = () => {
    if(dateInput.values === '') {
        const errorMessage = newElement("Can't be blank")
        dateBox.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000)
    } else if(isNaN(dateInput.values) || dateInput[0].value >= 12) {
        const errorMessage = newElement('Wrong format, numbers only')
        dateBox.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000)
    }
}

const validateCvc = () => {
    if(cvcInput.value === '') {
        const errorMessage = newElement("Can't be blank")
        const block = document.querySelector('.cvc-block')
        block.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000)
    } else if(isNaN(cvcInput.value)) {
        const errorMessage = newElement("Wrong format, numbers only")
        const block = document.querySelector('.cvc-block')
        block.appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000)
    }
}
// cardName.addEventListener('input', addText)
// cardNumber.addEventListener('input', addNumber)
// cvc.addEventListener('input', addCvc)
// cardYear.addEventListener('input', addYear)
// cardMonth.addEventListener('input', addMonth)
// button.addEventListener('click', confirmForm)

// function addText() {
//     cardNameInput.innerHTML = cardName.value
// }

// function addNumber() {   
//     cardNumberInput.innerHTML = cardNumber.value
// }

// function addCvc() {
//     cardCvcInput.innerHTML = cvc.value
// }

// function addYear() { 
//     cardYearInput.innerHTML = cardYear.value
// }

// function addMonth() {
//     cardMonthInput.innerHTML = cardMonth.value
// }

// function confirmForm(e) {
//     e.preventDefault()
//     let x = cardName.value
    
//     if(x === '') {
//        const errorMessage = newElement('Please fill out this form')
//        const cardNameInfo = document.querySelector('.card-input-box');
//        cardNameInfo.appendChild(errorMessage);
//        setTimeout(() => errorMessage.remove(), 3000);
//        numberFormat()
//        dateFormat()
//        cvcFormat()
//     } else if(x !== '' && number !== '') {
//         confirmMessage.style.display = 'block'
//         form.style.display = 'none'
//         const btn = document.querySelector('.btn') 
//         btn.addEventListener('click', () => {
//             confirmMessage.style.display = 'none'
//             form.style.display = 'block'
//             for(let i = 0; i < formInput.length; i++)  {
//                 for(let j = 0; j <arrayList.length; j++) {
//                     formInput[i].value = ''
//                     arrayList[j].innerHTML = ''
//                 }               
//             }
//         })
//     }
// }

// function numberFormat() {
//     let number = cardNumber.value
//     if(isNaN(number)) {
//         const errorMessage = newElement('Wrong format, numbers only')
//         const numberInfo = document.querySelector('#numberFormat')
//         numberInfo.appendChild(errorMessage)
//         setTimeout(() => errorMessage.remove(), 3000);
//     } else if(number === '') {
//        const errorMessage = newElement('Please fill out this form')
//         const numberInfo = document.querySelector('#numberFormat')
//         numberInfo.appendChild(errorMessage)
//         setTimeout(() => errorMessage.remove(), 3000);
//     }
// }

// function dateFormat() {
//     let date = cardYear.value

//     if(date === '') {
//         const errorMessage = newElement2("Can't be blank")
//         const yearInfo = document.querySelector('.date-input')
//         yearInfo.appendChild(errorMessage)
//         setTimeout(() => errorMessage.remove(), 3000);
//     } else if(isNaN(date)) {
//         const errorMessage = newElement2('Wrong format, numbers only')
//         const yearInfo = document.querySelector('.date-input')
//         yearInfo.appendChild(errorMessage)
//         setTimeout(() => errorMessage.remove(), 3000);
//     }
// }

// function cvcFormat() {
//     let cvcNumber = cvc.value

//     if(isNaN(cvcNumber)) {
//         const errorMessage = newElement2('Numbers only')
//         const cvcInfo = document.querySelector('.cvc-block')
//         cvcInfo.appendChild(errorMessage)
//         setTimeout(() => errorMessage.remove(), 3000);
//     } else if(cvcNumber === '') {
//         const errorMessage = newElement2("Can't be blank")
//         const cvcInfo = document.querySelector('.cvc-block')
//         cvcInfo.appendChild(errorMessage)
//         setTimeout(() => errorMessage.remove(), 3000);
//     }
// }


// confirmForm()