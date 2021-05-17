/*
 * "Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print Fizz instead of the number and 
 * for the multiples of five print Buzz. 
 * For numbers which are multiples of both three and five print FizzBuzz.
 */

function fizzbuzz() = {

    //return {
    let arr = [];
    // 



        for(i = 0; i<101; i++) {
        let num = 1;
        if (num %= 3 === 0 && num %= 5 === 0) {
            return arr.push('FizzBuzz');
        } else if (num %= 3 === 0) {
            return arr.push('Fizz');
        } else if (num %= 5 === 0) {
            return arr.push('Buzz');
        } else {
            return arr.push(num);
        };
        // num++;
    };

    };

console.log(fizzbuzz);