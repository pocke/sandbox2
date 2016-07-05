/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
/*global someFunction b:true*/
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
/*global b*/
/*eslint no-undef: "error"*/

b = 10;
/*eslint no-undef: "error"*/

if (typeof UndefinedIdentifier === "undefined") {
    // do something ...
}
/*eslint no-undef: ["error", { "typeof": true }] */

if(typeof a === "string"){}
/*global a*/
/*eslint no-undef: ["error", { "typeof": true }] */

if(typeof a === "string"){}
/*eslint no-undef: "error"*/
/*eslint-env browser*/

setTimeout(function() {
    alert("Hello");
});
/*eslint no-undef: "error"*/
/*eslint-env node*/

var fs = require("fs");
module.exports = function() {
    console.log(fs);
};
