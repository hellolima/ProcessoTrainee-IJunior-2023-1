let number = 12345;

function reverse_number(num) {
    num = num.toString();
    //num = num + ""; //eh outro jeito de conveerter para string
    return num.split("").reverse().join("");
}   //o .split serve para dividir uma string em um array de substrings.
    //o .reverse serve para inverter a ordem de um array
    //o .join serve para juntar os elementos do array em uma unica string.

console.log(reverse_number(number));