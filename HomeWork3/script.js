function createBtn(name, func) {
    let newEl = document.createElement('button');
    newEl.textContent = name;
    newEl.addEventListener('click', func);
    return newEl;
}


function exercise1() {
    let pass = 'ПаРоЛь';
    let input = prompt(`Введите пароль(${pass}):`);
    if (pass == input) {
        alert('Пароль введен верно');
    }
    else {
        alert('Пароль введен неправильно');
    }
}

function exercise2() {
    let c = prompt('Введите больше 0 и меньше 10');

    if (c === null || c === '') {
        alert('Вы ничего не ввели');
        return;
    }

    if (!c && c != 0) {
        alert('Это не число');
        return;
    }

    if (c > 0 && c < 10) {
        alert(`0 < ${c} < 10`);
    }
    else {
        alert(`${c} - не в интервале (0, 10)`);
    }
}

function exercise3() {
    let d = 50;
    let e = 20;
    alert(d > 100 || e > 100 ? 'Неверно' : 'Верно');
}
function exercise4() {
    let a = '2';
    let b = '3';

    alert(+a + +b);

}
function exercise5() {
    let month = +prompt('Введите номер месяца');
    if (!(month > 0 && month < 12)) {
        alert('Ошибка!');
        return;
    }
    switch (month) {
        case 1:
            alert('Зима!');
            break;
        case 2:
            alert('Зима!');
            break;
        case 3:
            alert('Весна!');
            break;
        case 4:
            alert('Весна!');
            break;
        case 5:
            alert('Весна!');
            break;
        case 6:
            alert('Лето!');
            break;
        case 7:
            alert('Лето!');
            break;
        case 8:
            alert('Лето!');
            break;
        case 9:
            alert('Осень!');
            break;
        case 10:
            alert('Осень!');
            break;
        case 11:
            alert('Осень!');
            break;
        case 12:
            alert('Зима!');
            break;

        default: return;
            break;
    }
}

function extra1() {
    let a = +prompt('Пожалуйста, введите любое число');

    if (isNaN(a)) {
        alert('Не число!');
        return;
    }
    if (a % 2 == 1) {
        alert('число нечетное');
    }
    else {
        alert('число четное');
    }
}
function extra2() {
    let clientOS = 1;
    console.log(clientOS ? 'Установите версию приложения для Android по ссылке' : 'Установите версию приложения для iOS по ссылке');
}
function extra3() {
    let clientOS = 0;
    let OS = (clientOS ? 'Android' : 'OS');
    let year = 2017;
    console.log(year >= 2015 ? `Установите версию приложения для ${OS} по ссылке` : `Установите облегченную версию приложения для ${OS} по ссылке`);
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
document.body.appendChild(document.createElement('br'));
document.body.appendChild(createBtn('Доп 1', extra1));
document.body.appendChild(createBtn('Доп 2', extra2));
document.body.appendChild(createBtn('Доп 3', extra3));
document.body.appendChild(createBtn('Доп 4', extra4));
document.body.appendChild(createBtn('Доп 5', extra5));