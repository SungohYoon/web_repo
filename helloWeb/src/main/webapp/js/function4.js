// function4.js
// 생성자 함수.. Member
function Member(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `너의 이름은... ${this.name}이고 나이는 ${this.age}입니다.`;
    }
}
// makeTr 함수.
function makeTr(member) {
    let html = '';
    html += '<tr>'
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
    html += '</tr>'
    return html;
}
let str = '';
document.getElementById('saveBtn').onclick = function (e) {
    console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    
    if(!name || !age || !height){
		arert('값을 입력하세요');
		return;
	}else{
		
	}

    const mem = new Member(name, age, height);
    let str = makeTr(mem); // <tr>.....</tr>
    // function Member()..., makeTr(member),

    document.getElementById('list').innerHTML = str;

    // 입력초기화
    document.getElementById('name').value;
    document.getElementById('age').value;
    document.getElementById('height').value;
    document.getElementById('name').focus();
}