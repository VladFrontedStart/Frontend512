
"use strict";
// let firstName = "Admin";

// console.log(firstName);  /* блочный комментарий */

// let age = 25;
// console.log(age);

// let a_$30 = "Hello";
// console.log(a_$30);

// let a = 5;
// a = 10;
// a = "Hello";
// console.log(a);

// let a = 5; // инициализация
// a = 10;
// console.log(a);


/* undefined - неопредленное значение */


/* let str1 = "Двойные кавычка ";
let str2 = 'Одинарные \nкавычки'; */

// console.log(str1 + " " + str2); // конкатенация -  сложение строк

// let str = "Даннвые для входа: \nВаш логин:\"admin\"";
// console.log(str);

// let str1 = "Новый t\ текст.";
// console.log(str1);
// let a = 5;
// let str = `Обратные ${a} ${a + 2}
// кавычки`;
// console.log(str);


// let firstName = "Sergey";
// // // alert("ПРИВЕТИК, " + firstName);
// alert(`Hello, ${firstName}`);

// let day = 365;
// let zemlya = "Земля";
// let people = "7 млрд.";
// let chetire = "Солнца";


// alert(`Мы живем на планете ${zemlya}, она делает один оборот вокруг ${chetire}, за ${day} дней.Население нашей планеты составляет примерно ${people}, человек. `)


// const WEEK = 7;
// console.log(WEEK);


// let res = confirm("Знаете ли вы HTML?");
// console.log(res);

// if (res) {
//     alert("Пора учить Javascript");
// }
// else {
//     alert("Нужно выучить HTML");
// }

// let a;
// console.log(a, typeof a);


// let res = prompt("Ваше имя");
// alert(`Привет ${res}!`);
// console.log(res);


// let num1 = +prompt('Введите первое число', 5);
// let num2 = +prompt('Введите второе число', 7);
// let num3 = +prompt('Введите третье число', 3);

// let sum = num1 + num2 + num3;

// console.log("Сумма: ", sum);
// console.log("Произведение: ", num1 * num2 * num3);
// console.log("Среднее арифметическое: ", sum / 3);

// console.log("Сумма:", a + b + c);
// console.log("Произведение:", a + b + c);


// console.log("21.84");
// console.log(parseInt("21.84"));
// console.log(Number("21.84"));
// console.log(Number("21.8123456").toFixed(3));


// console.log(+"21.84");

// let a = 23;
// let b = "6";

// console.log(a + b);

// let a = +prompt('Введите число');

// console.log(a ** 2);
// console.log(a ** 3);
// console.log(a ** 4);


// let num = 4321; // 1234
// let one, two, three, four;

// console.log(num);

// one = num % 10;
// console.log(one);
// num = parseInt(num / 10);
// two = num % 10;
// console.log(two);
// num = parseInt(num / 10);
// three = num % 10;
// console.log(three);
// num = parseInt(num / 10);
// four = num % 10;
// console.log(four);

// console.log(one * 1000 + two * 100 + three * 10 + four)

/* let a = 0, b = 0;
let c = ++a;
console.log(a);
console.log(c);
let d = b++;
console.log(b);
console.log(d); */

// let a = 0, b = 0;
// let c = a++ + 2; // с = 0 + 2 a = 1
// let d = ++b + 2; // d = 1 + 2 b = 1

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let a = 5;
// let b = a++ - 3;
// console.log(a);
// console.log(b);


// let a = 5;
// let b = 3;
// let c = a++ * ++b;

// console.log(a);
// console.log(b);
// console.log(c);


// let a = 3;
// let b = ++a - 3; //
// let c = a++ + 2 ++b; //

// console.log(c);

// let a = 3;
// console.log(a + 1);
// console.log(a);

// let a = 3;
// let b = 5 + a-- - 1;
// console.log(a);
// console.log(b);


// a **= 2;
// console.log(a);

// let a = +prompt('Введите 1 число');
// let b = +prompt('Введите 2 число');
// let c = +prompt('Введите 3 число');
// let sum = a + b + c;
// console.log(sum);

// console.log(5 !== 5);

// console.log(+true);
// console.log(+false);




// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// // ch == num ? alert("Угадали") : alert("Не угадали");
// ch == num ? alert("Угадали") : ch < num ?
// alert("Загаданное число больше") : alert("Загаданное число меньше");

// let temp = prompt("Введите температуру");

// let res = temp > 30 ? "Очень жарко"
//     : temp > 20 ? "Тепло"
//         : temp > 10 ? "Прохладно"
//             : temp > 0 ? "Холодно"
//                 : "Очень холодно";

// alert(res);


// if (условие) {
//     истина(true)
// } else {
//     ложь(false)
// }



// let a = 12;
// let b = 0;

// if (b != 0) {
//     let res = a / b;
//     alert("Результат: " + res);
// } else {
//     alert("Делить на \"0\" нельзя")
// }


// let value = prompt("Введите число");

// if (value % 2 == 0)
//     alert("Число четное")
// else
//     alert("Число не четное")


// let a = 32;
// let b = 12;
// if (a > b) {
//     alert(a + ">" + b);
// }
// if (a == b) {
//     alert(a + "==" + b);

// }
// if (a < b) {
//     alert(a + "<" + b);
// }



// let day = prompt("Введите день недели (цифрами):");

// if (day == 1) {
//     alert("День недели -понедельник");
// }

// else if (day == 2) {
//     alert("День недели - вторник")
// }

// else if (day == 3) {
//     alert("День недели среда")
// }
// else if (day == 4) {
//     alert("День недели четверг")
// }
// else if (day == 5) {
//     alert("День недели пятница")
// }
// else if (day == 6) {
//     alert("День недели суббота")
// }
// else if (day == 7) {
//     alert("День недели воскресенье")
// }

// else
//     alert("Такого дня нет")



// let a = "пять" / 2;

// if (a) {
//     console.log("True");

// }

// else {
//     console.log("False");
// }

// console.log(a);


/*
let login = prompt("Введите логин")

if (login) {
    if (login == "admin") {
        let pas = prompt("Введите пароль:");
        if (pas) {
            if (pas == "password") {

                alert("Добро пожаловать");
            } else {
                alert("Пароль неверен");
            }

        } else {
            alert("Вход отменен");
        }

    } else {
        alert("Я вас не знаю");

    }
}
else {
    alert("Вход отменен");
}
 */


// if (5 == 5 && 5 > 2) {
//     console.log("True");

// } else {
//     console.log("False");
// }


// let age = prompt("Введите свой возраст", 40);

// if (age < 18 || age > 69) {
//     alert("Права не давать")
// } else {
//     alert("Вы можете получить права")
// }
// let a = +prompt("Ведите сторону треугольника для проверки:");
// let b = +prompt("Ведите сторону треугольника для проверки:");
// let c = +prompt("Ведите сторону треугольника для проверки:");

// if (a == b && b == c) {
//     alert("равносторонний");
// } else if (a == b || b == c || c == a) {
//     alert("равнобедренный");
// } else {
//     alert("разносторонний");
// }

// let ch = prompt("Введите количество ворон: ", 5);
// if (ch >= 0 && ch <= 9) {
//     if (ch == 1) {
//         alert(`На ветке ${ch} ворона`);
//     } else if (ch == 2 || ch == 3 || ch == 4) {
//         alert(`На ветке ${ch} вороны`);
//     }
//     else {
//         alert(`На ветке ${ch} ворон`);

//     }
// } else {
//     alert("Недопустимое значение");
// }

// let ch = prompt("Введите количество ворон: ", 5);
// if (ch >= 0 && ch <= 9) {
//     if (ch == 1) {
//         alert(`На ветке ${ch} ворона`);
//     } else if (ch == 2 || ch == 3 || ch == 4) {
//         alert(`На ветке ${ch} вороны`);
//     }
//     else {
//         alert(`На ветке ${ch} ворон`);

//     }
// } else {
//     alert("Недопустимое значение");
// }



// switch (условие) {
//     case Значение_1:
//         код;
//         break;
//         default:
//             код;
// }


// let error = 404;

// switch (error) {
//     case 404:
//         console.log("Страницы не существует");
//         break;
//     case 200:
//         console.log("Запрос успешно обработан");
//         break;
//     case 500:
//         console.log("Ошибка сервера");
//         break;
//     default:
//         console.log("Неизвестная ошибка");
// }

// let day = "суббота";

// switch (day) {
//     case "суббота":
//     case "воскресенье":
//         alert("Выходной день");
//         break;
//     case "понедельник":
//     case "вторник":
//     case "среда":
//     case "четверг":
//     case "пятница":
//         alert("Это рабочий день");
//         break;
//     default:
//         alert("Некорректный день");

// }

// let m = +prompt("Введите номер месяца");
// let n;


// switch (m) {
//     case 1: n = "Январь"; break;
//     case 2: n = "Февраль"; break;
//     case 3: n = "Март"; break;
//     default: n = "Неправльный номер месяца";
// }
// alert("Вы ввели: " + n);

// let m = +prompt("Введите номер месяца");
// let n;


// switch (m) {
//     case 1: n = "Зима"; break;
//     case 2: n = "Зима"; break;
//     case 3: n = "Весна"; break;
//     case 4: n = "Весна"; break;
//     case 5: n = "Весна"; break;
//     case 6: n = "Лето"; break;
//     case 7: n = "Лето"; break;
//     case 8: n = "Лето"; break;
//     case 9: n = "Осень"; break;
//     case 10: n = "Осень"; break;
//     case 11: n = "Осень"; break;
//     case 12: n = "Зима"; break;
//     default: n = "Ошибка ввода данных";

//         alert("Месяц относится к времени года: " + n);

// }


// document.writeln("<p>Текст <br>выведен в <b> окно браузера");
// document.writeln("<p><img src='1.jpg' alt='text'></p>");



// Цикл do...while(цикл с постусловием)
// do {
// тело цикла(действие);
// }while(условие);


// Итерация - один шаг цикла

// let i = 0;
// do {
//     document.writeln("Это номер: " + i + "<br>");
//     i = i + 5;
// } while (i <= 25);

// let i = 10;
// do {
//     document.writeln("Это номер: " + i + "<br>");
//     i--;
// } while (i > 0);


