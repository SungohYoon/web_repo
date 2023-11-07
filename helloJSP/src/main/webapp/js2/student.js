/**
 * js/student.js
 */
import svc from './service.js';
// 페이지 로딩되면서 바로 실행
// 비동기방식코드 => 순차적으로 실행시켜 가독성을 높인다. async, await.
// async 함수 (
// await 처리. (promise객체.)
// await 처리. (promise객체.)	
// await 처리. (promise객체.)		
// )

// 학생목록출력.
/*fetch('../studentList.do')
	.then((resolve) => resolve.json())
	.then((result) => {

		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})

	})

	.catch((err) => console.log('error=>', err));*/
svc.studentList(

	// 성공후 실행함수.
	(result) => {

		console.log(result);

		let tbody = document.querySelector('#list');

		result.forEach(student => {

			tbody.append(makeTr(student));
		})
	},

	// 실패후 실행함수.
	(err) => console.log('error=>', err));

// 등록버튼 이벤트.
document.querySelector('#addBtn').addEventListener('click', addCallback);

// 수정버튼 이벤트. 서블릿(db변경) -> 화면에 출력되는 정보 변경
document.querySelector('#modBtn').addEventListener('click', modifyCallback);

// Callback 함수정의.
function addCallback(e) {

	// 학생아이디 입력값.
	let sid = document.querySelector('input[name = sid]').value;
	let sname = document.querySelector('input[name = name]').value;
	let pass = document.querySelector('input[name = pass]').value;
	let dept = document.querySelector('select[name = sdept]').value;
	let birth = document.querySelector('input[name = birth]').value;

	let param = `sid=${sid}&name=${sname}&pass=${pass}&sdept=${dept}&birth=${birth}`;
	console.log(param)

	// ajax 호출.
	// fetch('../addStudent.do?' + param) => get 방식(url패턴, 값의제한)
	// post방식 (파라매터 표현 X, 값의제한 X, content-type지정.)
	svc.addStudent(

		// optObj =>
		{

			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param

		},

		// successCallback =>
		result => {

			if (result.retCode == 'OK') {

				alert('등록성공');
				makeTr({ studentId: sid, studentName: sname, studentDept: dept, studentBirthday: birth });
				document.querySelector('#list').append(tr);

			} else {

				alert('등록실패');

			}

		},

		// errorCallnack=>
		err => console.log('error: ', err)

	);

	/*fetch('../addStudent.do?', {

		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	})
		.then(resolve => resolve.json())
		.then(result => {

			if (result.retCode == 'OK') {

				alert('등록성공');
				makeTr({ studentId: sid, studentName: sname, studentDept: dept, studentBirthday: birth });
				document.querySelector('#list').append(tr);

			} else {

				alert('등록실패');

			}

		})

		.catch(err => console.log('error: ', err));

} // end of addCallback*/

	function modifyCallback(e) {

		let sid = document.querySelector('.modal-body input[name=sid]').value;
		let sname = document.querySelector('.modal-body input[name=sname]').value;
		let pass = document.querySelector('.modal-body input[name=pass]').value;
		let birth = document.querySelector('.modal-body input[name=birth]').value;

		let param = `sid=${sid}&sname=${sname}&pass=${pass}&birth=${birth}`;

		svc.editStudent(

			// optObj
			{

				method: 'post',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: param

			},

			// sucessCallback
			result => {

				if (result.retCode == 'OK') {

					alert('수정성공');
					let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
					let newTr = makeTr(result.vo);
					let parentEle = document.querySelector('#list');

					parentEle.replaceChild(newTr, targetTr);
					document.getElementById("myModal").style.display = 'none';

				} else {

					alert('수정실패');

				}

			},

			// errorCallnack =>
			err => console.log('error: ', err)
		);
		/*console.log(param);
		fetch('../editStudent.do?',)

			.then(resolve => resolve.json())
			.then(result => {

				if (result.retCode == 'OK') {

					alert('수정성공');
					let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
					let newTr = makeTr(result.vo);
					let parentEle = document.querySelector('#list');

					parentEle.replaceChild(newTr, targetTr);
					document.getElementById("myModal").style.display = 'none';

				} else {

					alert('수정실패');

				}

			})

			.catch(err => console.log('error: ', err));

	} // end of modifyCallback*/



		function makeTr(obj) {

			let showFields = ['studentId', 'studentName', 'studentBirthday']
			let tr = document.createElement('tr');
			//tr.setAttribute('data-sid', obj.studentId);
			tr.addEventListener('dblclick', showModal);

			for (let prop of showFields) {

				let td = document.createElement('td');
				td.innerHTML = obj[prop];
				tr.append(td);

			}

			// 삭제버튼.
			let td = document.createElement('td');
			let btn = document.createElement('button');

			btn.setAttribute('data-sid', obj.studentId);
			btn.innerHTML = '삭제';
			btn.addEventListener('click', function(e) {

				// ajax 호출. -> 서블릿실행.
				svc.removeStudent(
					obj.studentId,
					result => {

						console.log(result);

						if (result.retCode == 'OK') {

							alert('삭제성공');
							tr.remove();

						} else {

							alert('삭제실패');

						}

					},

					err => console.log('error: ', err)

				);
				/*fetch('../delStudent.do?sid=' + obj.studentId)
					.then(resolve => resolve.json())
					.then(result => {

						console.log(result);

						if (result.retCode == 'OK') {

							alert('삭제성공');
							tr.remove();

						} else {

							alert('삭제실패');

						}

					})

					.catch(err => console.log('error: ', err));*/

			})

			td.append(btn);
			tr.append(td);

			return tr;

		}

		// 모달 보여주기.
		function showModal(e) {
			//console.log(e.target.parentElement, this);

			let id = this.children[0].innerHTML;
			//id = this.dataset.sid; // 'data-sid': std1
			//console.log(id);

			// Get the modal
			var modal = document.getElementById("myModal");

			modal.style.display = "block";

			fetch("../getStudent.do?", {
				method: 'post',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: 'id=' + id
			})
				.then(resolve => resolve.json())
				.then(result => {

					modal.querySelector('h2').innerHTML = result.studentName;
					modal.querySelector('input[name=sid]').value = result.studentId;
					modal.querySelector('input[name=pass]').value = result.studentPassword;
					modal.querySelector('input[name=name]').value = result.studentName;
					modal.querySelector('input[name=birth]').value = result.studentBirthday;

				})
				.catch(err => console.log('error: ', err));

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}

			svc.getStudent(
				id,
				modal.style.display = "block",
				result => {

					modal.querySelector('h2').innerHTML = result.studentName;
					modal.querySelector('input[name=sid]').value = result.studentId;
					modal.querySelector('input[name=pass]').value = result.studentPassword;
					modal.querySelector('input[name=name]').value = result.studentName;
					modal.querySelector('input[name=birth]').value = result.studentBirthday;

				},

				err => console.log('error: ', err)
			);
		}
	}
}