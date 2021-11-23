// var titles = document.getElementsByClassName('title');
//
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
//
// Array.from(titles).forEach(function(item){
//   console.log(item);
// })

const wmf = document.querySelector('#book-list li:nth-child(2).name');
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
//console.log(books);

books = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(books).forEach(function(book){
  book.textContent += ' (book title)';
})

const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...<h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';
//
// const banner = document.querySelector('#page-banner');
//
// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node type is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());
//
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

console.log('the parent node is:', bookList.parentNode);
console.log('the parent element is:', bookList.parentElement.parentElement);

console.log(bookList.children);

// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for everyon else! ';

// var btns = document.querySelectorAll('#book-list .delete');
//
// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click', function(e){
//
//     const li = e.target.parentElement;
//
//     li.parentNode.removeChild(li);
//   });
// });

// const link = document.querySelector('#page-banner a');
//
// link.addEventListener('click', function(e){
//   e.preventDefault();
//   conssole.log('navigation to', e.target.textConent, 'was prevented');
// })


const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  };
});

// add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create element
  const li = document.createElement('li');
  const bookName = document.createElement('span')
  const deleteBtn = document.createElement('span');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);


})