// let i = 1;
// do {
//     if (i % 2 == 0) {
//         document.writeln("Это номер: " + i + "<br>");
//     }
//     i++;
// } while (i <= 20);

// let i = +prompt("Введите начало диапазона");
// let b = +prompt("Введите конец диапазона");
// do {
//     if (i % 2 !== 0) {
//         document.writeln("Это номер: " + i + "")
//     }
//     i++;
// } while (i <= b);

// let n = +prompt("Введите начало диапазона");
// let m = +prompt("Введите конец диапазона");
// let i = n;
// let sum = 0;
// do {
//     if (i % 2 !== 0) {
//         // document.writeln(i + "<br>")
//         sum = sum + i;
//     }
//     i++;
// } while (i <= m);
// document.writeln("Сумма нечетных чисел: " + sum + "<br")


// let a = 5;
// if (a > 0 && a < 10) {
//     let b = 6;
//     document.writeln(a);
// }
// document.writeln(b);

// цикл while ()

// let i = 0;
// while (i < 5) {
//     document.writeln("Это номер: " + i + "<br>");
//     i++;
// }
// document.writeln("<br><br>");


// let j = 0;
// do {
//     document.writeln("Это номер: " + j + "<br>");
//     j++;
// } while (j < 5);

// let count = +prompt("Укажите количество звездочк");
// let i = 0;
// while (i < count) {
//     document.writeln("*");
//     i++;
// }



// let a = 1;
// let b = 30;

// while (a <= b) {
//     if (a % 3 != 0) {
//         document.writeln(a + "<br>")
//     }
//     a += 1;
// }

// let start = 5;
// let end = 10;
// let r = 1;

// while (start <= end) {
//     r *= start
//     start++;
// }
// document.writeln(r)

// let n;
// do {
//     n = prompt("Введите целое число: ");
//     document.writeln(n + "<br");

// } while (n != 0);



// let num = +prompt("Введите пятизначное число")
// console.log(num);

// one = num % 10;
// num = parseInt(num / 10);
// two = num % 10;
// num = parseInt(num / 10);
// three = num % 10;
// num = parseInt(num / 10);
// four = num % 10;
// num = parseInt(num / 10);
// five = num % 10;
// console.log(one * two * three * four * five);
// let b = ((one + two + three + four + five) / 5);
// console.log(b);







// let sum = 0;
// let count = -1;
// let n;

// let max = 0;
// do {
//     n = +prompt("Введите число");
//     sum += n;
//     count++;
//     if (max < n) {
//         max = n;
//     }
// } while (n != 0);
// document.writeln("Среднее арифметическое:" + sum / count);
// console.log("sum:", sum);
// console.log("count:", count);
// document.writeln("MAX: " + max);


// let n = +prompt("Введите число");
// let max = n;
// let min = n;
// let sum = n;
// let count = 0;
// while (n != 0) {
//     n = +prompt("Введите число");
//     sum += n;
//     count++;
//     if (max < n && n != 0) {
//         max = n;
//     }
//     if (n < min && n != 0) {
//         min = n;
//     }
// }
// document.writeln("MAX: " + max + "<br>");
// document.writeln("MIN " + min + "<br>");
// console.log("sum:", sum);
// console.log("count", count);
// document.writeln("Среднее арифметическое:" + (sum / count).toFixed(2) + "<br");

// let res = 1;

// do {
//     let n = +prompt("Введите число");

//     if (n < 0) {
//         break;
//     }
//     if (n == 0) {
//         continue;
//     }
//     res *= n;
// } while (true);

// console.log("umnozhenie:", res);

// let i = 0;
// do {
//     if (i == 6) {
//         break;
//     }
//     if (i == 3) {
//         i++;
//         continue;
//     }
//     document.writeln(i + "");
//     i++;
// } while (i < 10);

// let res = 1;
// let num;
// do {
//     num = prompt("Введите число");
//     if (num == 0) {
//         continue;
//     }
//     res *= num;

// } while (num != 0);
// console.log("ПРоизведение:", res);

// for (инициализация_переменной; проверка_условия; изменение_Переменной) {
//     тело цикла;

// }

// for (let i = 1; i < 12; i++) {
//     if (i == 3) {
//         continue;

//     }
//     if (i == 6) {
//         break;
//     }
//     document.writeln(i + "<br>");
// }





// let n = +prompt("n = ");
// let sum = 0;
// let count = 0;
// for (let i = 0; i < n; i++) {
//     let num = +prompt("-> ");
//     document.writeln(num + "<br>");
//     sum += num;
//     if (num != 0) {
//         count++;
//     }
// }
// console.log(sum);
// console.log(count);
// document.writeln("Среднее арифметическое:" + (sum / count).toFixed(2) + "<br");

// let i = 1;
// for (; ;) {
//     if (i == 7) {
//         break;
//     }
//     document.writeln(i + "<br>");
//     i++;
// }

// for (let i = 1; i < 6; i++) {
//     document.writeln(i + "<br>");
// }


// let start = +prompt("Введите начало диапазона");
// let end = +prompt("Введите конец диапазона");
// let sum = 0;
// let res = 1;
// for (let i = start; i < end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     } else {
//         res *= i;
//     }
// }
// document.writeln("Сумма чётных: " + sum + "<br>");
// document.writeln("Произведение нечётных: " + res); "<br>" + "Произведение нечетных чисел последовательности: " + res);


// let ch = 321;
// document.writeln("Исходное число " + ch + "<br>");
// for (let i = 1; ; i *= 10) {
//     let res = parseInt(ch / i);
//     if (res == 0) {
//         break;
//     }
//     document.writeln(res % 10);
// }



// let start = 5;
// let end = 30;
// let sum = 0;
// for (let i = start; i < end; i++) {
//     if (i % 3 == 0) {
//         sum += i;
//     }
// }
// document.writeln("Сумма целых числе кратным 3 " + sum + "<br>");



// let i = 0; // 0
// while (i < 4) { // 0<4
//     document.writeln("+++<br>");
//     let j = 0;
//     while (j < 2) {
//         document.writeln("--<br>");
//         j++;
//     }

//     i++;
// }




// for (let i = 0; i < 4; i++) {
//     document.writeln("+++<br>");
//     for (let j = 0; j < 2; j++) {
//         document.writeln("---<br>");
//     }
// }


// let symbol = prompt("Введите символ: ", "*");
// let tr = prompt("Введите количество строк");
// let td = prompt("Введите количество столбцов");
// document.writeln("<table border='1' width='150'");
// for (let i = 0; i < tr; i++) {
//     document.writeln("<tr>");
//     for (let j = 0; j < td; j++) {
//         document.writeln("<td>" + symbol + "</td>");
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>")



// document.writeln("<table border='1' width='150'");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr>");
//     for (let j = 1; j < 11; j++) {
//         if (j % 2 == 0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>")




// let mas1 = [5];
// console.log(mas1);

// let mas2 = new Array(2, 6, 8);
// console.log(mas2);

// let mas3 = new Array(5);


// let arr = [1, 2, 3, 4, 5, 6];
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");
// arr.length = 3;
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");


// let arr1 = [1, 2, 3, 4, 5, 6];
// document.writeln(arr1 + "<br>");
// document.writeln(arr1[arr1.length - 1] + "<br>");
// console.log(arr1);


// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8];
// for (let i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] + 2 + "<br>");
// }


// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[i] *= -1;
//     }
//     document.writeln(arr[i] + "<br>");
// }

// console.table(arr);


// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         document.writeln(arr[i] + 2 + "<br>");
//         sum += i;
//     }
// }
// document.writeln(sum + "<br");

// let arr = new Array();
// arr[0] = 15;
// arr[1] = 6;
// arr[2] = 9;
// arr[3] = 4;
// arr[6] = 59;
// arr[7] = "Hello";

// console.log(arr);


// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt("Введите " + ++i + " элемент
// а: ");
// }
// document.writeln(arr + "<br>")


// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt("Введите " + (i + 1) + " элемент массива: ");
// }
// document.writeln(arr + "<br>");

// for (let i = arr.length - 1; i >= 0; i--) {
//     document.writeln(arr[i] + "");
// }


// let arr = ['a', 'b', 'c'];
// arr[0] = arr[0] + "!";
// console.log(arr);


// let arr = [1, 2, 3, 4];
// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];

// console.log(arr);




// let n = +prompt("Введите количество элементов в массиве")
// let mas = new Array(n);
// for (let i = 0; i < mas.length; i++) {
//     if (n > 5) {
//         mas[i] = 0;
//     } else {
//         mas[i] = prompt("->");
//     }
// }
// console.log(mas);


// let sum = prompt("Введите число копеек");
// let sum1 = sum % 10;
// if (sum >= 1 && sum <= 99) {
//     if (sum >= 5 && sum <= 20) {
//         alert(`${sum} копеек`);
//     } else if (sum >= 2 && sum <= 4) {
//         alert(`${sum} копейки `);
//     }
//     else if (sum1 === 1) {
//         alert(`${sum} копейка `);
//     }
//     else {
//         alert(`${sum} копеек`);

//     }
// } else {
//     alert("Недопустимое значение");
// }





// 1 ZADANIE НАПИСАТЬ ПРОГРАММУ, ВЫЧИСЛЯЮЩУЮ ПРОИЗВЕДЕНИЕ НЕЧЕТНЫХ ЧИСЕЛ В ДИАПАЗОНЕ ОТ 10 дДО 30


// let n = 10
// let m = 30
// let i = n;
// let sum = 0;
// do {
//     if (i % 2 !== 0) {
//         document.writeln(i + "<br>")
//         sum = sum + i;
//     }
//     i++;
// } while (i <= m);
// document.writeln("Сумма нечетных чисел: " + sum + "<br")




// let sum = 0;
// let count = 0;
// while (true) {
//     let n = +prompt("Введите число (0 для выхода): ");
//     if (n === 0) break;
//     sum += n;
//     count++;
// }
// document.writeln("Среднее арифметическое:" + (sum / count).toFixed(2));

// document.writeln("<table border='1' width='150' align='center'>");
// document.writeln("<tr>");

// for (let i = 0; i < 11; i++) {
//     document.writeln("<th>" + i + "</th>");
// }

// document.writeln("</tr>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     document.writeln("<th>" + i + "</th>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 == j % 2) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }

