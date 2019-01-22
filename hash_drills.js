'use strict';
var hobbitMap = new Map();
hobbitMap.set('Hobbit', 'Bilbo');
hobbitMap.set('Hobbit', 'Frodo');
hobbitMap.set('Wizard', 'Gandalf');
hobbitMap.set('Human', 'Aragon');
hobbitMap.set('Elf', 'Legolas');
hobbitMap.set('Maiar', 'The Necromancer');
hobbitMap.set('Maiar', 'Sauron');
hobbitMap.set('RingBearer', 'Gollum');
hobbitMap.set('LadyOfLight', 'Galadriel');
hobbitMap.set('HalfElven', 'Arwen');
hobbitMap.set('Ent', 'Treeeard');

// console.log(hobbitMap.get('Hobbit'));
// console.log(hobbitMap.values());
// console.log(hobbitMap.has('RingBearer'));
// console.log(hobbitMap.keys());
// console.log(hobbitMap[@@iterator]())

// {Hobbit:"Bilbo"}, {Hobbit:"Frodo"}, {Wizard:"Gandolf"}, {Human:"Aragon"}, {Elf: "Legolas"}, {Maiar:"The Necromancer"}, {Maiar: "Sauron"}, {RingBearer: "Gollum"}, {LadyOfLight: "Galadriel"}, {HalfElven: "Arwen"}, {Ent: "Treebeard"}

// PALINDROME
// Any permutation a palindrome
// Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.
//
//PALINDROME fresh start
// count appearances of letters
// aba true
// aabb true
// abc false
// ababab false
//  if more than one letter shows up odd number of times, false

// set each char to a hash map and then loop through the string and
// count each character a: 2 b : 3 reason with an if
// 'aabc'
// for(i = 0; i < str.length; i ++){
// set(str[i]) hashMap.set(a:a+1)
// hashMaps.get()

// }
function palindrome(str) {
  var palindromeHash = new Map();

  for (let i = 0; i < str.length; i++) {
    //loop through sting adding each character to hash
    if (!palindromeHash.get(str[i])) {
      // if character isn't already in hash map, give it a value of 1
      palindromeHash.set(str[i], 1);
    } else {
      //otherwise increment the characters value by 1
      palindromeHash.set(str[i], palindromeHash.get(str[i]) + 1);
    }
  }

  let counter = 0;
  //object of values
  let values = palindromeHash.values();
 
  for (let i of values) {
    //if value is odd, increment counter
    if (i % 2 !== 0) {
      counter++;
    }
  }

  // if counter is larger than one, it can't be a palindrome
  if (counter > 1) {
    return false;
  }

  return true;
}

console.log(palindrome('rrraaaccceeefff'));

// Write an algorithm to group a list of words into anagrams. 
// For example, if the input was 
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
// the output should be: 
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].


// input:  ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
// output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

// key is word, value is an array of letters.
// for each word 

// 