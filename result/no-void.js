// will always return undefined
(function(){
    return void 0;
})();

// will return 1 in ES3 and undefined in ES5+
(function(){
    undefined = 1;
    return undefined;
})();

// will throw TypeError is ES5+
(function(){
    'use strict';
    undefined = 1;
})();
foo = void 0;
foo = undefined;
var foo = 1;
void function(){ foo = 1; }() // will assign foo a value of 1
+function(){ foo = 1; }() // same as above
/*eslint no-void: "error"*/

void foo

var foo = void bar();
