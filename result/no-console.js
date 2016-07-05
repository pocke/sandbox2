console.log("Made it here.");
console.error("That shouldn't have happened.");
/*eslint no-console: "error"*/

console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");
/*eslint no-console: "error"*/

// custom console
Console.log("Hello world!");
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

console.warn("Log a warn level message.");
console.error("Log an error level message.");
