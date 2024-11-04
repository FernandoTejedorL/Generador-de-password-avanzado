const lengthElement = document.getElementById('lengthElement');
const rangeBarElement = document.getElementById('rangeBarElement')
const generateButtonElement = document.getElementById('generateButtonElement');
const finalPasswordElement = document.getElementById('finalPasswordElement')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const checkboxElements = document.querySelectorAll('.checkbox')
// Longitud de la password

const getValue = () => {
    let lengthValue = rangeBarElement.value    
    lengthElement.textContent = lengthValue
}
rangeBarElement.addEventListener('mouseup', getValue)

let valuePass = lengthElement.textContent
console.log(valuePass)

// Activar botón si hay algún check marcado

const activateButton = event => {
    if (uppercaseElement.checked === true || lowercaseElement.checked === true
        || numbersElement.checked === true || symbolsElement.checked === true )
      {
        generateButtonElement.disabled = false
    } else if (uppercaseElement.checked === false && lowercaseElement.checked === false
        && numbersElement.checked === false && symbolsElement.checked === false ) {
        generateButtonElement.disabled = true
        finalPasswordElement.textContent ='P4$5w0RD!'
    }
}
uppercaseElement.addEventListener('change', activateButton)
lowercaseElement.addEventListener('change', activateButton)
numbersElement.addEventListener('change', activateButton)
symbolsElement.addEventListener('change', activateButton)

// Generar contraseña en función de los checks y con la longitud indicada

/*const generatePassword = () => {
    const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const numberCharacters = '01234567890'
    const symbolCharacters = '!@#$%^&*()_+-={}[]:;<>,.?/'
    let password = ''
    for (let counter = 0; counter < lengthElement.textContent; counter++) {
        if (uppercaseElement.checked === true) {
            let randomchar = upperCharacters.charAt(Math.floor(Math.random() * upperCharacters.length));
            password += randomchar
        }
        if (lowercaseElement.checked === true) {
            let randomchar = lowerCharacters.charAt(Math.floor(Math.random() * lowerCharacters.length));
            password += randomchar
        }
        if (numbersElement.checked === true) {
            let randomchar = numberCharacters.charAt(Math.floor(Math.random() * numberCharacters.length));
            password += randomchar
        }
        if (symbolsElement.checked === true) {
            let randomchar = symbolCharacters.charAt(Math.floor(Math.random() * symbolCharacters.length));
            password += randomchar
        }
    }
    let mixedPassword = password.substring(0 , lengthElement.textContent)
    finalPasswordElement.textContent = mixedPassword
}
generateButtonElement.addEventListener('click', generatePassword)
*/

const generatePassword = () => {
    const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const numberCharacters = '01234567890'
    const symbolCharacters = '!@#$%^&*()_+-={}[]:;<>,.?/'
    let password = ''
    let newPassword = ''
    if (uppercaseElement.checked === true) {
        password += upperCharacters
    }
    if (lowercaseElement.checked === true) {
        password += lowerCharacters
    }
    if (numbersElement.checked === true) {
        password += numberCharacters
    }
    if (symbolsElement.checked === true) {
        password += symbolCharacters
    }
    for (let counter = 0; counter < lengthElement.textContent; counter++){
        newPassword+= password.charAt(Math.floor(Math.random()*password.length))
    }
    finalPasswordElement.textContent = newPassword
}
generateButtonElement.addEventListener('click', generatePassword)

/*Podemos utilizar el querySelectorAll('.clase-común'), en este caso ver linea 9
explicación clase 04/11/2024 minuto 1:00:00
Se crea un objeto y se va consultando ese objeto

const passwordOptions = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '01234567890',
    symbols: '!@#$%^&*()_+-={}[]:;<>,.?/',
}

const checkPasswordOptions = () => {
    characters = ''
    for (const checkbox of checkboxElements) {
        if (checkbox.checked) {
            console.log(passwordOptions[checkbox.id])
        }
    }

}
*/

