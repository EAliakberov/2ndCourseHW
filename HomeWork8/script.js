function createBtn(name, func) {
    let newEl = document.createElement('button');
    newEl.textContent = name;
    newEl.addEventListener('click', func);
    return newEl;
}

function exercise1() {
    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
    ];
    let sortPeople = people.sort((a, b) => { return a.age - b.age });
    console.log(sortPeople);
}



function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const newArr = [];
    arr.forEach(element => {
        if (ruleFunction(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}


const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];



function exercise2() {
    console.log(filter([3, -4, 1, 9], isPositive));
    console.log(filter(people, isMale));
}
function exercise3() {
    const timerID = setInterval(() => {
        console.log(new Date);
    }, 3000);
    setTimeout(() => {
        clearInterval(timerID);
        console.log('прошло 30с');
    }, 30000);
}





function exercise4() {
    function delayForSecond(callback) {
        setTimeout(callback, 1000);
    }

    delayForSecond(function () {
        console.log('Привет, Глеб!');
    })
}

function exercise5() {
    // Функция delayForSecond через 1 секунду пишет в консоль 
    // «Прошла одна секунда», а затем вызывает переданный колбэк
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if (cb) { cb(); }
        }, 1000)
    }

    // Функция sayHi выводит в консоль приветствие для указанного имени
    function sayHi(name) {
        console.log('Привет, ${name}!');
    }

    // Код выше менять нельзя

    // Нужно изменить код ниже:

    delayForSecond(sayHi);

}
function exercise6() {
}
function exercise7() {
}
function exercise8() {
}
function exercise9() {
}
function exercise10() {
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
    let names = ["камень", "ножницы", "бумага"];
    let resultNames = ['Проигрыш', 'Ничья', 'Победа'];
    function ask() {
        let answer = +prompt('Введите:\n1. Камень\n2. Ножницы\n3. Бумага\nВведите отрицательное число или нажмите esk для выхода.');
        if (isNaN(answer) || answer > 3) {
            return -1;
        }
        else {
            return answer - 1;
        }
    }

    function play() {
        let answer = ask();
        if (answer < 0) {
            return NaN;
        }
        let answerPC = Math.floor(Math.random() * 3);
        let result = (answerPC + 4 - answer) % 3 - 1;
        alert(`Вы выбрали ${names[answer]}, \nСоперник выбрал ${names[answerPC]},\nрезультат = ${resultNames[result + 1]}`);
        return result;
    }

    for (let i = 0; i < 10; i++) {
        if (isNaN(play())) {
            break;
        }
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
document.body.appendChild(createBtn('Экстра 2', extra2));
