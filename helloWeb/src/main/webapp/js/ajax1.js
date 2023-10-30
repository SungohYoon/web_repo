// ajax1.js
// (AJAX) Asynchronous Javascript And XML;
// 비동기 vs 동기
import { table } from "./ajaxModule.js";

// Syschronous(동기방식)
/*let friends = [];
friends.push('홍길동');
friends.push('강길동');
friends.push('최길동');
console.log(friends);*/

// Asynchronous(비동기방식)
//let friendsA

//setTimeout(function() {
//	friendsA.push("홍길동");
//}, 1000);

//setTimeout(function() {
//	friendsA.push("강길동");
//}, 500);

//setTimeout(function() {
//	friendsA.push("최길동");
//}, 2000);
//console.log(friendsA);

let newMember = {
	mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999"
}
// newMember 값을 활용해서 tbody="list" 추가
let xhtp = new XMLHttpRequest();

// XML 실행
xhtp.open('get', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson;

function loadJson() {
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	result.forEach(member => {
		dataAry.push({
			mid: member.mid, pass: member.pass, name: member.name, phone: member.phone
		})
	})
	// 페이지 작성
	result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;
}

function loadXML() {
	console.log(xhtp.responseXML);
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName("record");
	console.log(records);

	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];

	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent, // mid.
			pass: record.children[1].textContent, // mid.
			name: record.children[2].textContent, // mid.
			phone: record.children[3].textContent // mid.
		}

		dataAry.push(obj);
	}
	let result = table.makeTable(titles.dataAry);
	console.log(result);
	let tr = '<tr><td>' + newMember.mid + '</td>'
		+ '<td>' + newMember.pass + '</td>'
		+ '<td>' + newMember.name + '</td>'
		+ '<td>' + newMember.phone + '</td></tr> ';

	document.getElementById('show').innerHTML = result

	document.getElementById('list').innerHTML += tr;
}