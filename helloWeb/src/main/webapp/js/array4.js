// array4.js
const json = `
[{"id":1,"first_name":"Free","email":"flisciardelli0@fotki.com"},
{"id":2,"first_name":"Pavel","email":"pschumacher1@buzzfeed.com"},
{"id":8,"first_name":"Alejandra","email":"ascaddon7@ftc.gov"},
{"id":9,"first_name":"Ebeneser","email":"edibbin8@rediff.com"},
{"id":10,"first_name":"Prudence","email":"pgiddens9@51.la"}]
`;

let members = JSON.parse(json);

let result = members.find(function (item, idx, ary) {
  if (item.id > 5) {
    return true;
  }
  return false;
  // return item.id > 5;
});

result = members.filter(function (item, idx, ary) {
  return item.id > 5;
});

result = members.filter((item, idx) => {
  return idx >= 1 && idx < 3; // true 값을 반환.
});

result = members.reduce((acc, item, idx) => {
  if (idx >= 1 && idx < 3) {
    acc.push(item);
  }
  return acc;
}, []);

// 4) some, every => true / false.
result = members.every((member) => {
  console.log(member);
  return member.first_name.length > 5;
});

// *) map : A -> B
result = members.map((member) => {
  let obj = { id: member.id, name: member.first_name, email: member.email, grade: "C" };
  return obj;
});

console.log(result);
