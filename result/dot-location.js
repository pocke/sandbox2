var a = universe.
        galaxy;

var b = universe
       .galaxy;
/*eslint dot-location: ["error", "object"]*/

var foo = object
.property;
/*eslint dot-location: ["error", "object"]*/

var foo = object.
property;
var bar = object.property;
/*eslint dot-location: ["error", "property"]*/

var foo = object.
property;
/*eslint dot-location: ["error", "property"]*/

var foo = object
.property;
var bar = object.property;
