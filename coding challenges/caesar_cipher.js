/*
CAESAR CIPHER 2.0

This problem will provide a string message and a shift integer. The message can contain numbers and letters. Letters are part of the message that should be encrypted, while numbers serve to increase the shift (aka how many letters of the English alphabet you should shift to find the encoded letter). Your function should return an encoded message of the input, as shifted by the input and any numbers in the input message.

example:

input ->
he2l9lo, 3

output ->
kh2q9zo

console.log(cipher('he2l9lo world', 3)) //kh2q9zo
*/

let cipher = function(message, shift) {
  let encodedArray = [];

  for (let i = 0; i < message.length; i++) {
    let currentChar = message[i];
    let currentCode = currentChar.charCodeAt();

    if (Number.isInteger(parseInt(currentChar.replace(/\D/g, "")))) { //is a shift?
      shift += (parseInt(currentChar.replace(/\D/g, "")));
      encodedArray.push(currentChar)
    } else if (currentCode < 97 || currentCode > 123) { //is a non-letter char?
      encodedArray.push(currentChar)
    } else { //is a letter char?
      let newCode = currentCode + shift;
      let newLetter = String.fromCharCode(newCode > 122 ? (newCode - 26): newCode);
      encodedArray.push(newLetter)
    }
  }
  let encodedMessage = encodedArray.join('');
  return encodedMessage;
}

/*
PSEUDOCODE

declare empty array to hold encoded chars

loop over the input message
  declare current character variable
  declare current character code variable

  if currentCharacter is a number,
    add it to the input 'shift'
  if the currentCode is between 97-122
    declare a newCode variable with currentCode number plus 'shift'
    declare a newLetter variable using fromCharCode and newCode (check if above 122)
  if current character is anything else (dashes, commas, etc.)
    add it to the encoded array

  join and return encoded message
*/

