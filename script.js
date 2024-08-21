// variaveis 
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const randomNumber = Math.round(Math.random() * 10)

let attempts = 1;

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter'){
        handleResetClick(event)
    }
})

// funcoes callback
function handleTryClick(event) {
    event.preventDefault() // "nao faz o evento padrao". (evento padrao -> ao clicar no botao ele envia como padrao de formulario)
    
    const inputNumber = document.querySelector('#inputNumber')
    
    if (Number(inputNumber.value) == randomNumber){
        toggleScreen();

        document.querySelector(".screen2 h2")
        .innerText = `Voce acertou em ${attempts} tentativas`
    }

    inputNumber.value = ""
    attempts++
}

function handleResetClick() {
    toggleScreen();
    attempts = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
