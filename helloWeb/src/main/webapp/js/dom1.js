// dom1.js

const fruits = ['수박', '사과', '복숭아', '포도'];

// #show>ul>li: 수박 + li: 사과 + li: 복숭아 + li: 포도
// createElement, appendChild, innerHTML 속성.

// let ul = document.createElement('ul');
// document.getElementById('show').appendChild(ul);

// let li1 = document.createElement('li');
// li1.innerHTML = '수박';
// let li2 = document.createElement('li');
// li2.innerHTML = '사과';
// let li3 = document.createElement('li');
// li3.innerHTML = '복숭아';
// let li4 = document.createElement('li');
// li4.innerHTML = '포도';

// document.querySelector('ul').appendChild(li1);
// document.querySelector('ul').appendChild(li2);
// document.querySelector('ul').appendChild(li3);
// document.querySelector('ul').appendChild(li4);

// ul 생성.
const ul = document.createElement('ul');

// li 생성.
fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.innerHTML = fruit;
    ul.appendChild(li);
});
document.getElementById('show').appendChild(ul);
