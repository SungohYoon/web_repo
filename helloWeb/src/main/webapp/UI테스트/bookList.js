// bookList.js

const table = {

	makeHead(titleAray = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']) {
		let headTag = "<thead>";
		headTag += "<tr>";
		headTag += "<th><input type='checbox></th>";

		titleAray.forEach(title => {
			headTag += "<th>" + title + "</th>";
		})
		headTag += "</tr>";
		headTag += "</thead>";
		return headTag;
	},

	makeTr(book = {}) {
		let trTag = "<tr>";
		trTag += "<td><input type='checkbox></td>";
		for (let prop in book) {
			trTag += "<td>" + book[prop] + "</td>";
		}

		trTag += "<td><button onclick='this.parentElement.parentElement.remove()'>삭제</button></td>";
		trTag += "</tr>";
		return trTag;
	},

	makeBody(dataAry = []) {
		let bodyTag = "<tbody id='list>";
		dataAry.forEach(item => {
			bodyTag += this.makeTr(item);
		})

		bodyTag += "</tbody>";
		return bodyTag;
	},

	makeTable(titleAray, dataAry) {
		let tableTag = "<table border='1'>";
		tableTag += this.makeHead(titleAray) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	}
}

let xhtp = new XMLHttpRequest();
xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadJson;

function loadJson() {
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result)
	titles = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']
	
	let bt = table.makeTable(titles, result);
	document.getElementById('show').innerHTML = bt;
}

