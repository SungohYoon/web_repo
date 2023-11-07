 // object.js
 console.log('object start....');

 let obj1 = {
 	name: 'Hong',
 	age: 20
 }

 // 주소 참조.
 let obj2 = obj1;
 console.log(obj1);
 obj2.age = 22;
 console.log(obj1);

 // 복사
 let obj3 = {
 	...obj1
 }
 obj3.age = 24;
 console.log(obj3);

 // 클래스.
 class Member {
 	constructor(name, age, height) {
 		this.name = name;
 		this.age = age;
 		this.height = height;
 	}
 	setWeight(weight) {
 		this.weight = weight;
 	}
 	getWeight() {
 		return this.weight;
 	}
 	showInfo() {
 		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
 	}
 	// 학생의 정보: 학생번호, 이름, 영어, 수학.
 	makeTr(student = {
 		sno,
 		sname,
 		engScore,
 		mathScore
 	}) {
 		// tr>td*4
 		let html = '';
 		html += '<tr>';
 		html += '<td>' + student.sno + '</td>';
 		html += '<td>' + student.sname + '</td>';
 		html += '<td>' + student.engScore + '</td>';
 		html += '<td>' + student.mathScore + '</td>';
 		html += '</tr>';
 		return html;
 	}

 	makeHtml(studAry = []) {
 		// html 생성 => this.makeTr(std)
 		let table = '<table border="1"><tbody>';
 		let obj = this;
 		console.log('this: ', this);
 		table += studAry.reduce((acc, stud) => acc + this.makeTr(stud), '');
 		table += '</tbody></table>';
 		this.html = table;
 	}
 	showPage(dom) {
 		// innerHTML 속성에 HTML 저장.
 		dom.innerHTML = this.html;

 	}

 }

 const mem1 = new Member('홍길동', 20, 156.7);
 console.log(mem1.showInfo());
 mem1.setWeight(62.5);
 console.log('홍길동의 몸무게는 ', mem1.getWeight(), 'kg입니다.');