var undefined = "foo";
/*eslint no-shadow-restricted-names: "error"*/

function NaN(){}

!function(Infinity){};

var undefined;

try {} catch(eval){}
/*eslint no-shadow-restricted-names: "error"*/

var Object;

function f(a, b){}
