/*eslint prefer-reflect: "error"*/

foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
obj.foo.apply(other, args);

foo.call(undefined, arg);
foo.call(null, arg);
obj.foo.call(obj, arg);
obj.foo.call(other, arg);
/*eslint prefer-reflect: "error"*/

Reflect.apply(undefined, args);
Reflect.apply(null, args);
Reflect.apply(obj.foo, obj, args);
Reflect.apply(obj.foo, other, args);
Reflect.apply(undefined, [arg]);
Reflect.apply(null, [arg]);
Reflect.apply(obj.foo, obj, [arg]);
Reflect.apply(obj.foo, other, [arg]);
/*eslint prefer-reflect: ["error", { "exceptions": ["apply"] }]*/

// in addition to Reflect.apply(...):
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
obj.foo.apply(other, args);
/*eslint prefer-reflect: ["error", { "exceptions": ["call"] }]*/

// in addition to Reflect.apply(...):
foo.call(undefined, arg);
foo.call(null, arg);
obj.foo.call(obj, arg);
obj.foo.call(other, arg);
/*eslint prefer-reflect: "error"*/

Object.defineProperty({}, 'foo', {value: 1})
/*eslint prefer-reflect: "error"*/

Reflect.defineProperty({}, 'foo', {value: 1})
/*eslint prefer-reflect: ["error", { "exceptions": ["defineProperty"] }]*/

Object.defineProperty({}, 'foo', {value: 1})
Reflect.defineProperty({}, 'foo', {value: 1})
/*eslint prefer-reflect: "error"*/

Object.getOwnPropertyDescriptor({}, 'foo')
/*eslint prefer-reflect: "error"*/

Reflect.getOwnPropertyDescriptor({}, 'foo')
/*eslint prefer-reflect: ["error", { "exceptions": ["getOwnPropertyDescriptor"] }]*/

Object.getOwnPropertyDescriptor({}, 'foo')
Reflect.getOwnPropertyDescriptor({}, 'foo')
/*eslint prefer-reflect: "error"*/

Object.getPrototypeOf({}, 'foo')
/*eslint prefer-reflect: "error"*/

Reflect.getPrototypeOf({}, 'foo')
/*eslint prefer-reflect: ["error", { "exceptions": ["getPrototypeOf"] }]*/

Object.getPrototypeOf({}, 'foo')
Reflect.getPrototypeOf({}, 'foo')
/*eslint prefer-reflect: "error"*/

Object.setPrototypeOf({}, Object.prototype)
/*eslint prefer-reflect: "error"*/

Reflect.setPrototypeOf({}, Object.prototype)
/*eslint prefer-reflect: ["error", { "exceptions": ["setPrototypeOf"] }]*/

Object.setPrototypeOf({}, Object.prototype)
Reflect.setPrototypeOf({}, Object.prototype)
/*eslint prefer-reflect: "error"*/

Object.isExtensible({})
/*eslint prefer-reflect: "error"*/

Reflect.isExtensible({})
/*eslint prefer-reflect: ["error", { "exceptions": ["isExtensible"] }]*/

Object.isExtensible({})
Reflect.isExtensible({})
/*eslint prefer-reflect: "error"*/

Object.getOwnPropertyNames({})
/*eslint prefer-reflect: "error"*/

Reflect.getOwnPropertyNames({})
/*eslint prefer-reflect: ["error", { "exceptions": ["getOwnPropertyNames"] }]*/

Object.getOwnPropertyNames({})
Reflect.getOwnPropertyNames({})
/*eslint prefer-reflect: "error"*/

Object.preventExtensions({})
/*eslint prefer-reflect: "error"*/

Reflect.preventExtensions({})
/*eslint prefer-reflect: ["error", { "exceptions": ["preventExtensions"] }]*/

Object.preventExtensions({})
Reflect.preventExtensions({})
/*eslint prefer-reflect: "error"*/

delete foo.bar; // deleting object property
/*eslint prefer-reflect: "error"*/

delete bar; // deleting variable
Reflect.deleteProperty(foo, 'bar');
/*eslint prefer-reflect: ["error", { "exceptions": ["delete"] }]*/

delete bar
delete foo.bar
Reflect.deleteProperty(foo, 'bar');
