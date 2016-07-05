/*eslint no-implicit-globals: "error"*/

var foo = 1;

function bar() {}
/*eslint no-implicit-globals: "error"*/

// explicitly set on window
window.foo = 1;
window.bar = function() {};

// intended to be scope to this file
(function() {
  var foo = 1;

  function bar() {}
})();
/*eslint no-implicit-globals: 2*/

// foo and bar are local to module
var foo = 1;
function bar() {}
