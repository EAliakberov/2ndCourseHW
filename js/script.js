let btnPlayNumbers = document.getElementById('btn-play-numbers');

let gameNumbers = {
    randNum: 0,
    lastAns: 0,

    askUser(attempts) {
        let hint = '';
        if (!isNaN(this.lastAns)) {
            hint = this.lastAns > this.randNum ? ` Загаданное число МЕНЬШЕ, чем ${this.lastAns}` : ` Загаданное число БОЛЬШЕ, чем ${this.lastAns}`;
        };

        let ans = +prompt(`Попробуйте угдать число (осталось попыток: ${attempts}).\n` + hint + '\nВведите отрицательное число для выхода');
        if (isNaN(ans)) {
            alert('Вы ввели не число');
            return false;
        }
        this.lastAns = ans;
        return ans === this.randNum || ans < 0;
    },

    startGame() {
        this.randNum = Math.floor(Math.random() * 100 + 1);
        this.lastAns = NaN;

        for (let tryNumber = 0; tryNumber < 10; tryNumber++) {
            if (this.askUser(10 - tryNumber)) {
                break;
            }
        }
        alert((this.randNum === this.lastAns ? 'Вы ' : 'Вы не ') + `угадали: загаданное число: ${this.randNum}; ваше число: ${this.lastAns}`);
    }
}



btnPlayNumbers.addEventListener('click', (ev) => {
    gameNumbers.startGame();
})

