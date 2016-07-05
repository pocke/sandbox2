function a() {
    return /foo/.test("bar");
}
/*eslint wrap-regex: "error"*/

function a() {
    return /foo/.test("bar");
}
/*eslint wrap-regex: "error"*/

function a() {
    return (/foo/).test("bar");
}