//     document.writeln("</tr>");
// }
// document.writeln("</table>")




// let n = +prompt("Введите кол-во символов");
// let symbol = prompt("Тип символа");
// let orient = prompt("0 - горизонтальная линия\n 1- вертикальная");

// for (let i = 0; i < n; i++) {
//     if (orient == 0) {
//         document.writeln(symbol);
//     }
//     else if (orient == 1) {

//         document.writeln(symbol + "<br>");
//     } else {
//         document.writeln("Такой ориентиации не существует");
//         break;
//     }
// }


//Дан массив чисел. Выведите все элементы массива, которые больше предыдущего эелемента/


// let n = +prompt("Введите количество элементов массива: ");
// let mas = new Array(n);

// for (let i = 0; i < mas.length; i++) {
//     mas[i] = prompt("->");

// }

// console.log(mas);
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] > mas[i - 1]) {
//         document.writeln(mas[i] + " ");
//     }
// }

// let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];
// let sum = 0;
// let value = 0;
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] % 2) {
//         sum += mas[i];
//     } else {
//         value += 1;
//     }
// }
// document.writeln("Сумма нечетных элементов массива: " + sum + "<br> Количество четных элементов: " + value);


// let n = 10
// let m = 30
// let i = n;
// let sum = 0;
// do {
//     if (i % 2 !== 0) {
//         document.writeln(i + "<br>")
//         sum = sum + i;
//     }
//     i++;
// } while (i <= m);
// document.writeln("Сумма нечетных чисел: " + sum + "<br")

// let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];
// let sum = 0;
// let count = 0;

// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] % 2 == 0) {
//         count++;
//     } else {
//         sum += mas[i];
//     }

// }

// document.writeln("Count: " + count + "<br>");
// document.writeln("Sum: " + sum);

// let arr = [2, 6, 7, "Игорь", true, 1.5];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] + "<br>");
// }


// let mas = [[2, 1, 1], [6, 3, 7], [8, 5, 6]];
// console.log(mas);
// console.table(mas);
// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] + " ");
//     }
//     document.writeln("<br>");
// }


// let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] + "- - -");
//     }
//     document.writeln("<br>");
// }

// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] ** 2 + "- - -");
//     }
//     document.writeln("<br>");
// }

// console.log(mas.length);




// let questions = [["В какой стране производятся все официальные бейсбольные мячи для Главной лиги бейсбола (США)?"], ["В посеве семян Quercus robur что прорастет?"], ["За какое количество миль от Солнца находится Земля (приблизительно)? (миллионы)"], ["Какое растение названо в честь первого посла США в Мексике, который привез его в Америку?"], ["В 1718 году какой знаменитый пират погиб в бою у побережья того места, где сейчас находится Северная Каролина?"]]

// let answers1 = [["1.Коста-Рика\n2.Германия\n3.Нидерланды\n4.Португалия"], ["1.Цветы\n2.Деревья\n3.Зерно\n4.Овощи"], ["1. 9.3\n2. 39\n3. 93\n4. 193"], ["1.Фуксия\n2.Можжевельник\n3.Камелия\n4.Пуансеттия"], ["1.Черная Борода\n2.Калико Джек\n3.Капитан Кидд\n4.Бартоломью Робертс"]
// ]
// let answers = [["Коста-Рика"], ["Деревья"], ["93"], ["Пуансеттия"], ["Черная Борода"]]
// let money = 0
// let cash = 0;
// let sum = 0;
// let lose = false;

// for (let i = 0; i < questions.length; i++) {
//     if (lose) break;
//     let answer = prompt((questions[i]) + "\n" + (answers1[i]));
//     if (answer == answers[i][0]) {

//         money = 10;
//         cash += money;
//         alert("Поздравляем, вы выиграли сумму " + money)
//         if (cash >= 20 && sum < 20) {
//             sum = 20;
//             alert("У вас несгораемая сумма: 20");

//         }
//         if (cash >= 40 && sum < 40) {
//             sum = 40;
//             alert("У вас несгораемая сумма: " + sum);
//         }
//     }
//     else {
//         lose = true;
//         alert("Некорректный ответ")
//         break;
//     }
// }
// if (lose) {
//     if (cash >= 40) {
//         alert("Несгораемая сумма: 40 сохранилась")
//     }
//     else if (cash >= 20) {
//         alert("Несгораеммая сумма сохранилась: 20")

//     } else {
//         alert("Вы уходите без выиграша")
//     }

// }
// if (!lose && cash > 0) {
//     alert("Поздравляю, вы стали миллионером! " + cash)
// }


// let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой",
//     "2x2 будет 8", "Дельфины это рыбы", "Мадона-это настоящее имя певицы",
//     "Первая мировая война началсь 1 сентября 1939 года"
// ];
// let answers = [false, true, false, false, false, false, false, false];
// let sum = 0;
// let res = new Array();

// for (let i = 0; i < questions.length; i++) {
//     let answer = confirm(questions[i]);
//     if (answer == answers[i]) {
//         res[i] = 10;
//         sum += res[i];
//     } else {
//         res[i] = 0;
//     }
// }

// console.log(res);
// console.log(sum);

// document.writeln("<table border='1' width='500'>");
// document.writeln("<tr>");
// document.writeln("<th>Вопрос</th>");
// document.writeln("<th>Баллы</th>")
// document.writeln("</tr>");

// for (let i = 0; i < questions.length; i++) {
//     document.writeln("<tr>");
//     document.writeln("<td>" + questions[i] + "</td>");
//     document.writeln("<td>" + res[i] + "</td>")
// }


// document.writeln("<tr>");
// document.writeln("<th>Итог</th>");
// document.writeln("<th>" + sum + "</th>")
// document.writeln("</tr>");
// document.writeln("</table>")


// let arr = [1, 2, 3, 4, 5];
// let flag = false;
// for (let elem of arr) {
//     if (elem == 3) {
//         flag = true;
//         break;
//     }
// }

// console.log(flag);

// if(flag){
//     console.log("+++");
// } else {
//     console.log("---");
// }


// let arr = [7, 55, 9, 33, 2]
// let max = arr[0];
// let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > max) {
// //         max = arr[i];
// //     }
// // }

// for (let num of arr) {
//     sum += num;

// }
// console.log(sum);

// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое содержимое";


// let text2 = document.getElementById("text_2");
// text2.innerHTML = "Новое <b>содержимое</b>";

// let res = +prompt("Выберите изображение", "1-собака,2- кот, 3-птица, 4-рыба");
// document.writeln("<div id='image'></div>");
// let img = document.getElementById("image");

// switch (res) {
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpg'>";
//         break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break;
//     default:
//         alert("Такого изображения нет");

// }


// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// tag.style.fontWeigth = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";

// tag.id = "test";

// let q = document.getElementsByClassName("two");
// console.log(q);
// q[1].style.color = "red";

// document.querySelector("CSS");
// document.querySelectorAll("CSS");

// // let id = document.querySelectorAll(".two")[1];
// console.log(id);
// id.style.color = "red";

// let el = document.querySelector("h2");
// el.style.color = "red";

// let el2 = document.querySelectorAll("h2")[1];
// el2.style.color = "purple";




// document.writeln("<div id='divSample'></div>")
// let div = document.getElementById("divSample");
// console.log(div);
// div.textContent = `Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на
// стене, на потолке или на полу в помещении или под открытым небом в различных материалах
// (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С
// некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно
// целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных
// величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым
// отверстием), измеренным в миллиметрах`;

// div.style.background = "#f0f";
// div.style.color = "#99ffff";
// div.style.width = "50%";
// div.style.outline = "10px dotted #000";

// div.className = "resetFont";

// let cl = document.querySelector(".resetFont");
// cl.style.fontSize = "12pt";
// cl.style.fontWeight = "bold";
// cl.style.textDecoration = "line-through";




// let m = document.getElementsByClassName("red")[0];
// m.style.color = "orange";

// let el = document.querySelector(".elem");

// console.log(el.closest(".content"));


// // el.style.color = "green";

// let blue = el.closest(".container");
// blue.style.color = "blue";


// let all = document.querySelectorAll(":empty");
// console.log(all);


// МЕТОДЫ МАССИВА

// let js = ["нужно", "учить", "JavaScript"];
// document.writeln(js + "<br>");
// console.log(js);

// let last = js.pop();
// console.log(last); // удаляет последний элемент из массива и возвращает
// //удаленный  элемент, при этом урезает массив
// console.log(js);

// js.push("JavaSciptic");
// console.log(js);

// console.log(js.shift()); // удаляет первый элемент массива и возвращает удаленный элемент
// console.log(js);


// js.unshift("почему", "нужно") // добавляет элемент в начало массива
// console.log(js);


// let massiv = ["апельсин", "банан", "груша"];
// document.writeln(massiv.length);
// massiv.push("яблоко", "ананас");
// massiv.unshift("грейпфрут");
// document.writeln(massiv.length);
// massiv.shift();
// massiv.pop();
// document.writeln(massiv);



// let mas = [];
// let n = prompt("Количество элементов массива:");
// for (let i = 0; i < n; i++) {
//     let x = prompt("Введите число:");
//     mas.push(x);
// }
// for (let i = 0; i < n; i++) {
//     document.writeln(mas[i] + "");
// }


// let masFirst = [1, 2, 3];
// let masSecond = [11, 22, 33];
// let masEnd = [];

// for (let i = 0; i < masFirst.length; i++) {
//     masEnd.push(masFirst[i]);
//     masEnd.push(masSecond[i]);
// }
// document.writeln(masEnd);


// let arr = js.slice(1, 3);
// console.log(arr);

// console.log(js.slice(1)); // срезуает или с чего начинать по индексу

// let range = js.toSpliced(1, 2);
// console.log(range);


// delete js[1]; // удалил значение по заданному индексу
// console.log(js);

// js.splice(1, 1); // splice(старт, количество элементов которую мы хотим удалить)
// console.log(js);

// js.splice(2, 0, "sloznii", "yazik"); // если мы не хотим удалять элементы, а хотим их добавить, то вторым параметром указываем значение "0"
// // и после него  с третьего параметра указываем добавляемые элементы
// console.log(js);

// js.splice(-3, 0, "но", "очень", "интересный"); // работает с отрицательными индексами, отсчет ведется с конца

// console.log(js);


// let mas = [];
// let n;
// do {
//     n = prompt("Введите элемент массива");
//     if (n > 0) {
//         mas.push(n);
//     } else {
//         break;
//     }
// } while (true);

// document.writeln(mas + "<br>")

// let k = prompt("Введите индекс для удаления")
// // delete mas[k];
// if (k >= 0 && k < mas.length) {
//     mas.splice(k, 1);
// } else {
//     alert("Недопустимый индекс")
// }
// document.writeln(mas);


// let index = js.indexOf("учить"); // возвращает первый найденный индек, по которму эелмент
// //может быть найден в массиве или -1 - если элемент не найден
// console.log(index);



// Задача 6. FizzBuzz (Классика)
// Напиши цикл, который выводит числа от 1 до 30. Но:

// Если число делится на 3, вместо числа выведи "Fizz".

// Если число делится на 5, вместо числа выведи "Buzz".

// Если число делится и на 3, и на 5, выведи "FizzBuzz".





// for (let i = 1; i <= 5; i++) {
//     document.writeln(`* "</br>"`)
// }


// let mas = [];
// let n;





// for (let i = 0; i < 10; i++) {   // i = 0; 0 < 10
//     n = +prompt("Введите элемент массива!"); // n = 8
//     mas.push(n);

//     document.writeln(mas[i] + " ");


// }

// let max = mas[0]
// for (let i = 0; i < 10; i++) {   // i = 0; 0 < 10
//     if (max < mas[i]) {  // 44 < 100
//         max = mas[i];   // 44 = 100     max = 100
//     }

// }


// document.writeln("<br>");
// document.writeln("Максимальное значение  ", max);


// let ind = mas.indexOf(max);
// console.log("ind", ind);
// mas.splice(ind, 1);
// mas.unshift(max);

// document.writeln("Массив: " + mas);



// Необходимо найти уникальные элементы массива
// let array = [7, 4, 1, 4, 7, 4, 1, 4, 7, 7, 1, 4];
// let res = [];

// for (let el of array) {
//     if (!res.includes(el)) {
//         res.push(el);
//     }
// }

// for (let el of res) {
//     document.writeln(el + "");
// }


// let str = js.join("");
// console.log(str);


//Запрос ФИО(массив)=> ФИО (строка с пробелами между словами)

// let st = ["Фамилия", "Имя", "Отчество"]
// let fio = new Array(3);

// for (let i = 0; i < fio.lenth; i++) {
//     fio[i] = prompt("Введите данные:\n " + st[i]);
// }

// alert(fio.join(""));


// let users = ['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann'];

// let modified = users.with(0, "Tomas")

// console.log(users);
// console.log(modified);


// let firstName = prompt("Как вас зовут?");
// let favorite = "";
// console.log(favorite);
// let arr = [];

// while (favorite != null) {
//     favorite = prompt("Введите любимое имя:");
//     arr.push(favorite);
// }


// arr[arr.length - 1] = firstName;
// arr.sort();
// console.log(arr);
// let index = arr.indexOf(firstName);

// for (let i = 0; i < arr.length; i++) {
//     if (i == index) {
//         document.writeln("<span style='color:blue; text-decoration: underline;'>" + arr[i] + "</span>");
//     } else {
//         document.writeln(arr[i] + " ");

//     }
// }


// let n = [1, 5, 15, 2];
// n.sort((a, b) => a - b);
// console.log(n);


//Function Declaration

/* function имя(аргументы) {
Тело функция
}
*/


// function hello(name) {
//     document.writeln("Hello, " + name + "<br>");
// }

// hello("Igor");
// hello("Irima");


// function caption() {
//     for (let i = 1; i <= 6; i++) {
//         document.writeln("<h" + i + ">Заголовок " + i + "</h" + i + ">")
//     }
// }
// caption();


// function test(a, b, c) {
//     // alert(a + b + c);
//     let res = a + b + c;
//     return res;
// }
// let a = 10, b = 20, c = 30;
// let sum = test(a, b, c);


// console.log(sum);

// function test2(n, m) {
//     if (m == 0) {
//         return "Делить на 0 нельзя";
//     }
//     return n / m;
// }

// let a1 = test2(10, 2);
// let a2 = test2(10, 0);

// alert(a1);
// alert(a2);


// function result(n, m) {
//     if (n > m) {
//         return n - m
//     } else {
//         return n + m;
//     }
// }

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// let res = result(a, b);

// alert(res);


// function sum(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     return res;
// }

// document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(sum([1, 2, 5]) + "<br>");

// function max(n, m) {
//     if (n > m) {
//         document.writeln(n)
//     } else if (m > n) {
//         document.writeln(m)
//     } else {
//         document.writeln("Данные числа равны")
//     }
// }

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");


// document.writeln(max);


// function
//     showArrayContent(arrayToShow) {
//     if (arrayToShow.length == 1) {
//         return arrayToShow;
//     } else {
//         let last = arrayToShow.pop()
//         let str = arrayToShow.join(", ")
//         let res = str + " и " + last;
//         return res;
//     }
// }
// // Определяем массивы.
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'летj', 'осень');
// alert(showArrayContent(a));
// alert(showArrayContent(b));
// alert(showArrayContent(c));
// // Выводим содержимое массивов,
// //


