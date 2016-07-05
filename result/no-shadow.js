var a = 3;
function b() {
    var a = 10;
}
/*eslint no-shadow: "error"*/
/*eslint-env es6*/

var a = 3;
function b() {
    var a = 10;
}

var b = function () {
    var a = 10;
}

function b(a) {
    a = 10;
}
b(a);

if (true) {
    let a = 5;
}
/*eslint no-shadow: ["error", { "builtinGlobals": true }]*/

function foo() {
    var Object = 0;
}
/*eslint no-shadow: ["error", { "hoist": "functions" }]*/
/*eslint-env es6*/

if (true) {
    let b = 6;
}

function b() {}
/*eslint no-shadow: ["error", { "hoist": "functions" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
}

let a = 5;
/*eslint no-shadow: ["error", { "hoist": "all" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
    let b = 6;
}

let a = 5;
function b() {}
/*eslint no-shadow: ["error", { "hoist": "never" }]*/
/*eslint-env es6*/

if (true) {
    let a = 3;
    let b = 6;
}

let a = 5;
function b() {}
/*eslint no-shadow: ["error", { "allow": ["done"] }]*/
/*eslint-env es6*/

import async from 'async';

function foo(done) {
  async.map([1, 2], function (e, done) {
    done(null, e * 2)
  }, done);
}

foo(function (err, result) {
  console.log({ err, result });
});
