// ajax2.js
import { table } from './ajaxModule.js';

// onclick 이벤트 등록.  <button onclick="addMember()">
// member = {name:"hong", age:20} member.name
document.getElementById('addBtn').onclick = addMember;

function addMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		// 사용자 입력값: retCode=OK => {vo: mid, pass, name, phone}
		// tr 생성해서 td생성. 화면출력. id="list" 의 innerHTML 속성활용.
		// retCode=NG => alert('처리중 에러')
		let result = JSON.parse(xhtp.responseText);
		if (result.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		} else {
			alert('처리중 에러(회원아이디: ' + result.vo.mid + ')')
		}

	}
}