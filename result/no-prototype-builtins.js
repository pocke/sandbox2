/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = foo.hasOwnProperty("bar");

var isPrototypeOfBar = foo.isPrototypeOf(bar);

var barIsEnumerable = foo.propertyIsEnumerable("bar");
/*eslint no-prototype-builtins: "error"*/

var hasBarProperty = {}.hasOwnProperty.call(foo, "bar");

var isPrototypeOfBar = {}.isPrototypeOf.call(foo, bar);

var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
