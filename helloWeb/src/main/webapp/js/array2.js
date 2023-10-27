// array2.js : MOCK_DATA.json 파일의 데이터 활용.
const json = `
[{"id":1,"first_name":"Free","email":"flisciardelli0@fotki.com"},
{"id":2,"first_name":"Pavel","email":"pschumacher1@buzzfeed.com"},
{"id":3,"first_name":"Janella","email":"jgrannell2@dyndns.org"},
{"id":4,"first_name":"Tilly","email":"tpandie3@mac.com"},
{"id":5,"first_name":"Giulietta","email":"gmerrell4@sakura.ne.jp"},
{"id":6,"first_name":"Martie","email":"mvaudin5@tinypic.com"},
{"id":7,"first_name":"Sheilah","email":"sklimentov6@ft.com"},
{"id":8,"first_name":"Alejandra","email":"ascaddon7@ftc.gov"},
{"id":9,"first_name":"Ebeneser","email":"edibbin8@rediff.com"},
{"id":10,"first_name":"Prudence","email":"pgiddens9@51.la"}]
`; // json => object. JSON.parse() 사용.

let members = JSON.parse(json);
console.log(members);

let delMember = "Giulietta";
// splice 활용.
for (i = 0; i < members.length; i++) {
  if (members[i].first_name == delMember) {
    members.splice(i, 1, { id: members[i].id, first_name: "Sungoh", email: "nsa30003@gmail.com" });
  }
}
// console.log(members); // delMember와 일치하는 이름 삭제 후 배열추가
// let inpVal = prompt("이름과 이메일을 입력하세요 예시) 홍길동, hong@email.com");
// let inpVal2 = inpVal.split(",");
// let inpValName = inpVal2[0];
// let inpValEmail = inpVal2[1].replace(/\s/g, "");
// console.log(inpVal); // 홍길동, hong@email.com
// console.log(inpValName);
// console.log(inpValEmail);

// let nid = members[members.length - 1].id + 1;
// let newMember = { id: nid, first_name: inpValName, email: inpValEmail };
// members.push(newMember);
// console.log(members);

const dupAry = [
  ["라이언", 5],
  ["어피치", 3],
  ["콘", 2],
  ["무지", 4],
];
console.log(dupAry);
console.table(dupAry);
