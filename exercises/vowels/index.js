// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    'use strict';
    const matches = str.match(/[aeiou]/gi);
    return matches?.length || 0;
}

// function vowels(str) {
//     'use strict';
//     const aeiou = ['a', 'e', 'i', 'o', 'u'];

//     return str
//         .toLowerCase()
//         .split('')
//         .filter(char => aeiou.includes(char))
//         .length;
// }

// function vowels(str) {
//     'use strict';
//     const aeiou = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (const char of str.toLowerCase()) {
//         aeiou.includes(char) && count++;
//     }

//     return count;
// }

module.exports = vowels;
