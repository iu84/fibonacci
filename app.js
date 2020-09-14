'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
     if (memo.has(n)) {
         return memo.get(n);        
     } 
     let value = fib(n - 1) + fib(n - 2);
     memo.set(n, value);
     return value;      
 }
 for (let i = 0; i <= 40; i++) {
     console.log(fib(i));
 }

// function fib(n) {
    // console.log( n + "のフィッボナッチ数はxxxです" );
// }
// for (let i = 1; i <= 40; i++) {
//  fib(i);
// }