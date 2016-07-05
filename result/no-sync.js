/*eslint no-sync: "error"*/

fs.existsSync(somePath);

var contents = fs.readFileSync(somePath).toString();
/*eslint no-sync: "error"*/

obj.sync();

async(function() {
    // ...
});
