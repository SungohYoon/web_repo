// array1.js

const arr1 = [];
arr1.push(10);
arr1.push("ten");
arr1.push({ name: "Hong", age: 20 });

arr1.unshift(20);

console.log("크기: ", arr1.length);
// arr1.length = 5; // 배열의 크기 지정.

arr1.pop(); // arr1.shift() => 배열제거.

arr1.splice(0, 2, 50, 60); // 추가, 수정, 삭제.

for (let ary of arr1) {
  console.log(ary);
}
