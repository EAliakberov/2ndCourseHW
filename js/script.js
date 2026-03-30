let btnPlayNumbers = document.getElementById('btn-play-numbers');
let btnPlayCalc = document.getElementById('btn-play-calc');
let btnPlayReverse = document.getElementById('btn-play-reverse');
let btnPlayQuiz = document.getElementById('btn-play-quiz');
let btnPlayRockPaper = document.getElementById('btn-play-rock-paper');
let btnPlayRandom = document.getElementById('btn-play-random');

let gameNumbers = {
    randNum: 0,
    lastAns: 0,

    askUser(attempts) {
        let hint = '';
        if (!isNaN(this.lastAns)) {
            hint = this.lastAns > this.randNum ? ` Загаданное число МЕНЬШЕ, чем ${this.lastAns}` : ` Загаданное число БОЛЬШЕ, чем ${this.lastAns}`;
        };

        let ans = prompt(`Попробуйте угдать число (осталось попыток: ${attempts}).\n` + hint + '\nВведите отрицательное число для выхода');
        if (isNaN(+ans)) {
            alert('Вы ввели не число');
            return false;
        }
        if (ans === null) {
            return true;
        }
        this.lastAns = +ans;
        return this.lastAns === this.randNum || this.lastAns < 0;
    },

    startGame() {
        this.randNum = Math.floor(Math.random() * 100 + 1);
        this.lastAns = NaN;

        for (let attempts = 10; attempts > 0; attempts--) {
            if (this.askUser(attempts)) {
                break;
            }
        }
        if (!isNaN(this.lastAns)) {
            alert((this.randNum === this.lastAns ? 'Вы ' : 'Вы не ') + `угадали: загаданное число: ${this.randNum}; ваше число: ${this.lastAns}`);
        }
    }
}

function playCalc() {
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
        if (isNaN(userAns) || userAns === null) break;
        alert(Math.abs(+userAns - res) < 0.01 ? `Верно, правильный ответ ${res}` : `Неверно, правильный ответ ${res}`);
    }
}

function quiz() {
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

    for (let q of quiz) {
        let answ = prompt(q.question + '\n' + q.options.join('\n'));

        if (!(+answ)) {
            return;
        }
        scores += +answ;
    };


    alert(`Количество правильных ответов: ${scores} из ${quiz.length}`);
}

function reverse() {
    let text = prompt('Введите текст', '');
    if (text) {
        alert(`Исходный текст: ${text}\nПеревернутый текст: ${text.split('').reverse().join('')}`);
    }
}

function rockPaper() {
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



btnPlayNumbers.addEventListener('click', (ev) => {
    gameNumbers.startGame();
})

btnPlayCalc.addEventListener('click', (ev) => {
    playCalc();
})

btnPlayQuiz.addEventListener('click', (ev) => {
    quiz();
})

btnPlayRockPaper.addEventListener('click', (ev) => {
    rockPaper();
})

btnPlayReverse.addEventListener('click', (ev) => {
    reverse();
})



btnPlayRandom.addEventListener('click', (ev) => {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
})

