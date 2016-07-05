// properties
var foo = {
    x: x,
    y: y,
    z: z,
};

// methods
var foo = {
    a: function() {},
    b: function() {}
};
/*eslint-env es6*/

// properties
var foo = {x, y, z};

// methods
var foo = {
    a() {},
    b() {}
};
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    w: function() {},
    x: function *() {},
    [y]: function() {},
    z: z
};
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    w() {},
    *x() {},
    [y]() {},
    z
};
/*eslint object-shorthand: "error"*/
/*eslint-env es6*/

var foo = {
    x: (y) => y
};
/*eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
/*eslint-env es6*/

var foo = {
    "bar-baz"() {}
};
/*eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
/*eslint-env es6*/

var foo = {
    "bar-baz": function() {},
    "qux": qux
};
/*eslint object-shorthand: ["error", "always", { "ignoreConstructors": true }]*/
/*eslint-env es6*/

var foo = {
    ConstructorFunction: function() {}
};
