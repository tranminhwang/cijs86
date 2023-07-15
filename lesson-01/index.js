// function sum() {
//   // let a = 3;
//   // let b = 4;
//   // console.log(a, b);
// }
// var age;

/*
 * scope
 * var: function, global scope
 * let vs const: block, function, global
 * hoisting: var, function
 * */

// let a = 1;
// let b = 2;

// console.log(a, b);
// sum();

// let age = 23;

// if (true) {
//   age = 23;
// }

// console.log(age);
// for (let i = 0; i < 10; i++) {
//   // do something
// }
// var name; // undefined
// console.log(name);
// name = "CIJS86";
// let age = 23;
// var b;
// console.log(age);
//  b = 1;
// console.log(b);
//  b = 4;
// console.log(b);

// let b = 1;
// b = 4;

// let a;
// console.log(a); // undefined
// const b = 1;
// console.log(b);
// b = 4;
// console.log(b);

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// tao mot function ten la multiplyBy2
// nhan vao mot so n => n * 2

// const num = 2;

// function multiplyBy2(n) {
//   let result = n * 2;
//   return result;
// }

// const output = multiplyBy2(num);
// console.log(output);
// const newOutput = multiplyBy2(10);
// console.log(newOutput);

// function tenSquare() {
//   return 10 * 10;
// }

// console.log(tenSquare());

// function sixSquare() {
//   return 6 * 6;
// }
// console.log(sixSquare());

// function nineSquare() {
//   return 9 * 9;
// }

// function squareNum(num) {
//   return num * num;
// }

// const squareNum = (num) => num * num;

// let tenSquare = squareNum(10);
// let nineSquare = squareNum(9);
// let sixSquare = squareNum(6);

// console.log(tenSquare, nineSquare, sixSquare);

// higher order function, callback function

const nums = [1, 2, 3, 4, 5]; // [2, 4, 6, 8, 10]

// function copyArrayAndMultiplyBy2(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] * 2);
//   }
//   return output;
// }

// function copyArrayAndMultiplyBy5(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] * 5);
//   }
//   return output;
// }

// function copyArrayAndMultiplyBy10(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] * 10);
//   }
//   return output;
// }

// function copyArrayAndAddBy10(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] + 10);
//   }
//   return output;
// }

// let temp = copyArrayAndMultiplyBy2(nums);
// console.log(temp);

// function copyArrayAndManipulate(array, callback) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(callback(array[i]));
//   }
//   return output;
// }

// function multiplyBy2(num) {
//   return num * 2;
// }

// function divideBy2(num) {
//   return num / 2;
// }

// function addBy2(num) {
//   return num + 2;
// }

// let temp = copyArrayAndManipulate(nums, addBy2);
// console.log(temp);

// function sum(a, b, callback) {
//   let tong = a + b;
//   callback(tong);
// }

// function logger(result) {
//   console.log(result);
// }

// function multiplyBy2(result) {
//   console.log(result * 2);
// }

// sum(3, 4, multiplyBy2);

// let str = "hello world";
// let str2 = 'hello world';
// let str3 = `hello world`;

// hello, welcome to "CIJS86"

// function greeting(className) {
//   let str = `hello, welcome to ${className}`;
//   console.log(str);
// }

// greeting("WEB86");

// const animals = ["Dog", "Cat", "Bird", "Fish", "Tiger"];

// // let dog = animals[0];
// // let cat = animals[1];
// // let bird = animals[2];

// let [, cat, , , tiger] = animals;

// console.log(cat, tiger);

// let person = {
//   name: "Nguyen Van A",
//   age: 23,
//   address: "Ha Noi",
// };

// let { name, age } = person;
// console.log(name, age);

// spread, rest

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

// const num3 = [...num1, ...a2];
// const num3 = num1.concat(num2);
// console.log(num2);
// map method, concat
// console.log(num2);
// for (let i = 0; i < num1.length; i++) {
//   num2.push(num1[i]);
// }

// const obj1 = {
//   name: "Nguyen Van A",
//   age: 23,
//   address: "Ha Noi",
// };
// const animal = {
//   name: "Dog",
//   age: 2,
//   color: "black",
// };

// const obj2 = { ...obj1 };
// const obj2 = Object.assign(animal, obj1);
// console.log(obj2);

// const { name, ...restObj } = obj1;

// const arr1 = [1, 2, 3, 4, 5];

// const [, a, ...rest] = arr1;
// console.log(a, rest);

// primitive type, reference type

// primitive type: number, string, boolean, null, undefined, symbol
// reference type: object, array

// let number = 4;
// let bool = true;

// let a = 1;
// let b = 1;
// console.log(a === b);

// let arr1 = [
//   {
//     name: "Nguyen Van A",
//   },
//   {
//     name: "Nguyen Van B",
//     date: new Date(),
//   },
// ];
// console.log("arr1", arr1);
// let arr2 = structuredClone(arr1);

// console.log("arr2", arr2);
// arr2[0].name = "Nguyen Van C";
// console.log("arr2_after", typeof arr2[1].date);
// console.log("arr1_after", arr1);

// arr2.push({
//   name: "Nguyen Van C",
// });

// console.log("arr2", arr2);
// console.log("arr1", arr1);

// const obj1 = {
//   name: "Nguyen Van A",
// };

// const obj2 = {
//   name: "Nguyen Van A",
// }; // obj1 === obj2

// console.log(arr1 === arr2);
// let obj1 = {
//   name: "Nguyen Van A",
// };

// map

function multiplyBy2Func(num) {
  return num * 2;
}

let arr = [1, 2, 3, 4, 5];
// let multiplyBy2 = arr.map((item) => item * 2);

// for (let i = 0; i < arr.length; i++) {
//   multiplyBy2.push(arr[i] * 2);
// }

// console.log(multiplyBy2);

// let evenNum = arr.filter((item) => item % 2 == 0);
// let oldNum = arr.filter((item) => item % 2 != 0);

let evenNum = [];
let oldNum = [];

arr.forEach((item) => {
  if (item % 2 === 0) {
    evenNum.push(item);
  } else {
    oldNum.push(item);
  }
});

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNum.push(arr[i]);
//   }
// }

console.log(evenNum);
