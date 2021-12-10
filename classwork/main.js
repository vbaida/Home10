// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let  divOne = document.createElement('div')
// document.body.appendChild(divOne)
//
// let divTwo = document.createElement('div')
// document.body.appendChild(divTwo)
//
// let formOne = document.createElement('form')
// formOne.setAttribute('name', 'formOne')
// divOne.appendChild(formOne)
//
// let formTwo = document.createElement('form')
// formTwo.setAttribute('name', 'formTwo')
// divTwo.appendChild(formTwo)
//
// let inputeOne = document.createElement('input')
// inputeOne.setAttribute('name', 'inputeOne')
//
// let inputeTwo = document.createElement('input')
// inputeTwo.setAttribute('name', 'inputeTwo')
// formOne.append(inputeOne,inputeTwo)
//
//
// let inputeThree = document.createElement('input')
// inputeThree.setAttribute('name', 'inputeThree')
//
// let inputeFour = document.createElement('input')
// inputeFour.setAttribute('name', 'inputeFour')
// formTwo.append(inputeThree,inputeFour)
//
// let btn = document.createElement('button')
// btn.style.width = '354px'
// btn.style.height = '40px'
// btn.innerText = 'Натисни на мене'
// document.body.appendChild(btn)
//
// btn.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
// })
// let hr = document.createElement('hr')
// document.body.appendChild(hr)

//
//
//         - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//  (Додатковачастина для завдання)


//СПИСАВ

// let inputOne = document.createElement('input');
// inputOne.setAttribute('type', 'number')
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('type', 'number')
// let inputThree = document.createElement('input');
// inputThree.setAttribute('type', 'text')
// let button = document.createElement('button');
//
// button.innerText = 'Створи таблицю';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
//
// button.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let enterText = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, enterText);
// })






//  - Сворити масив не цензцрних слів.
//      Сворити інпут текстового типу.
//      Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//  кинути алерт з попередженням.
//      Перевірку робити при натисканні на кнопку

let arrs = [
   'мул', 'дурак', 'ідіот'
];

let inputText = document.createElement('input')
inputText.setAttribute('type', 'text')
let btn1 = document.createElement('button')
btn1.style.height = '21px'
btn1.style.width = '200px'
btn1.innerText = 'Введіть слово'

document.body.append(inputText, btn1)

 btn1.onclick = function () {
//
//     let tr = inputText.value
//     for (const arr of arrs) {
//         if (tr === arr) {
//             alert('Обережно');
//             inputText.value = ''
//             return
//         }
//     }
//     if (tr){
//         alert('Молодець')
//         inputText.value = ''
//     }
// }

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


    let tr = inputText.value
    for (const arr of arrs) {
        if (tr.includes(arr)){
            alert('Обережно');
            inputText.value = ''
            return
        }
    }
    if (tr){
        alert('Молодець')
        inputText.value = ''
    }
}
