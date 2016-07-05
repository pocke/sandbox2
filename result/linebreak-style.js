/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a'; // \r\n

/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) { // \n
    // do stuff \n
}// \n
/*eslint linebreak-style: ["error", "windows"]*/

var a = 'a'; // \n
/*eslint linebreak-style: ["error", "windows"]*/

var a = 'a', // \r\n
    b = 'b'; // \r\n
// \r\n
function foo(params) { // \r\n
    // do stuff \r\n
} // \r\n
