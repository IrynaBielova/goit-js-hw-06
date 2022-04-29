const list = document.querySelectorAll('li.item');
console.log(`В списке ${list.length} категории.`);
const ul = document.querySelectorAll('#categories>li');
ul.forEach(eL =>{
    console.log(`Категория: ${eL.firstElementChild.textContent},
    Количество элементов: ${eL.lastElementChild.children.length}`);
});