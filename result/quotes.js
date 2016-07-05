/*eslint-env es6*/

var double = "double";
var single = 'single';
var backtick = `backtick`;    // ES6 only
[2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}]
/*eslint quotes: ["error", "double"]*/

var single = 'single';
var unescaped = 'a string containing "double" quotes';
/*eslint quotes: ["error", "single"]*/

var double = "double";
var unescaped = "a string containing 'single' quotes";
/*eslint quotes: ["error", "double", {"avoidEscape": true}]*/

var single = 'single';
var single = `single`;
/*eslint quotes: ["error", "single", {"avoidEscape": true}]*/

var double = "double";
var double = `double`;
/*eslint quotes: ["error", "backtick"]*/

var single = 'single';
var double = "double";
var unescaped = 'a string containing `backticks`';
/*eslint quotes: ["error", "backtick", {"avoidEscape": true}]*/

var single = 'single';
var double = "double";
/*eslint quotes: ["error", "double"]*/
/*eslint-env es6*/

var double = "double";
var backtick = `back\ntick`;  // backticks are allowed due to newline
var backtick = tag`backtick`; // backticks are allowed due to tag
/*eslint quotes: ["error", "single"]*/
/*eslint-env es6*/

var single = 'single';
var backtick = `back${x}tick`; // backticks are allowed due to substitution
/*eslint quotes: ["error", "double", {"avoidEscape": true}]*/

var single = 'a string containing "double" quotes';
/*eslint quotes: ["error", "single", {"avoidEscape": true}]*/

var double = "a string containing 'single' quotes";
/*eslint quotes: ["error", "double", {"allowTemplateLiterals": true}]*/

var single = 'single';
var single = `single`;
/*eslint quotes: ["error", "single", {"allowTemplateLiterals": true}]*/

var double = "double";
var double = `double`;
/*eslint quotes: ["error", "backtick"]*/
/*eslint-env es6*/

var backtick = `backtick`;
/*eslint quotes: ["error", "backtick", {"avoidEscape": true}]*/

var double = "a string containing `backtick` quotes"
