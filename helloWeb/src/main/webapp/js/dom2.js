// dom2.js

// #show>table>tbody>(tr>td: ? + td: ? + tr) *4
const fruits = [
    { name: '사과', price: 1000, farmer: '홍길동' },
    { name: '복숭아', price: 1500, farmer: '김민서' },
    { name: '포도', price: 2000, farmer: '박현아' },
    { name: '수박', price: 3000, farmer: '우민혁' },
];

const tb = document.createElement('table');
const tbd = document.createElement('tbody');
tb.setAttribute('border', '1'); // <table border = '1'>

fruits.forEach((fruit) => {
    const tr = document.createElement('tr');
    for (let prop in fruit) {
        const td = document.createElement('td');
        td.innerHTML = fruit[prop];
        tr.appendChild(td);
    }

    tbd.appendChild(tr); // tbody에 tr을 하위요소로 등록.
});

tb.appendChild(tbd); // table에 tbody를 하위요소로 등록.
document.querySelector('#show').appendChild(tb);
