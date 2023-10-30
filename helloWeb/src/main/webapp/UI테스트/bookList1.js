// bookList1.js
let xhtp = new XMLHttpRequest();

xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadXML;

function loadXML(){
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName("record");
	let titles = ["도서코드", "도서명", "저자", "출판사", "가격"];
	let dataAry = [];
	
	for (let record of records){
		let obj = {
			code: record.children[0].ariaValueText,
			name: record.children[1].ariaValueText,
			author: record.children[2].ariaValueText,
			publisher: record.children[3].ariaValueText,
			price: record.children[4].ariaValueText,
		}
		
		dataAry.push(obj);
	}
	document.getElementById('show').innerHTML = result;
	document.getElementById('list').innerHTML += tr;
}