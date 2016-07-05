/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}
/*eslint valid-jsdoc: "error"*/

// expected @param tag for parameter num1 but found num instead
// missing @param tag for parameter num2
// missing return type
/**
 * Add two numbers.
 * @param {number} num The first number.
 * @returns The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

// missing brace
// missing @returns tag
/**
 * @param {string name Whom to greet.
 */
function greet(name) {
    console.log("Hello " + name);
}

// missing parameter type for num1
// missing parameter description for num2
/**
 * Represents a sum.
 * @constructor
 * @param num1 The first number.
 * @param {number} num2
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}
/*eslint valid-jsdoc: "error"*/
/*eslint-env es6*/

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

// default options allow missing function description
// return type `void` means the function has no `return` statement
/**
 * @param {string} name Whom to greet.
 * @returns {void}
 */
function greet(name) {
    console.log("Hello " + name);
}

// @constructor tag allows missing @returns tag
/**
 * Represents a sum.
 * @constructor
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

// class constructor allows missing @returns tag
/**
 * Represents a sum.
 */
class Sum {
    /**
     * @param {number} num1 The first number.
     * @param {number} num2 The second number.
     */
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
}

// @abstract tag allows @returns tag without `return` statement
class Widget {
    /**
    * When the state changes, does it affect the rendered appearance?
    * @abstract
    * @param {Object} state The new state of the widget.
    * @returns {boolean} Is current appearance inconsistent with new state?
    */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}

// @override tag allows missing @param and @returns tags
class WonderfulWidget extends Widget {
    /**
     * @override
     */
    mustRender (state) {
        return state !== this.state; // shallow comparison
    }
}
/*eslint valid-jsdoc: ["error", { "prefer": { "arg": "param", "argument": "param", "class": "constructor", "return": "returns", "virtual": "abstract" } }]*/
/*eslint-env es6*/

/**
 * Add two numbers.
 * @arg {int} num1 The first number.
 * @arg {int} num2 The second number.
 * @return {int} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Represents a sum.
 * @class
 * @argument {number} num1 The first number.
 * @argument {number} num2 The second number.
 */
function sum(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

class Widget {
    /**
     * When the state changes, does it affect the rendered appearance?
     * @virtual
     * @argument {Object} state The new state of the widget.
     * @return {boolean} Is current appearance inconsistent with new state?
     */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}
/*eslint valid-jsdoc: ["error", { "preferType": { "Boolean": "boolean", "Number": "number", "object": "Object", "String": "string" } }]*/
/*eslint-env es6*/

/**
 * Add two numbers.
 * @param {Number} num1 The first number.
 * @param {Number} num2 The second number.
 * @returns {Number} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Output a greeting as a side effect.
 * @param {String} name Whom to greet.
 * @returns {void}
 */
function greet(name) {
    console.log("Hello " + name);
}

class Widget {
    /**
     * When the state changes, does it affect the rendered appearance?
     * @abstract
     * @param {object} state The new state of the widget.
     * @returns {Boolean} Is current appearance inconsistent with new state?
     */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}
/*eslint valid-jsdoc: ["error", { "requireReturn": false }]*/

// unexpected @returns tag because function has no `return` statement
/**
 * @param {string} name Whom to greet.
 * @returns {string} The greeting.
 */
function greet(name) {
    console.log("Hello " + name);
}

// add @abstract tag to allow @returns tag without `return` statement
class Widget {
    /**
     * When the state changes, does it affect the rendered appearance?
     * @param {Object} state The new state of the widget.
     * @returns {boolean} Is current appearance inconsistent with new state?
     */
    mustRender (state) {
        throw new Error("Widget subclass did not implement mustRender");
    }
}
/*eslint valid-jsdoc: ["error", { "requireReturn": false }]*/

/**
 * @param {string} name Whom to greet.
 */
function greet(name) {
    console.log("Hello " + name);
}
/*eslint valid-jsdoc: ["error", { "requireReturnType": false }]*/

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}
/*eslint valid-jsdoc: ["error", { "matchDescription": ".+" }]*/

// missing function description
/**
 * @param {string} name Whom to greet.
 * @returns {void}
 */
function greet(name) {
    console.log("Hello " + name);
}
/*eslint valid-jsdoc: ["error", { "requireParamDescription": false }]*/

/**
 * Add two numbers.
 * @param {int} num1
 * @param {int} num2
 * @returns {int} The sum of the two numbers.
 */
function add(num1, num2) {
    return num1 + num2;
}
/*eslint valid-jsdoc: ["error", { "requireReturnDescription": false }]*/

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number}
 */
function add(num1, num2) {
    return num1 + num2;
}
