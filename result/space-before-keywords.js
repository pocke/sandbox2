if (foo) {
    // ...
} else {
    // ...
}
/*eslint space-before-keywords: ["error", "never"]*/

if (foo) {
    // ...
} else {}

do {

}
while (foo)

try {} finally {}

try {} catch(e) {}
/*eslint space-before-keywords: ["error", "never"]*/

if (foo) {
    // ...
}else {}

do {}while (foo)

try {}finally {}

try{}catch(e) {}
/*eslint space-before-keywords: ["error", "always"]*/
/*eslint-env es6*/

if (foo) {
    // ...
}else {}

const foo = 'bar';let baz = 'qux';

var foo =function bar () {}

function bar() {
    if (foo) {return; }
}
/*eslint space-before-keywords: ["error", "always"]*/
/*eslint-env es6*/

if (foo) {
    // ...
} else {}

(function() {})()

<Foo onClick={function bar() {}} />

for (let foo of ['bar', 'baz', 'qux']) {}
