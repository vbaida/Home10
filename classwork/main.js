// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let  divOne = document.createElement('div')
document.body.appendChild(divOne)

let divTwo = document.createElement('div')
document.body.appendChild(divTwo)

let formOne = document.createElement('form')
formOne.setAttribute('name', 'formOne')
divOne.appendChild(formOne)

let formTwo = document.createElement('form')
formTwo.setAttribute('name', 'formTwo')
divTwo.appendChild(formTwo)

let inputeOne = document.createElement('input')
inputeOne.setAttribute('name', 'inputeOne')

let inputeTwo = document.createElement('input')
inputeTwo.setAttribute('name', 'inputeTwo')
formOne.append(inputeOne,inputeTwo)


let inputeThree = document.createElement('input')
inputeThree.setAttribute('name', 'inputeThree')

let inputeFour = document.createElement('input')
inputeFour.setAttribute('name', 'inputeFour')
formTwo.append(inputeThree,inputeFour)

let btn = document.createElement('button')
btn.style.width = '354px'
btn.style.height = '40px'
btn.innerText = 'Натисни на мене'
document.body.appendChild(btn)

btn.addEventListener('click', function (){
    console.log(document.forms.formOne.inputeOne.value);
    console.log(document.forms.formOne.inputeTwo.value);
    console.log(document.forms.formTwo.inputeThree.value);
    console.log(document.forms.formTwo.inputeFour.value);
})



// let divOne = document.createElement('div');
// divOne.innerText = 'Контейнер 1';
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let inputeOne = document.createElement('input');
// inputeOne.setAttribute('name', 'inputeOne');
//
// let inputeTwo = document.createElement('input');
// inputeTwo.setAttribute('name', 'inputeTwo');
//
// let inputeThree = document.createElement('input');
// inputeThree.setAttribute('name', 'inputeThree');
//
// let inputeFour = document.createElement('input');
// inputeFour.setAttribute('name', 'inputeFour');
//
// let button = document.createElement('button');
// button.innerText = 'ГОРІШКАМ БОЙ';
//
// document.body.appendChild(button);
//
// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeThree,inputeFour);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
// })



//         - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//  (Додатковачастина для завдання)
//
//
//  - Сворити масив не цензцрних слів.
//      Сворити інпут текстового типу.
//      Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//  кинути алерт з попередженням.
//      Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку



