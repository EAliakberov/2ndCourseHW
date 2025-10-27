function createBtn(name, func) {
    let newEl = document.createElement('button');
    newEl.textContent = name;
    newEl.addEventListener('click', func);
    return newEl;
}

function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimetr() {
    return 2 * Math.PI * this.radius;
}
function createCircle(radius) {
    let circ = {};
    circ.radius = radius;
    circ.getArea = getArea;
    circ.getPerimetr = getPerimetr;
    return circ;
}

function min(a, b) {
    return a < b ? a : b;
}

const isEvenOrOdd = (a) => {
    if (isNaN(a)) {
        alert('Не число');
        return;
    }
    if (a % 1.0) {
        alert("Не целое число");
        return;
    }
    return a % 2 ? 'Нечетное число!' : 'Четное число!';
}

const sqrToConsole = (a) => {
    console.log(`Квадрат ${a} = ${a * a}`);
}

const calculateSqr = (a) => {
    return a * a;
}

const howOldAreYou = () => {
    let age = +prompt('Сколько Вам лет?');
    if (age < 0) {
        alert('Вы ввели неправильное значение!');
    }
    else if (age > 12) {
        alert('Добро пожаловать!');
    }
    else if (age >= 0 && age < 13) {
        alert('Привет, друг!');
    }
    else alert('Это не число!!!');
}

function multiply(fisrt, second) {
    let a = +fisrt;
    let b = +second;

    if (isNaN(a) || isNaN(b)) {
        alert('Одно или несколько значений не являются числом!');
        return null;
    }
    return a * b;
}

function cube(num) {
    let a = +num;

    if (isNaN(a)) {
        return `${num}: Переданный параметр не является числом`;
    }
    return `${a} в кубе равняется  ${a * a * a}`;
}

function exercise1() {
    let a = +prompt('Введите a');
    let b = +prompt('Введите b');
    if (isNaN(a) || isNaN(b)) {
        alert('Ошибка в данных');
    }
    alert(`из ${a} и ${b} меньшее или равное: ${min(a, b)}`);
}

function exercise2() {
    alert(isEvenOrOdd(prompt('Введите целое число')));
}

function exercise3() {
    sqrToConsole(15);
    alert(calculateSqr(20));
}
function exercise4() {
    howOldAreYou();
}
function exercise5() {
    alert(`Функция вернула: ${multiply(prompt('Введите первое число'), prompt('Введите второе число'))}`);
}
function exercise6() {
    let msg = '';
    for (let i = 0; i <= 10; i++) {
        msg += cube(i) + '\n';
    }
    msg += cube(prompt('Введите число'));
    alert(msg);
}
function exercise7() {
    let circle1 = createCircle(12);
    let circle2 = createCircle(2.8);
    console.log(circle1, circle2);
    alert(`Площадь круга радиусом ${circle1.radius} = ${circle1.getArea()} `);
    alert(`Периметр круга радиусом ${circle2.radius} = ${circle2.getPerimetr()} `);
}

function extra1() {
}
function extra2() {
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
document.body.appendChild(document.createElement('br'));
document.body.appendChild(createBtn('Доп 1', extra1));
document.body.appendChild(createBtn('Доп 2', extra2));
document.body.appendChild(createBtn('Доп 3', extra3));
document.body.appendChild(createBtn('Доп 4', extra4));
document.body.appendChild(createBtn('Доп 5', extra5));