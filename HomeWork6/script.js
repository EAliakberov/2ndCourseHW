function createBtn(name, func) {
    let newEl = document.createElement('button');
    newEl.textContent = name;
    newEl.addEventListener('click', func);
    return newEl;
}

const exercises = [];

function exercise1() {
    const arr = [1, 5, 4, 10, 0, 3];
    for (let el of arr) {
        console.log(el);
        if (el === 10) break;
    }
}
function exercise2() {
    const arr = [1, 5, 4, 10, 0, 3];
    for (let ind in arr) {
        if (arr[ind] === 4) {
            console.log(ind);
            break;
        }
    }
}
function exercise3() {
    let arr = [1, 3, 5, 10, 20];
    console.log(arr.join(' '));
}
function exercise4() {
    let arr2D = [];
    for (let i = 0; i < 3; i++) {
        arr2D[i] = [];
        for (let j = 0; j < 3; j++) {
            arr2D[i][j] = 1;
        }
    }
    console.log(arr2D);
}

function exercise5() {
    let arr = [1, 1, 1];
    let arr2 = [2, 2, 2];
    for (let i of arr2) {
        arr.push(i);
    }
    console.log(arr);
}

function exercise6() {
    let arr = [9, 8, 7, 'a', 6, 5];
    arr.sort();
    arr.pop();
    console.log(arr);
}
function exercise7() {
    const arr = [9, 8, 7, 6, 5];
    alert(arr.includes(+prompt('угадайте число')) ? 'Угадал' : 'Не угадал');
}
function exercise8() {
    const str = 'abcdef';
    console.log(str.split('').reverse().join(''));
}
function exercise9() {
    const arr = [[1, 2, 3], [4, 5, 6]];

    let arr2 = arr.reduce((resArr, el) => {
        let a = resArr;
        el.forEach(elInEl => {
            a.push(elInEl);
        })
        return a;
    }, []);
    console.log(arr2);

    let arr3 = arr.flat();
    console.log(arr3);
}
function exercise10() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 10 + 1));
    }
    console.log('Исходный массив ', array);
    for (let i = 0; i < array.length - 1; i++) {
        console.log(`Сумма ${i}-го и ${i + 1}-го элементов = ${array[i] + array[i + 1]}`);
    }
}
function exercise11() {
    const toSqr = (arr) => {
        return arr.map((el) => el * el);
    }
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 10 + 1));
    }

    console.log(array);
    console.log(toSqr(array));
}

function exercise12() {
    const strArr = ['Пырышки', 'пупырышки', 'котики', 'наркотики'];
    const strsToLenghts = (arr) => {
        return arr.map(el => el.length);
    }
    console.log(strArr);
    console.log(strsToLenghts(strArr));
}
function exercise13() {
    const onlyPositive = (arr) => {
        return arr.filter((el) => el >= 0);
    }
    const onlyNegative = (arr) => {
        return arr.filter((el) => el < 0);
    }
    const numArr = [123, -28, 23, 1, - 414, 147, 527, 34, -3456];
    console.log(onlyNegative(numArr));

}
function exercise14() {
    const array1 = [];
    for (let i = 0; i < 10; i++) {
        array1.push(Math.floor(Math.random() * 11));
    }
    const array2 = array1.filter(el => el % 2 === 0);
    console.log(array1);
    console.log(array2);
}
function exercise15() {
    const array1 = [];
    for (let i = 0; i < 6; i++) {
        array1.push(Math.floor(Math.random() * 10 + 1));
    }
    let sredn = array1.reduce((ac, el) => ac + el) / array1.length;

    console.log(array1);
    console.log(sredn);
}



function extra1() {
    const tasks = [{ sym: '+', funk: (a, b) => a + b },
    { sym: '-', funk: (a, b) => a - b },
    { sym: '*', funk: (a, b) => a * b },
    { sym: '/', funk: (a, b) => a / b }];
    for (let i = 0; i < 20; i++) {
        a = Math.floor(Math.random() * 100 + 1);
        b = Math.floor(Math.random() * 100 + 1);
        let type = Math.floor(Math.random() * 4);
        let res = tasks[type].funk(a, b);
        let userAns = prompt(`Вычислите выражение ${a} ${tasks[type].sym} ${b}.\nДля выхода введите не число`);
        if (isNaN(userAns)) break;
        alert(Math.abs(+userAns - res) < 0.01 ? `Верно, правильный ответ ${res}` : `Неверно, правильный ответ ${res}`);
    }
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
document.body.appendChild(createBtn('Задание 8', exercise8));
document.body.appendChild(createBtn('Задание 9', exercise9));
document.body.appendChild(createBtn('Задание 10', exercise10));
document.body.appendChild(createBtn('Задание 11', exercise11));
document.body.appendChild(createBtn('Задание 12', exercise12));
document.body.appendChild(createBtn('Задание 13', exercise13));
document.body.appendChild(createBtn('Задание 14', exercise14));
document.body.appendChild(createBtn('Задание 15', exercise15));
document.body.appendChild(createBtn('Экстра 1', extra1));
