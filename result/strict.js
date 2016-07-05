"use strict";

// strict mode

function foo() {
    // strict mode
}
function foo() {
    "use strict";
    // strict mode
}

function foo2() {
    // not strict mode
};

(function() {
    "use strict";
    function bar() {
        // strict mode
    }
}());
/*eslint strict: ["error", "global"]*/

function foo() {
}
/*eslint strict: ["error", "global"]*/

function foo() {
    "use strict";
}
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
    "use strict";
}
/*eslint strict: ["error", "global"]*/

"use strict";

function foo() {
}
/*eslint strict: ["error", "function"]*/

"use strict";

function foo() {
}
/*eslint strict: ["error", "function"]*/

function foo() {
}

(function() {
    function bar() {
        "use strict";
    }
}());
/*eslint strict: ["error", "function"]*/
/*eslint-env es6*/

// Illegal "use strict" directive in function with non-simple parameter list.
// This is a syntax error since ES2016.
function foo(a = 1) {
    "use strict";
}

// We cannot write "use strict" directive in this function.
// So we have to wrap this function with a function with "use strict" directive.
function foo(a = 1) {
}
/*eslint strict: ["error", "function"]*/

function foo() {
    "use strict";
}

(function() {
    "use strict";

    function bar() {
    }

    function baz(a = 1) {
    }
}());

var foo = (function() {
    "use strict";

    return function foo(a = 1) {
    };
}());
/*eslint strict: ["error", "never"]*/

"use strict";

function foo() {
}
/*eslint strict: ["error", "never"]*/

function foo() {
    "use strict";
}
/*eslint strict: ["error", "never"]*/

function foo() {
}
// "strict": "error"

function foo() {
}
// "strict": "error"

(function() {
    function bar() {
        "use strict";
    }
}());
// "strict": "error"

"use strict";

function foo() {
}
// "strict": "error"

function foo() {
    "use strict";
}
// "strict": "error"

(function() {
    "use strict";
    function bar() {
        "use strict";
    }
}());
