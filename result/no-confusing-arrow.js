// The intent is not clear
var x = a => 1 ? 2 : 3;
// Did the author mean this
var x = function (a) { return 1 ? 2 : 3 };
// Or this
var x = a <= 1 ? 2 : 3;
/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = a => 1 ? 2 : 3;
var x = (a) => 1 ? 2 : 3;
var x = (a) => (1 ? 2 : 3);
/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = a => { return 1 ? 2 : 3; };
var x = (a) => { return 1 ? 2 : 3; };
/*eslint no-confusing-arrow: ["error", {allowParens: true}]*/
/*eslint-env es6*/
var x = a => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
