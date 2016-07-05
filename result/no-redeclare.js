/*eslint no-redeclare: "error"*/

var a = 3;
var a = 10;
/*eslint no-redeclare: "error"*/

var a = 3;
// ...
a = 10;
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/

var Object = 0;
/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/
/*eslint-env browser*/

var top = 0;
