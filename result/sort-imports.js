// single - Import single member.
import myMember from "my-module.js";

// multiple - Import multiple members.
import {foo, bar} from "my-module.js";

// all - Import all members, where myModule contains all the exported bindings.
import * as myModule from "my-module.js";
// none - Import module without exported bindings.
import "my-module.js"
/*eslint sort-imports: "error"*/
import 'module-without-export.js';
import * as foo from 'foo.js';
import * as bar from 'bar.js';
import {alpha, beta} from 'alpha.js';
import {delta, gamma} from 'delta.js';
import a from 'baz.js';
import b from 'qux.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import b from 'bar.js';
import c from 'baz.js';

/*eslint sort-imports: "error"*/
import 'foo.js'
import * from 'bar.js';
import {a, b} from 'baz.js';
import c from 'qux.js';

/*eslint sort-imports: "error"*/
import {a, b, c} from 'foo.js'
/*eslint sort-imports: "error"*/
import b from 'foo.js';
import a from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import A from 'bar.js';

/*eslint sort-imports: "error"*/
import {b, c} from 'foo.js';
import {a, b} from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import {b, c} from 'bar.js';

/*eslint sort-imports: "error"*/
import a from 'foo.js';
import * as b from 'bar.js';

/*eslint sort-imports: "error"*/
import {b, a, c} from 'foo.js'
/*eslint sort-imports: ["error", { "ignoreCase": true }]*/

import B from 'foo.js';
import a from 'bar.js';
/*eslint sort-imports: ["error", { "ignoreCase": true }]*/

import a from 'foo.js';
import B from 'bar.js';
import c from 'baz.js';
/*eslint sort-imports: ["error", { "ignoreMemberSort": false }]*/
import {b, a, c} from 'foo.js'
/*eslint sort-imports: ["error", { "ignoreMemberSort": true }]*/
import {b, a, c} from 'foo.js'
/*eslint sort-imports: "error"*/
import a from 'foo.js';
import * as b from 'bar.js';
/*eslint sort-imports: ["error", { "memberSyntaxSortOrder": ['single', 'all', 'multiple', 'none'] }]*/

import a from 'foo.js';
import * as b from 'bar.js';
