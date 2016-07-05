/*eslint no-process-env: "error"*/

if(process.env.NODE_ENV === "development") {
    //...
}
/*eslint no-process-env: "error"*/

var config = require("./config");

if(config.env === "development") {
    //...
}
