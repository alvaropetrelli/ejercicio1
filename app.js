/* Check if a char is vowel or consonant */
const vowelElement = document.querySelector('#vowel-text');
vowelElement.addEventListener('change', (event) => {
  const char = event.target.value;
  const isVowel = vowelOrConsonant(char);
  let text = '';
  if (isVowel) {
    text = `Char '${char}' is a vowel.`;
  } else {
    text = `Char '${char}' is a consonant.`;
  }
  const result = document.querySelector('#vowel-result');
  result.textContent = text;
});
function vowelOrConsonant(char) {
  const Vowels = ['a', 'e', 'i', 'o', 'u'];
  return Vowels.includes(char.toLowerCase());
}

/* Text to uppercase */
const uppercaseElement = document.querySelector('#uppercase-text');
uppercaseElement.addEventListener('change', (event) => {
  const char = event.target.value;
  const uppercase = formatUpperCase(char);
  const result = document.querySelector('#uppercase-result');
  result.textContent = uppercase;
});
function formatUpperCase(word) {
  return word.toUpperCase();
}

/* Reverse a given number */
const reverseElement = document.querySelector('#reverse-text');
reverseElement.addEventListener('change', (event) => {
  const number = event.target.value;
  const reverse = reverseNumber(number);
  const result = document.querySelector('#reverse-result');
  result.textContent = reverse;
});
function reverseNumber(number) {
  return parseInt(number.toString().split('').reverse().join(''));
}

/* Number to binary */
const binaryElement = document.querySelector('#binary-text');
binaryElement.addEventListener('change', (event) => {
  const number = event.target.value;
  const binary = numberToBinary(number);
  const result = document.querySelector('#binary-result');
  result.textContent = binary;
});
function numberToBinary(number) {
  const Doubles = doubleGenerate(number);
  // if number is divisible by double value is 1 if not 0
  let result = '';
  let rest = number;
  
  for (var i = 0; i < Doubles.length; i++) {
    let double = Doubles[i];
    if (rest >= double) {
      rest = rest - double;
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

function doubleGenerate(number) {
  let base = 1;
  let doubles = [base];
  const limit = number > 128 ? number : 128;
  while (base < limit) {
    base = base * 2;
    doubles.push(base);
  }
  return doubles.reverse();
}
// //numero inicial de 1
// //multiplicar por 2 el numero actual
// //guardar cada resultado en un arreglo