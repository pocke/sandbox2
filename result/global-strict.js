"use strict";
"use strict";

function foo() {
    return true;
}
function foo() {
    "use strict";

    return true;
}

(function() {
    "use strict";

    // other code
}());
