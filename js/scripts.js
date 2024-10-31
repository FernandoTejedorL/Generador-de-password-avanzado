const lengthElement = document.getElementById('lengthElement');
const rangeBarElement = document.getElementById('rangeBarElement')
const generateButtonElement = document.getElementById('generateButtonElement');
const finalPasswordElement = document.getElementById('finalPasswordElement')
const uppercaseElement = document.getElementById('uppercaseElement')
const lowercaseElement = document.getElementById('lowercaseElement')
const numbersElement = document.getElementById('numbersElement')
const symbolsElement = document.getElementById('symbolsElement')

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

// Generar contraseña en finción de los checks y con la longitud indicada

const generatePassword = () => {
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