/* let fun = function(Аргмуенты){
// тело функции
}

func(параметры);
*/


// function sum1(a, b) {
//     return a + b;
// }

// let sum2 = function (a, b) {
//     return a + b;
// }


// alert(sum1(20, 30))
// alert(sum1(2, 3))
// Дан массив целых чисел. Определить среднее арифметические этих числе

// let average = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return (sum / arr.length).toFixed(2);

// }

// document.writeln(average([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(average([8, 2, 4]) + "<br>");


// let max = function (arr) {
//     let num1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (num1 < arr[i]) {
//             num1 = arr[i];
//         }
//     }
//     return num1;
// }
// document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(max([1, 2, 5]) + "<br>");

//ANONIM FUNCTION

// (function () {
//     alert("Привет мир!")
// })()


//Arrow Function (стрелочная функция)

// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }

// alert(test(10, 20, 30))


// let test2 = (a, b, c) => a + b + c;
// alert(test2(1, 2, 3));

// let hello = () => alert("Hello")

// hello();

// let double = n => n ** 2;

// let arr = [5, 3, 8, 2];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     res[i] = double(arr[i]);
// }

// console.log(res);




// let symbol = (count, a, b) => {
//     for (let i = 0; i < count; i++) {
//         document.writeln(i % 2 ? b : a)
//     }
//     document.writeln("<br>");
// }
// symbol(9, "+", "-");
// symbol(7, "X", "0");

// let change = lst => {
//     let a = lst[lst.length - 1];
//     lst[lst.length - 1] = lst[0];
//     lst[0] = a;
//     return lst;

// }
// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["c", "л", "о", "н"]) + "<br>");



// let change = lst => {
//     let last = lst.pop();
//     let first = lst.shift();
//     lst.push(first)
//     lst.unshift(last)
//     return lst;

// }
// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["c", "л", "о", "н"]) + "<br>");


// let a = 5;
// let b = 7;
// [a, b] = [b, a]
// console.log("a=", a, "b =", b);


// let isGreater = (x, y) => x > y ? true : false;

// document.writeln(isGreater(10, 5))
// document.writeln(isGreater(5, 10))


// let checkPassword = password => {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;


//     for (let ch of password) {
//         console.log(ch);
//         if ("A" <= ch && ch <= "Z") {
//             hasUpper = true;
//         } if ("a" <= ch && ch <= "z") {
//             hasLower = true;

//         } if ("0" <= ch && ch <= "9") {
//             hasNum = true;
//         }
//     }

//     if (password.length >= 8 && hasUpper && hasLower && hasNum) {
//         return true;
//     }
//     return false;
// }
// let psw = prompt("Введите пароль");
// if (checkPassword(psw)) {
//     document.writeln("Это надежный пароль")
// } else {
//     document.writeln("Это ненадежный пароль")
// }


// let factorial = n => {

//     let fact

//     for (let i = 1; i <= n; i++) {
//         sum = sum * i;
//     }
//     return fact;
// }

// document.writeln(factorial(5));

// document.writeln("<div id='divSample'></div>")
// let div = document.getElementById("divSample");
// div.textContent = `Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры
// обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового
// перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как
// правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет
// никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная
// температура. Другим примером термостата, широко используемого в быту, является холодильник.`;

// div.style.background = "yellow";
// div.style.color = "black";
// div.style.width = "256px";
// div.style.height = "256px";
// div.style.overflow = "scroll";
// div.style.outline = "1px dashed red";

// div.className = "resetFont";

// let cl = document.querySelector(".resetFont");
// cl.style.fontSize = "20pt";
// cl.style.fontWeight = "400";
// cl.style.textDecoration = "underline";
// function isOdd(number) {
//     return number % 2; // 0 Или 1
// }

// function isEven(number) {
//     return number % 2 == 0;
// }
// function filter(numbers, fn) {
//     let results = [];
//     for (let number of numbers) {
//         if (fn(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(num, isOdd));
// console.log(filter(num, isEven));






// function filter(numbers, callback) {
//     let results = [];
//     for (let number of numbers) {
//         if (callback(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];
// let oddNumbers = filter(num, function (number) {
//     return number % 2;
// });

// let oddNumbers = filter(num, number => number % 2);

// console.log(oddNumbers);



//forEach() - цикл

// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (n) {
//     document.writeln("Квадрат числа: " + n + " Равен:" + n * n + "<br>")
// });


// numbers.forEach(n => document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>"));


// ["Hello", "World"].forEach((item, index, array) => {
//     alert(`${item} индекс ${index}`)
// });


// let numbers = [1, 2, 4, 7, 3, 5, 6];
// let squares = numbers.map(n => n ** 3);
// console.log(squares);

// let mas = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (number[i] > 0) {
//         mas.push(number[i]);
//     }
// }
// console.log(mas);







// document.writeln("<div id='divSample'></div>")
// let div = document.getElementById("divSample");
// div.textContent = `Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры
// обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового
// перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как
// правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет
// никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная
// температура. Другим примером термостата, широко используемого в быту, является холодильник.`;

