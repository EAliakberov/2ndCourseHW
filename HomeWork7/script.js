function createBtn(name, func) {
    let newEl = document.createElement('button');
    newEl.textContent = name;
    newEl.addEventListener('click', func);
    return newEl;
}


function exercise1() {
    let text = "js";
    alert(text.toUpperCase());
}

function strFilter(arr, str) {
    const newArr = [];
    return arr.filter(arrEl => arrEl.toLowerCase().startsWith(str.toLowerCase()));
}

function exercise2() {
    const arr = ['Тригонометрия', 'тРи ПоЛоСкИ', 'шамота', 'трИкотаж', 'батат', 'Сиеж', 'CJ'];
    let search = 'Три';
    alert(arr.join(', ') + '\n' + strFilter(arr, search).join(', '));
}
function exercise3() {
    const num = 32.58884;
    alert(`Округлим в меньшую сторону: ${Math.floor(num)}`);
    alert(`Округлим в большую сторону: ${Math.ceil(num)}`);
    alert(`Округлим в к ближайшему: ${Math.round(num)}`);
}
function exercise4() {
    const nums = [52, 53, 49, 77, 21, 32];
    console.log(`миниммальное число: ${Math.min(...nums)}`);
    console.log(`максимальное число: ${Math.max(...nums)}`);
}
function exercise5() {
    console.log(Math.ceil(Math.random() * 10));
}
function exercise6() {
    let a = Math.floor(+prompt('Введите целое число'));
    const arr = [];
    for (let i = 0; i < Math.floor(a / 2); i++) {
        arr.push(Math.floor(Math.random() * (a + 1)));
    }
    console.log(arr);
}
function exercise7() {
    let a = Math.floor(+prompt('Введите целое число'));
    let b = Math.floor(+prompt('Введите еще целое число'));
    let num = Math.floor(a + Math.floor(Math.random() * (b - a)));
    console.log(num);
}
function exercise8() {
    console.log(new Date());
}
function exercise9() {
    let currentDate = new Date();
    let newDate = new Date(+currentDate + 73 * 24 * 60 * 60 * 1000);
    console.log(newDate);
}

function dateToRuss(date) {
    (new Date).getDate();
    let months = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    let weekDays = 'понедельник,вторник,среда,четверг,пятница,суббота,воскресенье'.split(',');
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${weekDays[date.getDay()]}\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function exercise10() {
    alert(dateToRuss(new Date));
}
function exercise11() {
}
function exercise12() {
}
function exercise13() {
}
function exercise14() {
}
function exercise15() {
}




function extra1() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let scores = 0;

    let askQuestion = function (q) {
        let answ = prompt(q.question + '\n' + q.options.join('\n'));
        return +(+answ === q.correctAnswer);
    }

    quiz.forEach(element => {
        scores += askQuestion(element);
    });

    alert(`Количество правильных ответов: ${scores} из ${quiz.length}`);
}
function extra2() {
    let text = prompt('Введите текст', 'Образец текста');
    alert(`Исходный текст: ${text}\nПеревернутый текст: ${text.split('').reverse().join('')}`);
}
function extra3() {
}
function extra4() {
}
function extra5() {
}



document.body.appendChild(createBtn('Задание 1', exercise1));
document.body.appendChild(createBtn('Задание 2', exercise2));
document.body.appendChild(createBtn('Задание 3', exercise3));
document.body.appendChild(createBtn('Задание 4', exercise4));
document.body.appendChild(createBtn('Задание 5', exercise5));
document.body.appendChild(createBtn('Задание 6', exercise6));
document.body.appendChild(createBtn('Задание 7', exercise7));
document.body.appendChild(createBtn('Задание 8', exercise8));
document.body.appendChild(createBtn('Задание 9', exercise9));
document.body.appendChild(createBtn('Задание 10', exercise10));
document.body.appendChild(createBtn('Задание 11', exercise11));
document.body.appendChild(createBtn('Задание 12', exercise12));
document.body.appendChild(createBtn('Задание 13', exercise13));
document.body.appendChild(createBtn('Задание 14', exercise14));
document.body.appendChild(createBtn('Задание 15', exercise15));
document.body.appendChild(createBtn('Экстра 1', extra1));
document.body.appendChild(createBtn('Экстра 2', extra2));
