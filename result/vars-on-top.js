/*eslint vars-on-top: "error"*/

// Variable declarations in a block:
function doSomething() {
    var first;
    if (true) {
        first = true;
    }
    var second;
}

// Variable declaration in for initializer:
function doSomething() {
    for (var i=0; i<10; i++) {}
}
/*eslint vars-on-top: "error"*/

// Variables after other statements:
f();
var a;
/*eslint vars-on-top: "error"*/

function doSomething() {
    var first;
    var second; //multiple declarations are allowed at the top
    if (true) {
        first = true;
    }
}

function doSomething() {
    var i;
    for (i=0; i<10; i++) {}
}
/*eslint vars-on-top: "error"*/

var a;
f();
/*eslint vars-on-top: "error"*/

// Directives may precede variable declarations.
"use strict";
var a;
f();

// Comments can describe variables.
function doSomething() {
    // this is the first var.
    var first;
    // this is the second var.
    var second
}
