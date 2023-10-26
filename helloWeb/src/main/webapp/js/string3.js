// string3.js

let today = new Date(); // Date 내장객체.
today.getFullYear();
today.getMonth();
today.getDate();

// 날짜변경.
today.setFullYear(2022);
today.setMonth(0);
today.setDate(1);
today.setHours(10);

console.log(today.toString());

function dateFormat(today) {
  // yyyy-mm-dd hh24:mm:ss
  return (
    today.getFullYear() +
    "-" +
    "0" +
    (today.getMonth() + 1) +
    "-" +
    "0" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds()
  );
}
console.log(dateFormat(today));
