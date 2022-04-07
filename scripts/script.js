//Задание 1

/*function calc1(a, b, c) {
    console.log((a - b) / c)
}

calc1(100, 50, 2);*/

//Задание 2

/*function calc2(num) {
    let a = num * num;
    let b = num * num * num;
    return (console.log(a) , console.log(b));
}

calc2(prompt('Введите число'));*/

//Задание 3 

/*function min(num1, num2) {
    if ((num1 - num2) < 0) {
        return 'min = ' + num1;
    } else {
        return 'min = ' + num2;
    }
}

console.log(min(10, 20));


function max(num3, num4) {
    if ((num3 - num4) < 0) {
        return 'max = ' + num4;
    } else {
        return 'max = ' + num3;
    }
}

console.log(max(4, 6));*/

//Задание 4

/*let arrNum = [];

let arr = function(value1, value2) {
    for (let i = value1; i <= value2; i++) {
        arrNum.push(i);
    }
    return (arrNum);
}

let c = arr(prompt('Введите первое число'), prompt('Введите первое число'));

function v() {
    console.log(c)
}
v();*/

//Задание 5

/*let isEven = function(value) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resault = isEven(prompt('Введите целое число'));
//console.log(resault);

//Задание 6 
let arr = [5, 9, 22, 45, 12, 11];
let arrEven = [];
function arrFunc() {
    for(let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {             //если isEven(arr[i]) == true;
            arrEven.push(arr[i]);
        }
    }
}

arrFunc();
console.log(arrEven)*/

//Задание 7 (первая часть)

/*let row = '';

function paintFunc(h) {
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= i; j++){
            row += i;
        }
        console.log(row);
        row = '';
    }
}
let h = 9;
paintFunc(h)*/


//Задание 9
/*function calc9() {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
        if (i === 0) {
            arr[i] = 0;
        }
        else if (i === 1) {
            arr[i] = 1;
        }
        else {
            arr[i] = arr[i-1] + arr[i-2]
            if (arr[i] > 986) break;
        }
    }
    return arr;
}
let c = calc9();
console.log(c);*/

//Задание 10
/*let num = 543;

function calc10(num) {
    let sum = 0;
    let arr10 = String(num).split('');
    for (let i = 0; i < arr10.length; i++) {
        sum += parseInt(arr10[i]);
    }

    if (sum > 9) {
        return calc10(sum);
    } else {
        return sum;
    }
}

let c = calc10(num);
console.log(c);*/

//Задание 11

/*let i = 0

function printArray(array) {
    console.log(array[i]);
    i++;
    if (i < array.length) {
        printArray(array);
    }
}

printArray([1, 2, 3, 123, 85, 2222, 19]);*/