/*function start(){
    console.log('start');
    console.log(calculateImc(64,1.64))
    //console.log(calculateImc(200,1.74))
}
function start(){
    var buttonCalculateImc= document.querySelector('#button-calculate-imc');
    console.log(buttonCalculateImc);
    buttonCalculateImc.textContent="Modifiquei";
}
*/

function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click',handleButtonClick);

    var inputWeight= document.querySelector('#input-weight');
    var inputHeight= document.querySelector('#input-height');

    inputWeight= addEventListener('input', handleButtonClick);
    inputHeight= addEventListener('input', handleButtonClick);
    
}
handleButtonClick();// já começo calculando
/*function handleButtonClick(){
console.log("cliquei")
}*/

function handleButtonClick(){
    var inputWeight= document.querySelector('#input-weight');
    var inputHeight= document.querySelector('#input-height');
    var imcResult= document.querySelector('#imc-result');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);
    
    var imc= calculateImc(weight, height);//chamo a função debaixo
    var formatedImc=imc.toFixed(2).replace('.',',');
    imcResult.textContent = formatedImc;
    
    //console.log(imc);

//console.log(weight);
//console.log(height);
    //console.log(inputWeight);
    //console.log(inputHeight);  
}
//return inputWeight/(inputHeight*inputHeight);

    function calculateImc(weight, height) {
        return weight / (height * height);
    }

    start();
    //handleButtonClick();

