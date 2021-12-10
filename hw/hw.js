// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.createElement('div')
let p = document.createElement('p')
p.innerText = 'lorem ipsum'
div.appendChild(p)
let button = document.createElement('button')
button.innerText = 'save'
div.appendChild(button)
button.onclick = function () {
    p.style.display = 'none'
}
document.body.append(div)


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let text = document.getElementById('text')
text.onclick = function () {
    text.style.display = 'none'
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
document.getElementById('button1').onclick = function () {
  let age =   document.getElementById('age').value;
    if (!age) {
        alert('Ви неввели свого віку');
    } else if (+age < 18) {
        alert('Вибачте вам мало рочків');
    } else {
        alert('Вітаємо на нашому сайті.');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');
titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
}

//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];

let div1 = document.createElement('div');
for (const coment of comments) {

    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');


    h3.innerText = coment.title;
    p.innerHTML = coment.body;
    btn.innerHTML = 'Закрий мене'

    btn.onclick = () => {
        p.classList.add('pHidden');
        // btn.previousElementSibling.classList.add('pHidden');  // 2варінт який звертаєтсья до ПОПЕРЕДНЬОГО елементу перед btn
    }
    div1.append(h3, p, btn);

}
document.body.appendChild(div1)
