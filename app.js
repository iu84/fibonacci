'use strict';
 function fib(n) {
     if (n === 0) {
         return 0;        
     } else if (n === 1){
         return 1;
     }
     return fib(n -1) + fib(n - 2);
 }
 const length = 40;
 for (let i = 0; i <= length; i++) {
     console.log(fib(i));
 }

// function fib(n) {
    // console.log( n + "のフィッボナッチ数はxxxです" );
// }
// for (let i = 1; i <= 40; i++) {
//  fib(i);
// }