// div.style.background = "yellow";
// div.style.color = "black";
// div.style.width = "256px";
// div.style.height = "256px";
// div.style.overflow = "scroll";
// div.style.outline = "1px dashed red";

// div.className = "resetFont";

// let ch = document.querySelector(".resetFont");
// ch.style.fontSize = "20pt";
// ch.style.fontWeight = "400";
// ch.style.textDecoration = "underline";

// let mas = Array(10)
// let max = 0;
// let maxIndex = 0;
// for (let i = 0; i < mas.length; i++) {
//     mas[i] = +prompt("Напишите цифру")
//     if (max < mas[i]) {
//         max = mas[i];
//         maxIndex = i;

//     }
// }
// mas.splice(maxIndex, 1)
// max = mas.unshift(max)
// console.log(mas);


// let arr = new Array(9);
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = +prompt("Введите числа")
//     if (arr[i] % 3 == 0) {
//         arr2[i] = arr[i]
//     }

// }
// console.log(arr2)
// document.writeln(arr2.join(" "));





// function fn(a, b, ...args) {
//     console.log("a = " + a + ", b = " + b + " args= " + args);
// }
// fn(1)
// fn(1, 2, 3, "A", "B", "C");


// function sum(...args) {
//     let total = 0;
//     for (let a of args) {
//         total += a;
//     }
//     return total;
// }



// function sum(...args) { // [10, "Hi", null, undefined, 20]
//     return args
//         .filter(e => typeof e === 'number') // [10,20]
//         .reduce((prev, curr) => prev + curr);
// }

// console.log(sum(10, "Hi", null, undefined, 20, 40))


// let combine = (...arg) => arg.reduce((prev, curr) => prev + " " + curr);
// console.log(combine("Hello", "World", "!"))

// function hello(name) {
//     name = name || "приветик";
//     document.writeln("Привет, " + name + "!<br>")
// }

// hello("приветик");
// hello();


// function fn(a, b = 0) {
//     console.log(a + b);
// }

// fn(1, 2);
// fn(1);


// function rectangle(w, h, fon = "blue") {
//     document.writeln("<div id='shape'></div>");
//     let id = document.getElementById("shape")
//     id.style.width = w + "px";
//     id.style.height = h + "px";
//     id.style.background = fon;

// }

// rectangle(200, 100)

// let j = 2; // глобальная переменная
// function ch() {
//     let j = 3 // локальная переменная
// }

// ch();
// console.log(j);

// function square(num) {
//     return num * num;

// }
// function func(num1, num2) {
//     function square(num) {
//         return num * num;

//     }
//     return square(num1) + square(num2);
// }
// console.log(func(2, 3))
// let num = 5;
// function test(num1, num2) {

//     function func() {
//         console.log(num1 + num2);
//     }
//     func();
// }
// test(5, 2);


// function test(num) {
//     function func(localNum) {
//         console.log(localNum);
//     }
//     func(num + 2);
// }

// test(5);


// function func(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 let array = [num1, num2, num3, num4]
//                 return array;
//             }
//         }
//     }
// }
// console.log(func(1)(2)(3)(4));


// function hello() {
//     console.log("Привет");
// }

// console.log(hello);

// function test() {
//     let num = 5;
//     return function () {
//         console.log(num);
//     }
// }
// let func = test();
// console.log(func);




// function outer(n) {
//     return function (x) {
//         return n + x;
//     }
// }
// let add5 = outer(5);
// console.log(add5(10));


// function test(city) {
//     let num = 0;
//     return function () {
//         num++;
//         console.log(city, num);
//     }

// }

// let func1 = test("Москва");
// func1();
// func1();
// func1();
// let func2 = test("Сочи");
// func2()


// function isBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.filter(isBetween(3, 6)))



// let factorial = n => (n > 0) ? n * factorial(n - 1) : 1;
// document.writeln(factorial(5));


// function toStr(n, base) { //254 / 16=15.875, за счет парсент будет 15
//     let convert = "0123456789ABCDEF";
//     if (n < base) { //254<16
//         return convert[n]; // 'f'

//     } else {
//         return toStr(parseInt(n / base), base) + convert[n % base]; // convert[14] E
//     }
// }

// document.writeln(toStr(245, 10));


// НОВАЯ ТЕМА СОБЫТИЯ

// function loadStr() {
//     alert("Старница была загружена")
// }
// let m = document.getElementById("mes");
// function over() {
//     m.style.color = "red";
// }

// function out() {
//     m.style.color = "yellow";
// }

// function change() {
//     let id = document.querySelector("h2");
//     id.style.color = "blue";
// }

// function randomBg() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = `rgb(${r},${g},${b})`;
// }

// let newImg = document.getElementById("newImg");
// function on() {
//     newImg.src = "night.png"
// }
// function off() {
//     newImg.src = "day.png";
// }
// but.onclick = function () {
//     alert("Спасибо");
// }

// let hex = "0123456789ABCDEF".split("")
// console.log(hex)

// let button = document.getElementById("btn");
// let color = document.querySelector(".color");

// button.onclick = function () {
//     let hexColor = generateHex();
//     console.log(hexColor);
//     color.textContent = hexColor;
//     document.body.style.background = hexColor;
// }

// function generateHex() {
//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()]
//     }
//     return hexColor;
// }

// function getRandomNumber() {
//     return Math.floor(Math.random() * hex.length);
// }


// let newImg = document.getElementById("newImg");
// function on() {
//     newImg.src = "night.png"
// }
// function off() {
//     newImg.src = "day.png";
// }
// but.onclick = function () {
//     alert("Спасибо");
// }



// let m = document.getElementById("test");
// function f1() {
//     m.style.display = "block";
// }

// function f2() {
//     m.style.display = "none";
// }

// const alertHello = () => alert("Привет, друг!");


// alertHello();



// // Павел Тарасов
// console.log(fullName('Павел', 'ТАРАСОВ'));
// // Павел Тарасов
// console.log(fullName('павеЛ', 'тАРаСоВ'));

// function fullName(first, last) {
//     return (
//         first[0].toLocaleUpperCase() + first.slice(1).toLocaleLowerCase() +
//         " " +
//         last[0].toLocaleUpperCase() + last.slice(1).toLocaleLowerCase()
//     )
// }

// fullName('павеЛ', 'ТаРаСов')


// function fullName(first, last) {
//     console.log(first.at(0).toLocaleUpperCase() +
//         first.slice(1).toLocaleLowerCase() + " " + last.at(0).toLocaleUpperCase() +
//         last.slice(1).toLocaleLowerCase());
// }
// console.log(fullName("пАвЕл", "ТаРАсОВ"))

// const sumArrow = (a, b) => a - b
// console.log(sumArrow(4, 6))


// /**
//  * Функция склонения слова для числительного.
//  * @param {number} count - Числительное.
//  * @param {string} one - Вариант слова для цифры один (например: 1 "яблоко").
//  * @param {string} two - Вариант слова для цифры два (например: 2 "яблока").
//  * @param {string} five - Вариант слова для цифры пять (например: 5 "яблок").
//  * @returns {string} Склоненное слово в зависимости от числительного.
//  */
// function declinationOfNumber(count, one, two, five) {
//     const lastDigit = count % 10;
//     const lastTwoDigits = count % 100;
//     if (lastTwoDigits >= 5 && lastTwoDigits <= 20) {
//         return five;
//     }
//     if (lastDigit > 1 && lastDigit < 5) {
//         return two;
//     }
//     if (lastDigit == 1) {
//         return one;
//     }
//     return five;
// }
// // Ниже написан код, для проверки работоспособности функции.

// {
//     const count = 1;
//     const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
//     // Должна получиться строка: Вам пришло 1 сообщение
//     console.log(`Вам пришло ${count} ${word}.`);
// }

// {
//     const count = 11;
//     const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
//     // Должна получиться строка: Вам пришло 11 сообщений
//     console.log(`Вам пришло ${count} ${word}.`);
// }

// {
//     const count = 21;
//     const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
//     // Должна получиться строка: Вам пришло 21 сообщение
//     console.log(`Вам пришло ${count} ${word}.`);
// }

// {
//     const count = 33;
//     const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
//     // Должна получиться строка: Вам пришло 33 сообщения
//     console.log(`Вам пришло ${count} ${word}.`);
// }

// {
//     const count = 45;
//     const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
//     // Должна получиться строка: Вам пришло 45 сообщений
//     console.log(`Вам пришло ${count} ${word}.`);
// }

// {
//     const count = 113;
//     const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
//     // Должна получиться строка: Вам пришло 113 сообщений
//     console.log(`Вам пришло ${count} ${word}.`);
// }

// const userNames = [
//     ["Mr.White", "lalala"],
//     22,
//     "Jesse Pinkman",
//     "Skyler",
//     function fun() { },
// ];
// console.log(userNames);


// const userNames = ['Павел', 'Андрей', 'Саша'
// ]
// console.log(userNames);

// userNames[2] = 'ПИФ-ПИФ'
// console.log(userNames)


// userNames[userNames.length] = "Анна";
// console.log(userNames);

// У вас в коде уже есть переменная arr, которая содержит массив.
// Необходимо вывести предпоследнее значение из массива переменной arr, если оно есть.
// Если такого значения в массиве нет, то нужно вывести null.

// let arr = ['Первый элемент',
//     'Второй элемент',
//     'Третий элемент'
// ]

// arr.push('50', '15', '19', '20', '21');
// console.log(arr)

// let removedElement = arr.splice(1, 1)
// arr.push(removedElement[0])
// console.log(arr)
// for (let i = arr.length; i > 5; i--) {
//     arr.pop();

// }
// console.log(arr)






// let i = 0;
// do {
//     console.log(`Привет ${i + 1}`);
//     i++
// } while (i < 3)

// function startRocketCountdown(initialCount) {
//     while (initialCount) {
//         console.log(`Отсчет ${initialCount}`)
//         initialCount -= 1;
//     }
// }
// console.log("Старт!");
// for (let i = 0; i < 3; i++) {
//     console.log(`Привет ${i}`);
// }


// В коде у вас есть два массива arr1 и arr2, содержащие значения типа number.

