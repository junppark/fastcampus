// // 기명(이름이 있는) 함수
// // 함수 선언!
// function hello() {
//   console.log('hello');
// }

// // 익명(이름이 없는) 함수
// // 함수 표현!
// let world = function() {
//   console.log('world');
// }

// hello();
// world();

// const sangjun = {
//   name: 'sangjun',
//   age: 22,
//   // 메소드(method)
//   getName: function() {
//     return this.name;
//   }
// };

// const hisName = sangjun.getName();
// console.log(hisName); // sangjun
// // or
// console.log(sagnjun.getName()); // sangjun


// DOM API
// let boxEl = document.querySelector('.box');
// console.log(boxEl)
// boxEl.addEventListener('click', function() {
//   console.log('click!');
//   boxEl.classList.add('active');
//   console.log(boxEl.classList.contains('active'));
//   boxEl.classList.remove('active');
//   console.log(boxEl.classList.contains('active'));
// }) 

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index) {
//   boxEl.classList.add(`order-${index+1}`);
//   console.log(boxEl, index);
// });

// const boxEl = document.querySelector('.box');
// console.log(boxEl.textContent);
// boxEl.textContent = 'sangjun';
// console.log(boxEl.textContent)


// Method Chaining
const a = 'hello';
const b = a.split('').reverse().join(''); // method chaining
console.log(a); // hello 
console.log(b); // olleh

// 익명함수(anonymous function)
const hello = function() {
  console.log('hello')
}
const boxEl = document.querySelector('.box')
if (boxEl.classList.contains('active')){
  console.log('contained!')
}
console.log(boxEl.textContent)

boxEl.addEventListener('click', function(){
  console.log('hello')
})

divEls = document.querySelectorAll('div')
divEls.forEach(function(divEl) {
  divEl.classList.add('hello')
})

const b