/*eslint no-trailing-spaces: "error"*/

// spaces, tabs and unicode whitespaces
// are not allowed at the end of lines
var foo = 0;//•••••
var baz = 5;//••
/*eslint no-trailing-spaces: "error"*/

var foo = 0;

var baz = 5;
/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/

var foo = 0;
//••••
var baz = 5;
