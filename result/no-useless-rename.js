import { foo as bar } from "baz";
export { foo as bar };
let { foo: bar } = baz;
import { foo as foo } from "bar";
export { foo as foo };
let { foo: foo } = bar;
import { foo } from "bar";
export { foo };
let { foo } = bar;
/*eslint no-useless-rename: "error"*/

import { foo as foo } from "bar";
export { foo as foo };
export { foo as foo } from "bar";
let { foo: foo } = bar;
let { 'foo': foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
/*eslint no-useless-rename: "error"*/

import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as bar } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {}
({ foo: bar }) => {}
/*eslint no-useless-rename: ["error", { ignoreImport: true }]*/

import { foo as foo } from "bar";
/*eslint no-useless-rename: ["error", { ignoreExport: true }]*/

export { foo as foo };
export { foo as foo } from "bar";
/*eslint no-useless-rename: ["error", { ignoreDestructuring: true }]*/

let { foo: foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
