var text = "Hello world".substring(2);
var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
var stringObject = new String("Hello world");
console.log(typeof stringObject);       // "object"

var text = "Hello world";
console.log(typeof text);               // "string"

var booleanObject = new Boolean(false);
if (booleanObject) {    // all objects are truthy!
    console.log("This executes");
}
/*eslint no-new-wrappers: "error"*/

var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String;
var numberObject = new Number;
var booleanObject = new Boolean;
/*eslint no-new-wrappers: "error"*/

var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
