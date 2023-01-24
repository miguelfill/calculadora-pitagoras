const firstDiv = document.querySelector('.primeiraDiv');
const secondDiv = document.querySelector('.segundaDiv');
const thirdDiv = document.querySelector('.terceiraDiv'); 
const fourthDiv = document.querySelector('.quartaDiv');
const fifthDiv = document.querySelector('.quintaDiv'); // alternar entre as divs

function passarDivs(currentStep, nextStep){ 
    let dNone, dblock;  // vou aplicar o display none no currentStep e o block no nextStep
    if (currentStep == 1) {
        dNone = firstDiv
    }

    else if (currentStep == 2) {
        dNone = secondDiv
    }

    else if(currentStep == 3){
        dNone = thirdDiv
    }

    else if(currentStep == 4){
        dNone = fourthDiv
    }

    else{
        dNone = fifthDiv 
    }

    dNone.style.display = 'none';

    if (nextStep == 1) {
        dblock = firstDiv
    }

    else if (nextStep == 2) {
        dblock = secondDiv
    }

    else if(nextStep == 3){
        dblock = thirdDiv
    }

    else if(nextStep == 4){
        dblock = fourthDiv
    }

    else{
        dblock = fifthDiv
    }

    dblock.style.display = 'block';
}


function validarCamposDiv2(){
    const cateto1 = document.getElementById('cateto1')
    const cateto2 = document.getElementById('cateto2')

    cateto1.style.border = 'none'
    cateto2.style.border = 'none'

    if (!cateto1.value || !cateto2.value) {
        if (!cateto1.value && !cateto2.value) {
            alert('Preencha corretamente os campos')
        }

        else if (!cateto1.value) {
            cateto1.style.border = '1px solid red';
        }

        else{
            cateto2.style.border = '1px solid red';
        }
    }

    else{
        let soma = (cateto1.value ** 2) + (cateto2.value ** 2);
        let raiz = Math.sqrt(soma);
        const resultadoFinalHipo = document.getElementById('resultadoHipo');

        resultadoFinalHipo.innerHTML = `O valor da hipotenusa é: ${raiz.toFixed(0)}`
    }

    passarDivs(2, 3)
}


function validarCamposDiv4(){
    const hipo = document.getElementById('hipo')
    const cateto = document.getElementById('cateto')

    hipo.style.border = 'none'
    cateto.style.border = 'none'

    if (!hipo.value || !cateto.value) {
        if (!hipo.value && !cateto.value) {
            alert('Preencha corretamente os campos')
        }

        else if (!hipo.value) {
            hipo.style.border = '1px solid red';
        }

        else{
            cateto.style.border = '1px solid red';
        }
    }

    else{
        let subtracao = (hipo.value ** 2) - (cateto.value ** 2);
        let raizCateto = Math.sqrt(subtracao);
        const resultadoFinalCateto = document.getElementById('resultadoCateto');

        resultadoFinalCateto.innerHTML = `O valor do cateto é: ${raizCateto.toFixed(0)}` // Escrever na tela
    }

    passarDivs(4, 5)
}

