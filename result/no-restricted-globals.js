/*global event, fdescribe*/
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

function onClick() {
    console.log(event);
}

fdescribe("foo", function() {
});
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import event from "event-module";
/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

var event = 1;
