// string2.js
const words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eos quidem. Placeat perspiciatis quia laudantium impedit pariatur incidunt voluptatibus quod et voluptas molestiae beatae eligendi itaque veritatis doloribus, quis officia.";
// 1. 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔출력.
let wordsReplace = words.replace(/\./g, "").replace(/,/g, "");
const splits = wordsReplace.split(" ");
const filters = splits.filter((splits) => splits.length > 5);
console.log(filters);

// 2. 생년월일 입력 => 남자 OR 여자 구분하는 메소드
function checkGender(ssn) {
  ssn.replace(/\s/g, "").replace(/-/g, "");
  if (ssn.slice(6, 7) == 1) {
  }
  // 000000 0000000, 0000000000000, 000000-0000000
  return "남자" || "여자";
}
// 3. 파일명과 파일의 확장자.
let file = "d:/temp/sample/book.xls"; // 콘솔에 파일이름과 확장자(.xls)를 각각 구해서 넣어
let fileName, fileExt;
