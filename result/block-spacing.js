/*eslint block-spacing: "error"*/

function foo() {return true;}
if (foo) { bar = 0;}
/*eslint block-spacing: "error"*/

function foo() { return true; }
if (foo) { bar = 0; }
/*eslint block-spacing: ["error", "never"]*/

function foo() { return true; }
if (foo) { bar = 0;}
/*eslint block-spacing: ["error", "never"]*/

function foo() {return true;}
if (foo) {bar = 0;}
