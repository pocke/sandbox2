var friend = new Person();
/*eslint new-cap: "error"*/

function foo(arg) {
    return Boolean(arg);
}
/*eslint new-cap: ["error", { "newIsCap": true }]*/

var friend = new person();
/*eslint new-cap: ["error", { "newIsCap": true }]*/

var friend = new Person();
/*eslint new-cap: ["error", { "newIsCap": false }]*/

var friend = new person();
/*eslint new-cap: ["error", { "capIsNew": true }]*/

var colleague = Person();
/*eslint new-cap: ["error", { "capIsNew": true }]*/

var colleague = new Person();
/*eslint new-cap: ["error", { "capIsNew": false }]*/

var colleague = Person();
/*eslint new-cap: ["error", { "newIsCapExceptions": ["events"] }]*/

var events = require('events');

var emitter = new events();
/*eslint new-cap: ["error", { "capIsNewExceptions": ["Person"] }]*/

function foo(arg) {
    return Person(arg);
}
/*eslint new-cap: ["error", { "properties": true }]*/

var friend = new person.acquaintance();
/*eslint new-cap: ["error", { "properties": true }]*/

var friend = new person.Acquaintance();
/*eslint new-cap: ["error", { "properties": false }]*/

var friend = new person.acquaintance();
