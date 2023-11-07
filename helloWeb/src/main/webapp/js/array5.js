// array5.js

// 가,나,다 순으로 정렬
const arr1 = ["펭수", "라이언", "어피치", "콘", "무지"];
arr1.sort();
console.log(arr1); // 배열자체를 변경.

const arr2 = [4, 8, 1, 12, 23, 9];
arr2.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
    0;
  }
});
console.log(arr2);

const json = `
[{"id":1,"first_name":"Free","email":"flisciardelli0@fotki.com"},
{"id":2,"first_name":"Pavel","email":"pschumacher1@buzzfeed.com"},
{"id":8,"first_name":"Alejandra","email":"ascaddon7@ftc.gov"},
{"id":9,"first_name":"Ebeneser","email":"edibbin8@rediff.com"},
{"id":10,"first_name":"Prudence","email":"pgiddens9@51.la"}]
`;
let members = JSON.parse(json);
members
  .sort((a, b) => {
    if (a.first_name < b.first_name) {
      return -1;
    } else {
      return 1;
    }
  })
  .reverse();
console.log(members);
