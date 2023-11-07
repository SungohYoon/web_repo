// string1.js

let str1 = "Hello"; // 기본데이터타입
let str2 = new String("Hello"); // 객체타입

console.log(typeof str1, typeof str2);
console.log(str1 == str2); // 값만 비교
console.log(str1 === str2); // 값 & 타입 비교.

console.log(str1.toUpperCase());

let result = " 공백 제거 합니다.  ".trim();
console.log(result, " 문자갯수:", result.length);

// trim() => 문자열 앞, 뒤 공백제거
// trimStart(), trimEnd()
// replace(찾을 문자열, 바꿀 문자열), replace(/<찾을 문자열>/g,"바꿀 문자열") => 문자 변환, 치환
// split(), slice(), substring(), substr()
// toString(), indexOf(), lastIndexOf(), charAt(), includes()
// concat(),
result = "Hello, World, Nice, World".replace(",", "."); // 첫번째로 나오는 문자열만 바뀜
console.log(result);

result = "Hello, World, Nice, World".replace(/,/g, "."); // 모든 문자열 바뀜
console.log(result);

result = "Hello, World, Nice, World".replace(/\s/g, "."); // 문자열 뿐만 아니라 표현식을 사용할 수 있음. "\s" 공백
console.log(result);
