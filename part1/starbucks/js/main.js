const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// when you click search elements, input has been focused
searchEl.addEventListener('click', function() {
  // logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '');
});