if (foo) {
    // ...
} else {
    // ...
}
/*eslint keyword-spacing: ["error", { "before": true }]*/

if (foo) {
    //...
}else if (bar) {
    //...
}else {
    //...
}
/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

// no conflict with `array-bracket-spacing`
let a = [this];
let b = [function() {}];

// no conflict with `arrow-spacing`
let a = ()=> this.foo;

// no conflict with `block-spacing`
{function foo() {}}

// no conflict with `comma-spacing`
let a = [100,this.foo, this.bar];

// not conflict with `computed-property-spacing`
obj[this.foo] = 0;

// no conflict with `generator-star-spacing`
function *foo() {}

// no conflict with `key-spacing`
let obj = {
    foo:function() {}
};

// no conflict with `object-curly-spacing`
let obj = {foo: this};

// no conflict with `semi-spacing`
let a = this;function foo() {}

// no conflict with `space-in-parens`
(function () {})();

// no conflict with `space-infix-ops`
if ("foo"in {foo: 0}) {}
if (10+this.foo<= this.bar) {}

// no conflict with `jsx-curly-spacing`
let a = <A foo={this.foo} bar={function(){}} />
/*eslint keyword-spacing: ["error", { "before": false }]*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}
/*eslint keyword-spacing: ["error", { "before": false }]*/

if (foo) {
    //...
}else if (bar) {
    //...
}else {
    //...
}
/*eslint keyword-spacing: ["error", { "after": true }]*/

if(foo) {
    //...
} else if(bar) {
    //...
} else{
    //...
}
/*eslint keyword-spacing: ["error", { "after": true }]*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

// not conflict with `array-bracket-spacing`
let a = [this];

// not conflict with `arrow-spacing`
let a = ()=> this.foo;

// not conflict with `comma-spacing`
let a = [100, this.foo, this.bar];

// not conflict with `computed-property-spacing`
obj[this.foo] = 0;

// not conflict with `generator-star-spacing`
function* foo() {}

// not conflict with `key-spacing`
let obj = {
    foo:function() {}
};

// not conflict with `no-spaced-func`
class A {
    constructor() {
        super();
    }
}

// not conflict with `object-curly-spacing`
let obj = {foo: this};

// not conflict with `semi-spacing`
let a = this;function foo() {}

// not conflict with `space-before-function-paren`
function() {}

// no conflict with `space-infix-ops`
if ("foo"in{foo: 0}) {}
if (10+this.foo<= this.bar) {}

// no conflict with `space-unary-ops`
function* foo(a) {
    return yield+a;
}

// no conflict with `yield-star-spacing`
function* foo(a) {
    return yield* a;
}

// no conflict with `jsx-curly-spacing`
let a = <A foo={this.foo} bar={function(){}} />
/*eslint keyword-spacing: ["error", { "after": false }]*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}
/*eslint keyword-spacing: ["error", { "after": false }]*/

if(foo) {
    //...
} else if(bar) {
    //...
} else{
    //...
}
/*eslint keyword-spacing: ["error", { "overrides": {
  "if": { "after": false },
  "for": { "after": false },
  "while": { "after": false }
} }]*/

if(foo) {
    //...
} else if(bar) {
    //...
} else {
    //...
}

for(;;);

while(true) {
  //...
}
