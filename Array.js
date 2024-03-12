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
