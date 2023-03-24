
function checking(palavra) {
   const palindrome = palavra.replace(/[^a-zA-Z0-9]+/g,'').split("").reverse().join(""); //o "g" significa todas as ocorrencias e essa chamada esta trocando por um vazio (diferente de um espaco em branco)
   palavra = palavra.replace(/[^a-zA-Z0-9]+/g,'');
   if (palavra == palindrome){
      return true;
   }return false;
   
}

console.log(checking("nurses run"));
console.log(checking("fox"));
