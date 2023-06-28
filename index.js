let ourInstitution = "DU";
// console.log(ourInstitution);

const myName = "Arafat Rahman";
// console.log(myName);

let inches = 150;
// let feet = inches / 12;
// console.log(feet);

let dadasInches = 100;
let feet = dadasInches / 12;
// console.log(feet.toFixed(2));

function inchesToFeet(inches){
    let feet = inches / 12;
    // console.log(feet);
    return feet;
}

// inchesToFeet(80);
let nanasFeet = inchesToFeet(200);
// console.log("Nanar feet holo", nanasFeet);

function milesToKilometers(miles){
    let kilometers = miles * 1.61;
    // console.log(kilometers);
    return kilometers;
}

// milesToKilometers(30);
// console.log(milesToKilometers(30));

// console.log(10 % 2);
// console.log(11 % 2);
// console.log(Math.floor(17 / 3));

function isEven(number){
    return number % 2 == 0;
}

// console.log(isEven(11));
// console.log(isEven(10));
let result = isEven(10);

// if(result){
//     console.log("This is an Even Number");
// }else{
//     console.log("This is an Odd Number");
// }

function isOdd(number){
    return number % 2 != 0;
}

let result2 = isOdd(11);

// if(result2){
//     console.log("This is an Odd Number");
// }else{
//     console.log("This is an Even Number");
// }

function isLeapYear(year){
    if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
        return true;
    }else if(year % 4 == 0 && year % 100 == 0){
        return false;
    }else if(year % 4 == 0){
        return true;
    }else {
        return false;
    }
}

// var result1  = isLeapYear(2004);
// console.log(result1);

// var factorial = 1;
// for(let i=1; i<=5; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);

let number = 5;
let fact = 1;
for(let i=1; i<=number; i++){
    
    fact = fact * i;
}

// console.log(fact);

// function factorial(number){
//     let fact = 1;
//     for(let i=1; i<=number; i++){
//         fact = fact * i;
//     }

//     return fact;
// }

// var result3 = factorial(5);
// console.log(result3);
// var result4 = factorial(10);
// console.log(result4);

// function getFactorial(number){
//     var i = 1;
//     var fact = 1;
//     while(i<=number){
//         fact = fact * i;
//         i++;
//     }

//     return fact;
// }

// function getFactorial(number){
//     var i = number;
//     var fact = 1;
//     while(i>=1){
//         fact = fact * i;
//         i--;
//     }

//     return fact;
// }

// const getFact = getFactorial(5);
// const getFact = getFactorial(6);
// console.log(getFact);

function getFactorial(number){
    var fact = 1;
    for(var i = number; i>=1; i--){
        fact = fact * i;
    }

    return fact;
}

const getFact = getFactorial(6);
console.log(getFact);