// Необходимо вывести в консоль true,
// если массивы содержат одинаковое количество значений, эти значения на одних и тех же местах и равны друг другу, иначе необходимо вывести false.


// УРОК JAVASCRIPT

// setInerval(функция, интервал);

// setInterval(setColor, 1000);
// function setColor() {
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
// }

// document.writeln("<input type='button' value='Start/Stop'>")
// document.querySelector("input").addEventListener("click", st);

// function setColor() {
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";

// }

// let act, run;
// function st() {
//     if (!run) {
//         act = setInterval(setColor, 1000);
//         // run = true;
//     } else {
//         clearInterval(act);
//         // run = false;
//     }
//     run = !run
// }





// document.writeln("<input type='button' value='Start'>")
// document.writeln("<input type='button' value='Stop'>")
// document.querySelector("input").addEventListener("click", st);
// document.querySelectorAll("input")[1].addEventListener("click", st2);

// function setColor() {
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";

// }

// let act;
// function st() {
//     act = setInterval(setColor, 1000);
//     console.log(act);
// }

// function st2() {
//     clearInterval(act);
// }

// document.writeln("<div id='text'>Время</div>")

// window.addEventListener("load", () => setInterval(time, 1000))

// function time() {
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if (min < 10) {
//         min = "0" + min;
//     }
//     if (sec < 10) {
//         min = "0" + min;
//     }
//     if (hour < 10) {
//         min = "0" + min;
//     }
//     let t = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = t;
// }

// СЕКУНДОМЕР

// document.writeln(`
//     <input type="text" id="timer" value="0.0" sieze="4">
//     <input type="button" value="Start/Stop">
//     <input type="button" value="Clear">
//     `);

// document.querySelector("input[value='Start/Stop']").addEventListener
//     ("click", startTimer);
// document.querySelector("input[value='Clear']").addEventListener("click",
//     resetTimer);


// let act, run;
// function startTimer() {
//     if (!run) {
//         act = setInterval(incTimer, 100);
//         // run = true;
//     } else {
//         clearInterval(act);
//         // run = false;
//     }
//     run = !run
// }

// let tsec = 0;
// function incTimer() {
//     tsec++;
//     let t = tsec / 10.0
//     if (tsec % 10 == 0) {
//         t += ".0"
//     }
//     document.getElementById("timer").value = t;
// }

// function resetTimer() {
//     document.getElementById("timer").value = "0.0";
//     tsec = 0;
// }

// let countdownElement = document.querySelector(".countdown");
// let items = document.querySelectorAll(".countdown-item > h4");

// let countdownDate = new Date(2026, 0, 20, 10, 0, 0).getTime();


// function getCountTime() {
//     let now = new Date().getTime();
//     let distance = countdownDate - now;
//     console.log(distance);
//     let oneDay = 24 * 60 * 60 * 1000;
//     let oneHour = 60 * 60 * 1000;
//     let oneMinute = 60 * 1000;

//     let days = Math.floor(distance / oneDay);
//     let hours = Math.floor(distance % oneDay / oneHour)
//     let minutes = Math.floor(distance % oneHour / oneMinute);
//     let seconds = Math.floor(distance % oneMinute / 1000);

//     let values = [days, hours, minutes, seconds];

//     items.forEach(function (item, index) {
//         item.textContent = values[index];
//     })

//     if (distance < 0) {
//         clearInterval(countdown);
//         countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>"
//     }
// }

// let countdown = setInterval(getCountTime, 1000);
// console.log(countdown);

// getCountTime();


// let but = document.querySelector("#cl");
// but.addEventListener("click", myMove);

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 20);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }

// }


// СЛАЙДЕР

//let array = new Array("2.jpg", "3.jpg", "4.jpg");

//document.writeln("<input type='button' value='<' name='left'>");
//document.writeln("<img id='sl' src='" + array[0] + "'>");
//document.writeln("<input type='button' value='>' name='right'>");

//document.getElementsByName("right")[0].addEventListener("click", setRight)
//document.getElementsByName("left")[0].addEventListener("click", setLeft)
//let i = 0;
//let image = document.getElementById("sl");

//function setRight() {
//    i++;
//    if (i == array.length) {
//       i = 0;
// }
//image.src = array[i];

//}

//function setLeft() {
//  i--;
//if (i < 0) {
//  i = array.length - 1;
//}
//image.src = array[i];
//}


// ЭЛЕКТРОННЫЫЕ ЧАСЫ

// let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif",
//     "c7.gif", "c8.gif", "c9.gif"
// ]

// let masImg = document.querySelectorAll("#block img");
// console.log(masImg);
// clock();

// function clock() {
//     let time = new Date();
//     let hours = time.getHours();
//     let min = time.getMinutes();
//     let second = time.getSeconds();
//     console.log(hours, min, second);
//     getImg(hours, min, second);
//     setTimeout(clock, 1000)
// }

// function getImg(h, m, s) {
//     masImg[0].src = imgTime[parseInt(h / 10)];
//     masImg[1].src = imgTime[h % 10];

//     masImg[3].src = imgTime[Math.floor(m / 10)];
//     masImg[4].src = imgTime[m % 10];

//     masImg[6].src = imgTime[Math.floor(s / 10)];
//     masImg[7].src = imgTime[s % 10];
// }


// let title3 = document.querySelector("h3").lastChild.nodeValue;
// console.log(title3)


// let myTitle = document.querySelector("h1").firstChild
// alert(myTitle.nodeType);


// let elem = document.querySelector('#root');

// let tag = document.createElement("p");
// let node = document.createTextNode("Новый текст!!!")

// tag.append(node); // <p> Новый текст!!!</p>

// elem.append(tag);


// elem.before(tag); // добавляет новый элемент до выбранного ID
// elem.after(tag); // добавляет новый элеент после выбранного ID


// elem.replaceWith(tag); // заменяет новым элементом выбранный ID

// let tree = document.querySelector(".tree");
// for (let li of tree.querySelectorAll("li")) {
//     let span = document.createElement("span");
//     li.prepend(span);
//     span.append(span.nextSibling);
// }

// tree.addEventListener("click", function (event) {
//     if (event.target.tagName != "SPAN") {
//         return
//     }
//     let childrenContainer = event.target.parentNode.querySelector("ul");

// })


// while (true) {
//     const input = prompt("Введите целое число");
//     if (input === "" || input === null) {
//         console.log("ошибка")
//         continue;
//     }
//     const num = +input;
//     if (Number.isInteger(num)) {
//         console.log("Спасибо за целое число")

//     }
//     break;
// }


// for (let i = 0; i < 2; i += 1) {
//     console.log(`i = ${i}`);
//     for (let x = 0; x < 2; x++) {
//         console.log(`\tx = ${x}`);
//     }
// }

// const arr = [11, 22, 33, 500, 1000];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(`Под индексом ${i} лежит ${arr[i]}`);
// }

// arrDate = [15, "март", 2026, 19, 30];

// for (idx = 0; idx < arrDate.length; idx++) {
//     console.log(arrDate[idx]);
// }
// 15
// март
// 2026
// 19
// 30



// const formatArray = (arr) => {
//     let stroka = " "
//     for (let i = 0; i < arr.length; i++) {
//         stroka = stroka + `${arr[i]} ->`
//     }
//     console.log(stroka.slice(0, (stroka.length - 4)))
// }

