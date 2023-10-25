// calendar.js
const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
function Calendar() {
  let html = "";
  function makeHead() {
    let head = "";
    head += "<table border=1>";
    head += "<thead>";
    head += "<tr>";
    for (let i = 0; i < dayOfTheWeek.length; i++) {
      head += "<th>" + dayOfTheWeek.length[i] + "</th>";
    }
    head += "</tr>";
    head += "</thead>";
  }

  function makeBody() {
    let body = "";
    body += "<tbody>";
    body += "<tr>";
    for(let i=1; i<=31; i++){
        body += "
    }
    
}
}
