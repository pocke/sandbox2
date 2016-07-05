Foo.prototype.bar = function bar() {};
/*eslint func-names: "error"*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
/*eslint func-names: "error"*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
/*eslint func-names: "error"*/

Foo.prototype.bar = function bar() {};

(function bar() {
    // ...
}())
/*eslint func-names: "error"*/

Foo.prototype.bar = function() {};

(function() {
    // ...
}())
