if (somethingBadHappened) {
    console.error("Something bad happened!");
    process.exit(1);
}
if (somethingBadHappened) {
    throw new Error("Something bad happened!");
}
/*eslint no-process-exit: "error"*/

process.exit(1);
process.exit(0);
/*eslint no-process-exit: "error"*/

Process.exit();
var exit = process.exit;
