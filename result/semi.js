var name = "ESLint"
var website = "eslint.org";
return
{
    name: "ESLint"
};
return;
{
    name: "ESLint";
}
var globalCounter = { }

(function () {
    var n = 0
    globalCounter.increment = function () {
        return ++n
    }
})()
/*eslint semi: "error"*/

var name = "ESLint"

object.method = function() {
    // ...
}
/*eslint semi: "error"*/

var name = "ESLint";

object.method = function() {
    // ...
};
/*eslint semi: ["error", "always", { "omitLastInOneLineBlock": true}] */

if (foo) {
    bar()
}

if (foo) { bar(); }
/*eslint semi: ["error", "always", { "omitLastInOneLineBlock": true}] */

if (foo) { bar() }

if (foo) { bar(); baz() }
/*eslint semi: ["error", "never"]*/

var name = "ESLint";

object.method = function() {
    // ...
};
/*eslint semi: ["error", "never"]*/

var name = "ESLint"

object.method = function() {
    // ...
}
/*eslint semi: ["error", "never"]*/

var name = "ESLint"

;(function() {
    // ...
})()
