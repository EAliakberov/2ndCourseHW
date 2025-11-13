let button1 = document.querySelector('#button1');
let header = document.querySelector('.main-header');
let button2 = document.querySelector('#button2');
let paragraph2 = document.querySelector('.paragraph2');
let button3 = document.querySelector('#button3');
let parCollection = document.querySelectorAll('.description');
let button4 = document.querySelector('#button4');
let parCollection5 = document.querySelectorAll('p.description')
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');


if (button1) {
    button1.addEventListener('click', () => {
        if (header.style.visibility === 'hidden') {
            header.style.visibility = 'visible'
        }
        else {
            header.style.visibility = 'hidden'
        }
    })
} else {
    alert('нет такого элемента')
}

if (button2) {
    button2.addEventListener('click', () => {
        paragraph2.style.color = 'blue';
    })
} else {
    alert('нет такого элемента')
}

if (button3) {
    button3.addEventListener('click', () => {
        header.textContent = 'Привет, мир!';
    })
} else {
    alert('нет такого элемента')
}

if (button4) {
    button4.addEventListener('click', () => {
        parCollection.forEach(element => {
            element.textContent = 'Измененный текст';
        });
    })
} else {
    alert('нет такого элемента')
}

if (button5) {
    button5.addEventListener('click', () => {
        parCollection5.forEach(element => {
            element.textContent = 'Новый текст';
        });
    })
} else {
    alert('нет такого элемента')
}

if (button6) {
    button6.addEventListener('click', () => {
        let newEl = document.createElement('div');
        newEl.textContent = 'Новый элемент';
        document.body.appendChild(newEl);
    })
} else {
    alert('нет такого элемента')
}

if (button7) {
    button7.addEventListener('click', () => {
        let par = document.querySelector('p.description');
        if (par) {
            par.remove();
        }
    })
} else {
    alert('нет такого элемента')
}