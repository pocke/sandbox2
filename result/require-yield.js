/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  return 10;
}
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() { }
