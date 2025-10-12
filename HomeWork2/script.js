function addButton(name, funct){
    let btn = document.createElement('button');
    btn.textContent = name;
    btn.addEventListener('click',funct);
    document.body.appendChild(btn);
}

addButton('задача 1', doExercise1);
addButton('задача 2', doExercise2);
addButton('задача 3', doExercise3);
addButton('задача 4', doExercise4);
addButton('задача 5', doExercise5);
addButton('задача 6', doExercise6);
addButton('задача 7', doExercise7);
addButton('задача 8', doExercise8);
addButton('задача 9', doExercise9);
addButton('задача 10', doExercise10);

function doExercise1() {
    let a = 10;
    alert(`a = ${a}`);
    a = 20;
    alert(`теперь а = ${a}`);
}

function doExercise2() {
    let year = 2007;
    alert(`Год выпуска 1-го айфона - ${year}`);
}

function doExercise3() {
    let createrName = 'Брендан';
    alert(`JS создал ${createrName}`);
}

function doExercise4() {
    let a = 10;
    let b = 2;
    alert(`a + b = ${a + b}\na - b = ${a - b}\na * b = ${a * b}\na / b = ${a / b}\n`
    )
}

function doExercise5() {
    let result = 2 ** 5;
    alert(`2 в 5-й степени = ${result}`);
}

function doExercise6() {
    let a = 9;
    let b = 2;
    let result = a % b;;
    alert(`Отсаток от деления 9 на 2 = ${result}`);
}

function doExercise7() {
    let num = 1;
    num += 5;
    num -= 3;
    num *= 7;
    num /= 3;
    num++ ;
    num--;
    alert(num);
}

function doExercise8() {
    let age = +prompt('Сколько Вам лет?:');
    alert(`Так и знал, Вам ${age}`);
}

function doExercise9() {
    let user = {name: 'Петя', age: 13, isAdmin: false};
    
    console.log(user);
    alert('Посмотри в консоль!');
}

function doExercise10() {
    let name = prompt('Как Вас зовут?', 'Жугдэрдэмидийн Гуррагча');
    alert(`Привет, ${name}!`);
}

