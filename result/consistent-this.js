var that = this;
jQuery('li').click(function (event) {
    // here, "this" is the HTMLElement where the click event occurred
    that.setFoo(42);
});
/*eslint consistent-this: ["error", "that"]*/

var that = 42;

var self = this;

that = 42;

self = this;
/*eslint consistent-this: ["error", "that"]*/

var that = this;

var self = 42;

var self;

that = this;

foo.bar = this;
/*eslint consistent-this: ["error", "that"]*/

var that;
function f() {
    that = this;
}
/*eslint consistent-this: ["error", "that"]*/

var that;
that = this;

var foo, that;
foo = 42;
that = this;
