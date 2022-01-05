let btnAdd = document.querySelector('#button-plus');
let btnSubtract = document.querySelector('#button-minus');
let input = document.querySelector('input');
btnAdd.addEventListener('click', () =>{
  input.value = parseInt(input.value) + 1;
});
btnSubtract.addEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});