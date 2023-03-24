
function gerarProbabilidade() {
    console.log(Math.round(Math.random()*100)); //math.round arredonda para o inteiro mais proximo
    //console.log((Math.random()*100).toFixed(2)) //com o toFixed eu consigo controlar as casas decimais, mas vai me retornar uma string
    
    //let num = "5";
    //num = parseInt(num); //posso usar o parseInt() ou parseFloat() para transformar uma string em number
    //console.log(typeof num);
}

gerarProbabilidade();