var fullPath = __dirname + "/foo.js";
var fullPath = path.join(__dirname, "foo.js");
var fullPath = path.resolve(__dirname, "foo.js");
/*eslint no-path-concat: "error"*/

var fullPath = __dirname + "/foo.js";

var fullPath = __filename + "/foo.js";

/*eslint no-path-concat: "error"*/

var fullPath = dirname + "/foo.js";
