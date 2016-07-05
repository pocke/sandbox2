if ("red" === color) {
    // ...
}
if (color === "red") {
    // ...
}
/*eslint yoda: "error"*/

if ("red" === color) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}

if (0 <= x && x < 1) {
    // ...
}
/*eslint yoda: "error"*/

if (5 & value) {
    // ...
}

if (value === "red") {
    // ...
}
/*eslint yoda: ["error", "never", { "exceptRange": true }]*/

function isReddish(color) {
    return (color.hue < 60 || 300 < color.hue);
}

if (x < -1 || 1 < x) {
    // ...
}

if (count < 10 && (0 <= rand && rand < 1)) {
    // ...
}

function howLong(arr) {
    return (0 <= arr.length && arr.length < 10) ? "short" : "long";
}
/*eslint yoda: ["error", "never", { "onlyEquality": true }]*/

if (x < -1 || 9 < x) {
}

if (x !== 'foo' && 'bar' != x) {
}
/*eslint yoda: ["error", "always"]*/

if (color == "blue") {
    // ...
}
/*eslint yoda: ["error", "always"]*/

if ("blue" == value) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}
