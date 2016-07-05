var now = Date.now(),
    inOneHour = now + (60 * 60 * 1000);
/*eslint no-magic-numbers: "error"*/

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);
/*eslint no-magic-numbers: "error"*/

var data = ['foo', 'bar', 'baz'];

var dataLast = data[2];
/*eslint no-magic-numbers: "error"*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
/*eslint no-magic-numbers: ["error", { "ignore": [1] }]*/

var data = ['foo', 'bar', 'baz'];
var dataLast = data.length && data[data.length - 1];
/*eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }]*/

var data = ['foo', 'bar', 'baz'];
var dataLast = data[2];
/*eslint no-magic-numbers: ["error", { "enforceConst": true }]*/

var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
/*eslint no-magic-numbers: ["error", { "detectObjects": true }]*/

var magic = {
  tax: 0.25
};

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * magic.tax);
/*eslint no-magic-numbers: ["error", { "detectObjects": true }]*/

var TAX = 0.25;

var magic = {
  tax: TAX
};

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * magic.tax);
