function isPalindrome(word) {
    const palindrome = word.replace(/[^a-zA-Z0-9]+/g,'').split("").reverse().join("").toLowerCase();
    word = word.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
    if (palindrome == word) {
        return true;
    } return false;
}

function whichLarger(numbers) {
    let sort = [0, 0];
    for (const i in numbers) {
        if (numbers[i] > sort[0]) {
            sort[1] = sort[0];
            sort[0] = numbers[i];
        } else if (numbers[i] > sort[1]){
            sort[1] = numbers[i];
        }
    }
    return sort;
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        };
    } return true;
}

function vowel(word) {
    word = word.toLowerCase();
    
    let vowels = {
        'a' : 0,
        'e' : 0,
        'i' : 0,
        'o' : 0,
        'u' : 0
    };

    for (let letra of word) {
        if (letra == 'a') {
            vowels.a += 1;
        } else if (letra == 'e') {
            vowels.e += 1;
        } else if (letra == 'i') {
            vowels.i += 1;
        } else if (letra == 'o') {
            vowels.o += 1;
        } else if (letra == 'u') {
            vowels.u += 1;
        }
    }
    return vowels;
}

console.log(isPalindrome("Socorram-me, subi no ônibus em Marrocos"));
console.log(whichLarger([0, 4, 7, 0, 2, 115, 10, 234]));
console.log(isPrime(97));
console.log(vowel("GABRiella"));