/*eslint key-spacing: ["error", { "beforeColon": false }]*/

var obj = { "foo" : 42 };
/*eslint key-spacing: ["error", { "beforeColon": false }]*/

var obj = { "foo": 42 };
/*eslint key-spacing: ["error", { "beforeColon": true }]*/

var obj = { "foo": 42 };
/*eslint key-spacing: ["error", { "beforeColon": true }]*/

var obj = { "foo" : 42 };
/*eslint key-spacing: ["error", { "afterColon": true }]*/

var obj = { "foo":42 };
/*eslint key-spacing: ["error", { "afterColon": true }]*/

var obj = { "foo": 42 };
/*eslint key-spacing: ["error", { "afterColon": false }]*/

var obj = { "foo": 42 };
/*eslint key-spacing: ["error", { "afterColon": false }]*/

var obj = { "foo":42 };
/*eslint key-spacing: ["error", { "mode": "strict" }]*/

call({
    foobar: 42,
    bat:    2 * 2
});
/*eslint key-spacing: ["error", { "mode": "strict" }]*/

call({
    foobar: 42,
    bat: 2 * 2
});
/*eslint key-spacing: ["error", { "mode": "minimum" }]*/

call({
    foobar: 42,
    bat:    2 * 2
});
/*eslint key-spacing: ["error", { "align": "value" }]*/

var obj = {
    a: value,
    bcde:  42,
    fg :   foo()
};
/*eslint key-spacing: ["error", { "align": "value" }]*/

var obj = {
    a:    value,
    bcde: 42,

    fg: foo(),
    h:  function() {
        return this.a;
    },
    ijkl: 'Non-consecutive lines form a new group'
};

var obj = { a: "foo", longPropertyName: "bar" };
/*eslint key-spacing: ["error", { "align": "colon" }]*/

call({
    foobar: 42,
    bat:    2 * 2
});
/*eslint key-spacing: ["error", { "align": "colon" }]*/

call({
    foobar: 42,
    bat   : 2 * 2
});
/*eslint "key-spacing": [2, {
    "singleLine": {
        "beforeColon": false,
        "afterColon": true
    },
    "multiLine": {
        "beforeColon": true,
        "afterColon": true,
        "align": "colon"
    }
}]*/
var obj = { one: 1, "two": 2, three: 3 };
var obj2 = {
    "two" : 2,
    three : 3
};
