// calendar.js
const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
let html = "";
function makeHead() {
  let head = "";
  head += "<table border=1>";
  head += "<thead>";
  head += "<tr>";
  for (let i = 0; i < dayOfTheWeek.length; i++) {
    head += "<th>" + dayOfTheWeek[i] + "</th>";
  }
  head += "</tr>";
  head += "</thead>";
  return head;
}

function makeBody() {
  let body = "";
  body += "<tbody>";
  body += "<tr>";
  for (let i = 1; i <= 31; i++) {
    body += "<td>" + i + "</td>";
    if (i % 7 == 1) {
    }
    if (i % 7 == 0) {
      body += "</tr><tr>";
    }
  }
  body += "</tr>";
  body += "</tbody>";
  body += "</table>";
  return body;
}
function makeCalendar() {
  html += makeHead();
  html += makeBody();
  return html;
}
document.getElementById("show").innerHTML = makeCalendar();
