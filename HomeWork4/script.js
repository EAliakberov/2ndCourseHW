function createBtn(name, func) {
    let newEl = document.createElement('button');
    newEl.textContent = name;
    newEl.addEventListener('click', func);
    return newEl;
}


function exercise1() {
    for (let i = 0; i < 2; i++) {
        console.log('Привет!');
    }
}
function exercise2() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
function exercise3() {
    for (let i = 7; i <= 22; i++) {
        console.log(i);
    }

}
function exercise4() {
    let obj = {
        "Коля": '200',
        "Вася": '300',
        "Петя": '400',
    };

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
function exercise5() {
    let n = 1000;
    let iterations = 0;
    for (let it = 0; ; it++) {
        iterations = it;
        if (n > 50) {
            n /= 2;
        }
        else {
            break;
        }
    }
    console.log(`n: ${n}; {itarations count}: ${iterations}`);
}

function exercise6() {
    let firstFriday = prompt('Введите номер первой пятницы:');
    for (let i = 1; i <= 31; i++) {
        if (i % 7 == firstFriday) {
            alert(`Сегодня пятница, ${i}-е число`);
        }
    }
}

function extra1() {
    let k = 100;
    let iterations = 0;
    while (k > 0) {
        k -= 7;
        iterations++;
    }
    alert(`Число: ${k}; Количество итераций: ${iterations}`);
}
function extra2() {
    let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let str = '';
    for (let i = 0; i < months.length; i++) {
        str += `${months[i]}: ${i + 1}й месяц` + '\n';
    }
    alert(str);
}
function extra3() {
    let book = { "название": "название", "автор": "автор", "год издания": "год издания", "жанр": "жанр" };
    for (let key in book) {
        console.log(`${key}: ${book[key]}`);
    }
}
function extra4() {
    let array = [123, 345, 345, 237, 72, 347678, 12, 677, 78, 999];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    alert(`минимальное значение: ${min}`);
}
function extra5() {
}

document.body.appendChild(createBtn('Задание 1', exercise1));
document.body.appendChild(createBtn('Задание 2', exercise2));
document.body.appendChild(createBtn('Задание 3', exercise3));
document.body.appendChild(createBtn('Задание 4', exercise4));
document.body.appendChild(createBtn('Задание 5', exercise5));
document.body.appendChild(createBtn('Задание 6', exercise6));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(createBtn('Доп 1', extra1));
document.body.appendChild(createBtn('Доп 2', extra2));
document.body.appendChild(createBtn('Доп 3', extra3));
document.body.appendChild(createBtn('Доп 4', extra4));
document.body.appendChild(createBtn('Доп 5', extra5));