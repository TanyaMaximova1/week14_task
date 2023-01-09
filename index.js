//задание 1 
// let num1;
// num1 = Number(num1);
// let num2;
// num2 = Number(num2);
// function getDozens(num1) {
//     num1 = Number(prompt("Введите число: "));
//     if (num1 / 10 == 0) {
//         alert('В этом числе делятков нет!')
//     }
//     else {
//         //3.2 - 
//         num2 = (num1 / 10) - (num1 % 10 * 0.1)
//     }
//     alert('Количество десятков в этом числе: ' + num2);
// }
// getDozens();

//задание 2
// let num1;
// let a1;
// let a2;
// let a3;
// let result;
// function getNumber() {
//     num1 = prompt("Введите число: ");
//     a1 = (num1 / 100) - (num1 % 100 * 0.01);
//     console.log(a1);

//     a2 = ((num1 % 100) / 10) - (((num1 % 100) % 10) * 0.1);
//     console.log(a2);

//     a3 = num1 % 10;
//     console.log(a3);
// }
// getNumber();
// function getSum(a1, a2, a3) {
//     return a1 + a2 + a3;
// }
// result = getSum(a1, a2, a3);
// alert(result);

//задание 3
// let class1;
// class1 = Number(class1);
// let class2;
// class2 = Number(class2);
// let class3;
// class3 = Number(class3);
// let numDesks1;
// numDesks1 = Number(numDesks1);
// let numDesks2;
// numDesks2 = Number(numDesks2);
// let numDesks3;
// numDesks3 = Number(numDesks3);
// let result;
// result = Number(result);
// function getNumberStudents() {
//     class1 = Number(prompt("Введите количество учащихся в первом классе: "));
//     class2 = Number(prompt("Введите количество учащихся во втором классе: "));
//     class3 = Number(prompt("Введите количество учащихся в третьем классе: "));

//     if (class1 % 2 == 0) {
//         numDesks1 = class1 / 2;
//     } else { numDesks1 = (class1 + 1) / 2; }
//     alert('Для первого класса нужно ' + numDesks1 + ' парт');

//     if (class2 % 2 == 0) {
//         numDesks2 = class2 / 2;
//     } else { numDesks2 = (class2 + 1) / 2; }
//     alert('Для первого класса нужно ' + numDesks2 + ' парт');

//     if (class3 % 2 == 0) {
//         numDesks3 = class3 / 2;
//     } else { numDesks3 = (class3 + 1) / 2; }
//     alert('Для первого класса нужно ' + numDesks3 + ' парт');
// }
// getNumberStudents();
// function getSum(numDesks1, numDesks2, numDesks3) {
//     return numDesks1 + numDesks2 + numDesks3;
// }
// result = getSum(numDesks1, numDesks2, numDesks3);
// alert('Всего нужно ' + result + ' парт(ы)');

// задание 4
// let rub;
// rub = Number(rub);
// let kop;
// kop = Number(kop);
// let count_pie;
// count_pie = Number(count_pie);
// let result;
// result = Number(result);
// rub = Number(prompt("Введите рубли: "));
// kop = Number(prompt("Введите копейки: "));
// count_pie = Number(prompt("Введите количество пирожков: "));
// function getSum(rub, kop, count_pie) {
//     return count_pie * (rub * 100 + kop);
// }
// result = getSum(rub, kop, count_pie);
// alert('За ' + count_pie + ' пирожков нужно заплатить ' + result / 100 + ' рублей');

//задание 6
let h1;
h1 = Number(h1);
let h2;
h2 = Number(h2);

let m1;
m1 = Number(m1);
let m2;
m2 = Number(m2);

let s1;
s1 = Number(s1);
let s2;
s2 = Number(s2);

let result;
result = Number(result);
function getDay(h1, m1, s1, h2, m2, s2) {
    h1 = Number(prompt("Введите часы первого момента: "));
    if (h1 > 24) {
        alert('Неверный формат времени!')
        h1 = Number(prompt("Введите часы первого момента: "));
    }
    m1 = Number(prompt("Введите минуты первого момента: "));
    if (m1 > 24) {
        alert('Неверный формат времени!')
        m1 = Number(prompt("Введите минуты первого момента: "));
    }
    s1 = Number(prompt("Введите секунды первого момента: "));
    if (s1 > 24) {
        alert('Неверный формат времени!')
        s1 = Number(prompt("Введите секунды первого момента: "));
    }

    h2 = Number(prompt("Введите часы второго момента: "));
    if (h2 > 24) {
        alert('Неверный формат времени!')
        h2 = Number(prompt("Введите часы первого момента: "));
    }
    m2 = Number(prompt("Введите минуты второго момента: "));
    if (m2 > 24) {
        alert('Неверный формат времени!')
        m2 = Number(prompt("Введите минуты первого момента: "));
    }
    s2 = Number(prompt("Введите секунды второго момента: "));
    if (s2 > 24) {
        alert('Неверный формат времени!')
        s2 = Number(prompt("Введите секунды первого момента: "));
    }

    return (h1 * 3600 + m1 * 60 + s1) - (h2 * 3600 + m2 * 60 + s2);
}
result = getDay(h1, m1, s1, h2, m2, s2);
alert('Между этими двумя моментами прошло ' + result + ' секунды');

//задание 7
// let h;
// h = Number(h);
// let a;
// a = Number(a);
// let b;
// b = Number(b);
// let day;
// day = Number(day);
// function getDay(h, a, b) {
//     h = Number(prompt("Введите высоту шеста: "));
//     a = Number(prompt("Введите на столько метров улитка поднялась за день: "));
//     b = Number(prompt("Введите на сколько метров улитка спустилась за ночь: "));

//     return h / (a - b);
// }
// day = getDay(h, a, b);
// alert('До вершины шеста улитка доползет за ' + day + ' дней')

