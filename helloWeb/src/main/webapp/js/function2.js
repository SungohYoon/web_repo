// function2.
console.log('function2.js')
// Member member = new Member()
const member = {
    name: "홍길동",
    age: 18,
    height: 178.9,
    showInfo: function(){
        return(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
}

const member1 = {
    name: "김길동",
    age: 19,
    height: 171.9,
    showInfo: function(){
        return(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
}

const member2 = {
    name: "박길동",
    age: 14,
    height: 194.9,
    showInfo: function(){
        return(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
}
const members = [member, member1, member2];
// DOM: Document Object Model
let show = document.getElementById('show');  // table>thead>tr>th ENTER tbody>tr>th
let str = "";
str += '<table border = 1>';
str += '<tbody>';
members.forEach(function(member){
    str += makeTr(member);
})
str += '</tbody>';
str += '</tabel>';

show.innerHTML = str; // table>tbody>(tr>td*4)*3

function makeTr(member = {name, age, height, showInfo}) {
    let html = '';
    html += '<tr>'
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>'
    return html;
}

//console.log(makeTr(member));