// ? 1. **Check if an Input Is an Array:**
//     - Write a JavaScript function that checks whether an input is an array or not.
//     - Example:**JavaScript**

//         ```jsx
//         **console.log(is_array('w3resource')); // false
//           console.log(is_array([1, 2, 4, 0])); // true**
//         ```

//         AI-generated code. Review and use carefully.
const is_array = (arr) => {
  arr = Array.isArray(arr);
  if (arr === false) {
    console.error("its not a array");
    return false;
  } else {
    return true;
  }
};
// ! console.log(is_array("hello"));

// 2. **Clone an Array:**
//     - Create a function that clones an existing array.
//     - Example:**JavaScript**

//         ```jsx
//         **console.log(array_Clone([1, 2, 4, 0])); // [1, 2, 4, 0]
//         console.log(array_Clone([1, 2, [4, 0]])); // [1, 2, [4, 0]]**
//         ```

//         AI-generated code. Review and use carefully. [More info on FAQ](https://www.bing.com/new#faq).

const shallowClone = (arr) => {
  return arr.slice();
};
let originArr = [1, 2, 3, 4, 6, 2];
let deepClone = shallowClone(originArr);
// ! console.log("mainArray:" + shallowClone(originArr));
// ! console.log("cloneArray:" + deepClone);

// 3. **Get the First Elements of an Array:**
//     - Write a function that returns the first ‘n’ elements of an array.
//     - Example:**JavaScript**

//         ```jsx
//         **console.log(first([7, 9, 0, -2])); // 7
//         console.log(firstElement([], 3));
//
//         console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]**
//         ```
const firstElement = (arr, n) => arr.slice(arr, n);

// ! console.log("mainArray:" + firstElement(originArr));
// ! console.log(firstElement([], 3));

// 4. **Get the Last Elements of an Array:**
//     - Create a function that returns the last ‘n’ elements of an array.
//     - Example:**JavaScript**

//         ```jsx
//         **console.log(last([7, 9, 0, -2])); // -2
//         console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]**
//         ```

const lastElement = (arr, n) => arr.slice(arr.length - 1, n);

// ! console.log("mainArray:" + lastElement(originArr));
// ! console.log(lastElement([], 3));

// // 5. **Join Array Elements into a String:**
// - Write a program that joins all elements of an array into a string.
// - Example:**JavaScript**
    
//     ```jsx
    const myColor = ['Red', 'Green', 'White', 'Black'];
//     console.log(myColor.join(',')); // "Red,Green,White,Black"**
//     ```
    
//     ```jsx
//     console.log(myColor.join(',')); // "Red,Green,White,Black"**
//     ```

const joinElement = (arr)=>arr.map(arr=>arr.toLowerCase()).join(',')
console.log(joinElement(myColor))


// 6. **Insert Dashes Between Even Numbers:**
//     - Accept a number as input and insert dashes (-) between each even number.
//     - Example:
        
//         ```jsx
//         **Input: 025468
//         Output: 0-254-6-8**
//         ```
// const dashBetweenEven = (num) => {
//   let arr = num.toString().split('');
//   let result = "";
//   for(let i = 0; i < arr.length ; i++){
//     const digit = parseInt(arr[i]);
//     if(digit % 2 === 0 && parseInt(arr[i+1]) % 2 === 0){
//       result += digit + '-';
//     } else{
//       result += digit;
//     }
//   }
//   return result;
// }
// console.log(dashBetweenEven(4567653));

// 7. **Sort an Array:**
// - Create a program that sorts the items of an array.
// - Example:**JavaScript**
    
//     ```jsx
//     **
//     console.log(arr1.sort((a, b) => a - b)); // -4, -3, 1, 2, 3, 5, 6, 7, 8**
//     ```
const arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const sortArray =(arr)=>{
  return arr.sort()
}
console.log(sortArray(arr))

// 8. **Find the Most Frequent Item in an Array:**
//     - Write a program that identifies the most frequent item in an array.
//     - Example:**JavaScript**
        
//         ```jsx
//         **const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//         console.log(findMostFrequent(arr1)); // 'a' (5 times)**
//         ```
        
        const swapCase = (input)=> input.split('').map((char)=>(char === char.toLowerCase()? char.toUpperCase():char.toLowerCase())).join('')
        console.log(swapCase('The Quick Brown Fox'))