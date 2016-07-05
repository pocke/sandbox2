/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a = 1;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a += 1;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
++a;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
console.log(a);
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a in [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a of [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
