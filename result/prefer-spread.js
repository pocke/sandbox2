var args = [1, 2, 3, 4];
Math.max.apply(Math, args);
/*eslint-env es6*/

var args = [1, 2, 3, 4];
Math.max(...args);
/*eslint prefer-spread: "error"*/

foo.apply(undefined, args);

foo.apply(null, args);

obj.foo.apply(obj, args);
/*eslint prefer-spread: "error"*/

// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);

// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);
/*eslint prefer-spread: "error"*/

// This warns.
a[i++].foo.apply(a[i++], args);

// This does not warn.
a[++i].foo.apply(a[i], args);
