// ? 1. Write a JavaScript function to check whether a string is a palindrome or not. A palindrome is a word, phrase, or number that is the same forward
const palindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
};
// ! console.log(palindrome("nan"));

//? 2.Write a JavaScript function to count the number of vowels in a given string. Vowels are the letters a, e, i, o, and u.

// ? using one line
const vowels = (str) => {
  return str.match(/[aeiou]/gi).length;
};
// console.log(vowels('at'))
// * using for loop and for of loop
const vowels2 = (str) => {
  let count = 0;
  let vowel = "aeiou";
  // for (const char of str.toLowerCase()) {
  //     if(vowel.includes(char)){
  //         count ++
  //     }
  for (let char = 0; char < str.length; char++) {
    if (vowel.includes(str[char].toLowerCase())) {
      count++;
    }
  }
  return count;
};

// ! console.log(vowels2("hello"));

// ? 3.Write a JavaScript function to find the longest word in a given string. If there are more than one longest words, return the first one.
const longest = (str) => {
  let newStr = str.split(" ");
  let longWord = "";
  let longest = 0;
  for (const word of newStr) {
    if (word.length > longest) {
      longWord = word;
      longest = word.length;
    }
  }
  return longWord;
};

// ! console.log(longest("hello i am goodeees welcome"));

// ? 4.Write a JavaScript function to reverse the order of words in a given string. For example, “Hello World” should become “World Hello”.

const reverse = (words) => {
  return words.split(" ").reverse().join("");
};
// ! console.log(reverse("i am pritesh"));

// ? 5.Write a JavaScript function to capitalize the first letter of each word in a given string. For example, “hello world” should become “Hello World”.
const capitalize = (str)=>{
    let words = str.split(' ')
    for (let index = 0; index < words.length; index++) {
         words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1)
    }
    let capitalized = words.join(' ')
    return capitalized
}
// console.log(capitalize('hello words i am pritesh patel'))
// * solution 2
const capitalized2 =  (str) =>{
    let words = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return words.join(' ')
}
// ! console.log(capitalized2('hello words i am pritesh patel'))

// ? 6.Write a JavaScript function to convert a string into camel case. Camel case is a style of writing where the first letter of each word is capitalized, except for the first word, and there are no spaces between words. For example, “Hello World” should become “helloWorld”.
const camelCase = (str) => {
  let words = str.split(' ')
  for (let index = 1; index < words.length; index++) {
    words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1)
  }
  ;let camel = words.join('')
  return camel
}

// ! console.log(camelCase('hello guys!')); // 

// ? 7.Write a JavaScript function to convert a string into snake case. Snake case is a style of writing where all letters are lower case, and there are underscores between words. For example, “Hello World” should become “hello_world”.

const snakeCase = (str) =>{
  str = str.toLowerCase()
 let words = str.split(' ')
 let snake = words.join("_")
 return snake
}
// ! console.log(snakeCase('Hello World I Am Good'))

// ? 8.Write a JavaScript function to convert a string into kebab case. Kebab case is a style of writing where all letters are lower case, and there are hyphens between words. For example, “Hello World” should become “hello-world”.

const kebabCase = (str) =>{
  str = str.toLowerCase()
 let words = str.trim().split(' ')
 let kebab = words.join("-")
 return kebab
}
// ! console.log(kebabCase('I am Dixita Patel I am Form Parvasa'))

// ? 9.Write a JavaScript function to check whether a string contains a given substring. A substring is a part of a string. For example, “cat” is a substring of “concatenate”.
const compar = (str, sub) =>{
 return str.indexOf(sub) !== -1;
}  
console.log(compar("next","ex"))

// ? 10.Write a JavaScript function to replace all occurrences of a given character in a string with another character. For example, “Hello World” should become “Hella Warld” if the character “o” is replaced with “a”.

const replace = (str) => {
  let words = str.split('').map((word) => word.replace("a", "o"));
  return words.join('');
}

console.log(replace('Hella Warld!'));
