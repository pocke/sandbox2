for (key in foo) {
    doSomething(key);
}
/*eslint guard-for-in: "error"*/

for (key in foo) {
    doSomething(key);
}
/*eslint guard-for-in: "error"*/

for (key in foo) {
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
