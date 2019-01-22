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

console.log(hobbitMap.get('Hobbit'));
// console.log(hobbitMap.values());
// console.log(hobbitMap.has('RingBearer'));
// console.log(hobbitMap.keys());
// console.log(hobbitMap[@@iterator]())

// {Hobbit:"Bilbo"}, {Hobbit:"Frodo"}, {Wizard:"Gandolf"}, {Human:"Aragon"}, {Elf: "Legolas"}, {Maiar:"The Necromancer"}, {Maiar: "Sauron"}, {RingBearer: "Gollum"}, {LadyOfLight: "Galadriel"}, {HalfElven: "Arwen"}, {Ent: "Treebeard"}

// PALINDROME
// Any permutation a palindrome
// Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.
function Palindrome(str) {
  // loop through string and set each character to a hash map.
  // then
  
}