// let arr = [[5, 32, 15, 9], [83, -22, 7], [], [81, 10, 0]]
// let m = 0;

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > 0) {
//             sum += arr[i][j]

//         }



//     }
//     m += sum
//     console.log(sum)
//     console.log(m)

// }
// let x = 10;
// let y = 5;
// let n = x + y;
// console.log(`${n}${n}${n}`)


// let but = document.querySelector("#btn");
// but.addEventListener("click", onChange)

// function onChange() {
//     let ch = document.getElementById("change").value;
//     let on = document.getElementById("on").value;
//     let a = document.getElementById("image" + ch);
//     let b = document.getElementById("image" + on);

//     let temp = a.src;
//     a.src = b.src;
//     b.src = temp;
// }

// let list = document.querySelector("ul");

// let newItem = document.createElement("li");
// newItem.textContent = "новый элемент списка";

// list.append(newItem);




// let i = 1;
// document.querySelector("#func1").addEventListener("click", change);
// document.querySelector("#func2").addEventListener("click", add);

// function change() {
//     let elem = document.querySelector("#list2").lastChild;
//     document.querySelector("#list1").append(elem);
// }
// function add() {
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water" + i;
//     document.querySelector("#list2").append(elem);
//     i++;
// }






// let calendar = document.getElementById("calendar")
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;

// createCalendar(calendar, year, month);
// function createCalendar(elem, year, month) {
//     let curDate = new Date(year, month - 1, 1)
//     let findDate = new Date(year, month, 0);

//     while (curDate.getDay() != 1) {
//         curDate.setDate(curDate.getDate() - 1);
//     }
//     let currentMonth = ["Январь", "Февраль", "Март", "Апрель", "Май",
//         "Июнь", "Июль", "Август", "Сентябрь",
//         "Октябрь", "Ноябрь", "Декабрь"]
//     let current = document.createElement("h2");
//     current.textContent = `${currentMonth[month - 1]} ${year}`;
//     elem.append(current);
//     let table = document.createElement("table");
//     table.innerHTML = `<tr>
//     <th>пн</th>
//     <th>вт</th>
//     <th>ср</th>
//     <th>чт</th>
//     <th>пт</th>
//     <th>сб</th>
//     <th>вс</th>
//     </tr>`;
//     while (curDate <= findDate) {
//         let tr = document.createElement("tr");
//         for (let i = 0; i < 7; i++) {
//             let td = document.createElement("td");
//             if (curDate.getMonth() == month - 1) {
//                 td.textContent = curDate.getDate();
//             }
//             tr.append(td);
//             curDate.setDate(curDate.getDate() + 1);
//         }
//         table.append(tr);

//     }
//     elem.append(table);
// }


// let div = document.querySelector("#root");
// div.insertAdjacentHTML('beforebegin', "<p>До выбранного элемента</p>")
// div.insertAdjacentHTML('afterend', "<p>До выбранного элемента</p>")
// div.insertAdjacentHTML('afterbegin', "<p>Первым внутри выбранного элемента</p>")
// div.insertAdjacentHTML('beforeend', "<p>Последним внутри выбранного элемента</p>")


// let child = document.querySelector('#p1');

// let second = document.querySelector("#p2");

// second.after(child);

// let ul = document.querySelector("ul");
// let li = ul.cloneNode(true);

// li.querySelector("li").innerHTML = "Начало клонируемых элементв"
// ul.after(li);



// let list = document.querySelector(".list");
// list.insertAdjacentHTML("beforebegin", "<h2>Список</h2><hr>")
// let listInner = document.querySelector("h2");
// listInner.insertAdjacentText("beforeend", " планет");
// list.insertAdjacentHTML("afterbegin", "<li>Solnce</li>");
// list.insertAdjacentHTML("afterend", "<hr>")

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";

// hr.insertAdjacentElement("afterend", h4);


// let idRemove = setInterval(function () {
//     let li = document.querySelector("li:first-child");
//     if (li === null) {
//         clearInterval(idRemove);
//         list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>");

//     } else
//         li.remove();
// }, 100);



// let spans = document.querySelectorAll("span");

// for (let i = 0; i < spans.length; i++) {
//     spans[i].addEventListener("click", function () {
//         this.parentNode.remove();
//     })
// }

// let div = document.querySelector("div");
// div.className = "alert";
// let activeDiv = document.querySelector(".active");
// activeDiv.classList.add("hidden");

// activeDiv.classList.toggle("hidden");
// activeDiv.classList.replace("active", "alert");

// let menu = document.querySelector(".menu");
// let child = document.querySelectorAll(".menu li");

// menu.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         for (let item of child) {
//             item.classList.remove("active");

//         }
//         event.target.classList.add("active");
//     }
// })

// let menuElem = document.getElementById("sweeties");
// let titleElem = menuElem.querySelector(".title");

// titleElem.addEventListener("click", function () {
//     menuElem.classList.toggle("open");
// })


// let brush = document.createElement("div");
// brush.classList.add("brush")
// document.body.append(brush);

// brush.hidden = true;

// document.addEventListener("mouseover", function () {
//     console.log("Событие сработало");
//     brush.hidden = false;
// })

// document.addEventListener("mouseout", function () {
//     brush.hidden = true;
// })

// document.addEventListener("mousemove", function (event) {
//     // console.log("сработало1", event.clientX, event.clientY);
//     brush.style.left = `${event.clientX}px`;
//     brush.style.top = `${event.clientY}px`;
//     if (event.buttons === 1) {
//         let paint = document.createElement("div");
//         paint.classList.add("paint");
//         paint.style.left = `${event.clientX}px`;
//         paint.style.top = `${event.clientY}px`;
//         document.body.append(paint);
//     }
// })

// document.addEventListener("mousedown", function () {
//     console.log("Событие СРАБ")
//     brush.style.scale = "0.8";
// })
// document.addEventListener("mouseup", function () {
//     console.log("Событие СРАБ!")
//     brush.style.scale = "1";
// })

// document.body.append(brush);


// let frogImg = document.getElementById("green-frog");

// console.log(frogImg);
// console.log(frogImg.getAttribute("src"));

// frogImg.setAttribute("src", "4.jpg");

// console.log(frogImg.getAttribute("data-frog"));

// console.log(frogIng.dataset.frog);

// let page = 0;
// let lengthPath = 5;
// let pagination = document.querySelector(".pagination");
// let product = document.querySelector(".product-cover");
// let data = new Array(18);

// for (let i = 0; i < data.length; i++) {
//     data[i] = document.createElement("div");
//     data[i].classList.add("card");
//     if (i % 3) {
//         data[i].classList.add("blue");
//     } else {
//         data[i].classList.add("gray")
//     }
//     let node = document.createTextNode(i + 1);
//     data[i].append(node);

//     product.append(data[i]);
// }

// let chunks = splitParts(data);
// paginationButtons();
// renderChunks(0);

// function splitParts(arr) {
//     if (arr.length > lengthPath) {
//         let chunks = [];
//         for (let i = 0; i < arr.length; i += lengthPath) {
//             chunks.push(arr.slice(i, i + lengthPath));
//         }
//         return chunks;
//     } else {
//         return arr;
//     }
// }

// function renderChunks(part) {
//     if (part >= 0 && part <= chunks.length) {
//         product.innerHTML = "";
//         chunks[part].map(elem => product.append(elem));
//         page = part;
//     } else {
//         return false;
//     }
// }

// function paginationButtons() {
//     for (let i = 0; i < chunks.length; i++) {
//         let btn = document.createElement("button");
//         btn.textContent = i + 1;
//         btn.onclick = () => renderChunks(i);
//         pagination.appendChild(btn);
//     }

// }

// let form = document.querySelector("form");
// console.log(form);

// let text = document.querySelector("input");
// let output = document.querySelector("#length");

// text.addEventListener("input", function () {
//     output.textContent = text.value.length;
// })


// let reg = document.querySelector(".register");
// let h2 = document.querySelector("h2");
// let win = document.createElement("p");
// h2.after(win)

// reg.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let login = reg.login.value;
//     let password = reg.psw.value;
//     let password2 = reg.psw2.value;
//     let errors = "";
//     console.log(login);
//     if (login == "" || password == "" || password2 == "") {


//         win.innerHTML = "Все поля должны быть заполнены";
//         win.style.color = "red";
//         return;
//     }
//     if (password != password2) {
//         errors += "Пароли не совпадают<br>";
//     }
//     if (password.length < 6) {
//         errors += "Слишком короткий пароль";
//     }
//     if (errors == "") {
//         win.className = "green";
//         win.innerHTML = "Регистрация прошла успешна"
//     } else {
//         win.className = "red";
//         win.innerHTML = errors;
//     }
// })


// let input = document.querySelector("#input");
// let list = document.querySelector("#list");

// input.addEventListener('keypress', function (event) {
//     if (event.key == 'Enter') {
//         let li = document.createElement("li");
//         let task = document.createElement("span");
//         task.classList.add('task');
//         task.textContent = input.value;
//         task.addEventListener("dblclick", function () {
//             let text = this.textContent;
//             console.log(text);
//             this.textContent = "";

//             let edit = document.createElement("input");
//             edit.value = text;
//             this.append(edit);

//             let self = this;
//             edit.addEventListener("keypress", function (event) {
//                 if (event.key == "Enter") {
//                     self.textContent = edit.value;
//                 }
//             })

//         })

//         li.append(task);

//         let remove = document.createElement("span");
//         remove.textContent = "Удалить";
//         remove.classList.add('remove');
//         remove.addEventListener("click", function () {
//             li.remove();

//         });
//         li.append(remove);

//         let mark = document.createElement("span");
//         mark.textContent = "выполнено";
//         mark.classList.add("mark");
//         mark.addEventListener("click", function (event) {
//             mark.parentNode.classList.add("done");
//         })


//         list.append(li);
//         input.value = "";
//     }
// })

// let checkbox = document.querySelector("#purple");
// checkbox.addEventListener("change", function () {
//     document.body.style.background = checkbox.checked ? "mediumpurple" : "";
//     console.log(checkbox);
// })


// let choose = document.querySelector("input[type='button']")

// choose.addEventListener("click", chooseColor);

// function chooseColor(){
//     let f=document.form3;
//     document.body.style.background = f.radio2.value;

// }

// let f=document.form3;
// for (let i =0; i<f.radio2.length; i++){
//     f.radio2[i].addEventListener('change', chooseColor);

// }


// function chooseColor(event) {
//     document.body.style.background = event.target.value;
// }


// let languages = document.querySelector("#languages");
// let languageOptions = ["Python", "Javascript", "C++", "Java"];

// languages.innerHTML = languageOptions.map(language => `
//     <div> 
//         <input type="radio" name="language" value="${language}" id="${language}">
//    <label for = "${language}">${language}</label>
//         </div>
// `).join (" ");

// let radioButtons = document.querySelectorAll('input[name="language"');
// for (let radioButton of radioButtons){
//     radioButton.addEventListener("change", showSelectedLanguage)
// }

// function showSelectedLanguage (){
//     if(this.checked){
//         document.querySelector("#languageOutput").textContent = `Вы выбрали:
//         ${this.value}`;
//     }
// }

// let city = document.querySelector("#city");

// city.addEventListener("change", setImage);
/* Свойства select
select.options - коллекция из подэлементов <option>
select.value - значения выбраного в дданный момент <option>
select.selectedIndex - номер (index) выбранного <option>
*/

// function setImage (){
//  let cities = city.selectedIndex;
//  let options = city.options
//  let code = options[cities].value
//  console.log(code)   
//  let div = document.querySelector("#image");
//  div.innerHTML = "<img src='"+code+".png'>"
// }

// let select = document.querySelector("select");
// let output = document.querySelector("#output");

// select.addEventListener("change", function(){
//     let number = 0;
//     for(let i=0; i<select.options.length; i++){
//         let option = select.options[i];
//         if(option.selected){
//             number += Number(option.value);
//         }
//     }
//     output.textContent = number;
// })

// let countries = document.querySelector("#countries")

// let ruCities = document.querySelector("#ru");
// let byCities = document.querySelector("#by");

// countries.addEventListener("change", function(){
//     document.querySelector(".cities.active").classList.remove('active')
// if(this.value == 'ru'){
//     ruCities.classList.add('active');
// }
// if (this.value == 'by' ){
//     byCities.classList.add('active');
// }
// })

// let option = new Option("Текст", "value", true);
// // console.log(option);

// let btn = document.querySelector("#btnAdd");

// let btnRemove = document.querySelector("#btnRemove");

// let taskInput = document.querySelector("#task");
// let taskList = document.querySelector("#taskList");

// btnAdd.addEventListener("click", e => {
//     e.preventDefault();

//     if(taskInput.value.trim() === ""){
//         alert("Введите название задачи");
//         return;
//     }

//     let option = new Option(taskInput.value, taskInput.value)
//     taskList.add(option, undefined);
//     taskInput.value = '';
//     taskInput.focus();
// })

// btnRemove.addEventListener("click", e=> {
//     e.preventDefault();

//     let selectedTasks= [];
//     for (let i=0; i<taskList.options.length; i++){
//         selectedTasks[i]= taskList.options[i].selected;
//     }

//     let index = taskList.options.length;
//     while(index--){
//         if(selectedTasks[index]){
//             taskList.remove(index);
//         }
//     }
// })

// let input = document.querySelector("input");
// input.addEventListener("change", function(){
//     if(input.files.length>0){
//         let file = input.files[0];
//         console.log(file);}
// })


// document.getElementById("slider").addEventListener("input", function () {
//     document.getElementById('slider-value').textContent = this.value;
// })

// let tds = document.querySelectorAll("td");

// for (let i = 0; i < tds.length; i++) {
//     tds[i].addEventListener("click", function func() {
//         let input = document.createElement("input");
//         input.value = this.innerHTML;
//         this.innerHTML = '';
//         this.append(input);

//         let td = this;
//         input.addEventListener('blur', function () {
//             td.innerHTML = this.value;
//             td.addEventListener("click", func);
//         })
//         this.removeEventListener("click", func)
//     })
// }


// let userInput = document.getElementById("userInput");
// let name = document.getElementById("displayName");

// userInput.addEventListener("input", function () {
//     name.textContent = this.value || "Гость";
// })


// let form = document.getElementById("myForm");

// form.addEventListener("submit", function (event) {
//     //     event.preventDefault()
//     //     // let username = form.username.value;
//     //     // let password = form.password.value;
//     //     // console.log(username);

//     //     let formData = new FormData(form);
//     //     console.log(formData.get("username"));
//     // })


//     let username = form.username.value;
//     let password = form.password.value;


//     if (username.length < 3) {
//         event.preventDefault();
//         alert("Имя пользователя должно быть более 3 символов");
//     }
//     if (password.length < 6) {
//         event.preventDefault();
//         alert("Пароль должен быть более 6 символов");
//     }
// })

/* Методы:
search - возвращает позицию, на которой регулярное выражение совпадает с вызывающей строкой, или "-1", если совпадений нет.

match - получит  все совпдаения с регулярным выражением

replace - поиск и замена 

split - делит строку на массив, разбивая ее по указанной подстроке 

test - выполняет поиск совпадения регулярного выражения со строкой. Возвращает 
true или false

[^abc] - исключающий диапозон, ни один из указанных символов

*/

/* Синтаксис записи:
let regexp = new RegExp("шаблон", "флага");
let regexp = /шаблон/флаги;
*/

// let str = "Я ищу совпадения в 2026 году"
// let regexp = /ищу/;

// document.writeln(str)
// document.writeln(str.search(regexp))

// function lowerCase(str) {
//     return str.replace(/[А-Я]/g, u => u.toLowerCase());
// }

// console.log(lowerCase("Несколько слов"));


// let html = `
// <table>
// <tr>
// <td bgcolor="#CCC">
// <img scr="222.png"/>
// </td>
// <td bgcolor="#003399">
// <img scr="af3.png"/>
// </td>
// <td bgcolor="#00ccdd">
// <img scr="fff.png"/>
// </td>
// </tr>
// </table>

// `;

// let exp = /#[0-9a-f]/ig;
// console.log(html.match(exp));

// let string = "Мой номер телефона: +7 (999) 123-45-67. Номер телефона моего друга: +7 (987) 654-32-10"
// let ex = /\+\d\s\(/g;
// let phoneNumbers = string.match(ex);

// console.log(phoneNumbers);


/*
\D - все кроме цифры 
\S - Не проблем 
\W 
*/

// let str = "я ищу сопадения 49589458 хзапхзвап"

// let regexp = /\w/g;
// document.writeln(str.match(regexp) + "<br>");


// let html = "909";
// let exp = /\d{3}/;
// document.writeln(html.match(exp) + "<br>")


// function capitalize(st) {
//     return st.replace(/^[а-я]/, u => u.toUpperCase());
// }

// console.log(capitalize("сколько слов"));

/* Количество повторений
+ => от 1 до бесконечности {1,}
? => от 0 до 1 {0,1}
* => от 0 до бесконечности{0,} 

*/

// let st = "+7(903)-123-45-67";
// document.writeln(st.match(/\d+/g) + "<br>");

// let regex = /java(script)?|php|c(\+{2})?/gi;
// let str = "Java JavaScript, PHP, C, C++";
// document.writeln(str.match(regex));

// let arr = [101, 102, 103, 104, 105]

// const arrayReverse = (arr) => {
//     const restultArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         restultArr.push(arr[i]);
//     }
//     return restultArr;
// }

// // Должны получить массив: [105, 104, 103, 102, 101]
// console.log(arrayReverse([101, 102, 103, 104, 105]));

// function getArr(num) {
//     let resultArray = [];
//     for (let i = num; i >= 0; i--) {
//         if (i % 3 === 0) {
//             resultArray.push(i);
//         }

//     }
//     return resultArray
// }

// console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
// console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
// console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]


// let choose = document.querySelector("input[type='button']");

// choose.addEventListener("click", chooseOption);

// function chooseOption() {
//     let f = document.forma.radio;
//     for (let i = 0; i < f.length; i++) {
//         if (f[i].checked) {
//             alert(`Вы выбрали ${f[i].value}`)
//             return;
//         }

//     }
// }

// let a = prompt()
// console.log(Math.trunc(a / 10))

// let confets = document.querySelector(".confets");
// let btn = document.querySelectorAll(".btn");
// let noname;

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function () {
//         let conf = confets.value;
//         let amount = this.getAttribute("data-pet");

//         noname = conf * amount;
//         let sum = document.querySelector(".sum");
//         sum.innerHTML = noname;
//     })
// }


// let a = prompt()
// console.log(a % 100)
// let b = a % 100
// let c = Math.trunc(b / 10);
// console.log(c);


// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()
//     return data
// }


// async function main() {
//     const postsData = await getData();
//     let currentPage = 1;
//     let rows = 10;

//     function displayList(arrData, rowPerPage, page) {
//         const postsEl = document.querySelector('.posts');
//         const start = rowPerPage * page;
//         const end = start + rowPerPage;
//         const paginatedData = arrData.slice(start, end);

//         paginatedData.forEach((el) => {
//             const postEl = document.createElement("div");
//             postEl.classList.add("post");
//             postEl.innerText = `${el.title}`;
//             postsEl.appendChild(postEl);
//         })

//     }
//     function displayPagination(arrData, rowPerPage) {
//         const paginationEl = document.querySelector('.pagination');
//         const pagesCount = Math.ceil(arrData.length / rowPerPage);
//         const ulEl = document.createElement("ul");
//         ulEl.classList.add('pagination__list');

//         for (let i = 0; i < pagesCount; i++) {
//             const liEl = displayPaginationBtn(i + 1);
//             ulEl.appendChild(liEl)
//         }
//         paginationEl.appendChild(ulEl)


//     }
//     function displayPaginationBtn(page) {

//         const liEl = document.createElement("li");
//         liEl.classList.add('pagination__item');
//         liEl.innerText = page;
//         return liEl;
//     }
//     displayList(postsData, rows, currentPage)
//     displayPagination(postsData, rows);
// }

// main();



// let i = 0;
// for (i = 0; i <= 11; i++) {
//     console.log(i)
// }


// function sumArray(arr) {
//     arr.forEach((str) => {
//         const square = str + str;
//         console.log(square)
//     })
// }
// let str = prompt()
// let arr = str.split(",")

// let st = "John Smith";
// let re = /(\w+)\s(\w+)/;
// document.writeln(st.replace(re, "$2,$1"));

// function add(str) {
//     return str.replace(/([A-Z])/g, " $1");
// }

// console.log(add("camelCase")); // camel Case
// console.log(add("helloWorldItIsMe")); // hello World It Is Me

// let text = "red color: #F00 and green: #090";
// let ex = /(#[a-f0-9]{3})/ig;
// text = text.replace(ex, "<span style='color:$1'>$1</span>")
// document.writeln("<p>" + text + "<p>")

// let text = "I like google.com and yandex.com.ru";
// let ex = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig;
// text = text.replace(ex, "<a href=''>$0</a>");
// document.writeln("<p>" + text + "<p>")

// function formatPhoneNumber(phone) {
//     let cleaned = phone.replace(/\D/g, "");
//     return cleaned.replace(/(7|8)(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
// }



// console.log(formatPhoneNumber("+7 999 1234567"));


// document.writeln("Люблю HTML".replace(/HTML/, "$& и JavaScript"));

// let st = `Он сказал: "I'm at home".`
// let re = /["'](.*?)["']/g;
// document.writeln(st.match(re) + "<br>");

//Позитивная опережающая проверка 
// X(?=Y)

// document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/));

// function validPassword(psw) {
//     let pswEx = /^(?=.*[A-Z]).{8,}/;
//     return pswEx.test(psw);
// }

// console.log(validPassword("QWer23!#"))

// let but = document.querySelector("#but");
// but.addEventListener("click", smsUser);

// function smsUser() {
//     let name = document.querySelector("#your_name").value;
//     let text = document.querySelector("#text").value;
//     let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;
//     text = text.replace(regExpBBMail, "<span style = color:red'>$1</span>")
//     document.writeln(`
//         <fieldset> 
//         <legend>${name}</legend>
//         <div>${text}{/div>}
//         </fieldset>
//         `)
//     let form = document.querySelector("form");
//     form.insertAdjacentHTML("afterend", `<fieldset>
//              <legend>${name}</legend>
//              <div>${text}</div>
//          </fieldset>  `);
// }

// let st = "   текст     "
// st = st.replace(/\s+ /, "");
// console.log(">" + st + "<");

// let

// function printSquare(lines) {
//     if (lines < 2 || !Number.isInteger(lines)) {
//         return;
//     }
//     let square = "";
//     for (let row = 0; row < lines; row++) {

//         for (let col = 0; col < lines; col++) {
//             if (row === 0 || row === lines - 1 || col === 0 || col === lines - 1) {
//                 square += "# ";
//             } else {
//                 square += "  ";
//             }

//         }
//         square = square.trim();
//         square += "\n"
//     }
//     console.log(square)

// }

// printSquare(5);

// console.log("Вносим изменения")
console.log("Вносим изменения на другом рабочем месте")