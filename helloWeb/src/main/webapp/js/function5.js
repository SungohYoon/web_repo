// function5.js
let sum1 = 0;
[10, 20, 30].forEach(function(num) {
	sum1 += num; // consumer: 매개값을 받아서 소진하고, 반환값은 없음.
});
console.log('forEach: ', sum1);
sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary) { // acc(누적값), item(배열에 들어있는 요소값)
	//console.log(acc, item, idx);
	return acc + item; // function : 매개값을 소진해서 반환값을 생성.
}, 0);
console.log('reduce: ', sum1);

function sum(a = 0, b = 0, ...args) { // parameters.
	console.log(args);
	let result = 0;
	result = a + b;
	args.forEach(function(num) { result += num });
	return result;
	//return a + b + args.reduce((acc, item) => acc + item)  // =>: 에로우 함수(간편하게 함수를 쓸때)
}

console.log(sum(10, 20, 30, 40, 50, 60)); // arguments.

// reduce 연습.
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;
max = numAry.reduce(function(acc, item) {
	if (acc < item) {
		acc = item
		return max;
	}
console.log('최대값: ', max);
});

