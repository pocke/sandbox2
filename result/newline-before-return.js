function foo(bar) {
  var baz = 'baz';
  if (!bar) {
    bar = baz;
    return bar;
  }
  return bar;
}
function foo(bar) {
  var baz = 'baz';

  if (!bar) {
    bar = baz;

    return bar;
  }

  return bar;
}
/*eslint newline-before-return: "error"*/

function foo(bar) {
    if (!bar) {
        return;
    }
    return bar;
}

function foo(bar) {
    if (!bar) {
        return;
    }
    /* multi-line
    comment */
    return bar;
}
/*eslint newline-before-return: "error"*/

function foo() {
    return;
}

function foo() {

    return;
}

function foo(bar) {
    if (!bar) return;
}

function foo(bar) {
    if (!bar) { return };
}

function foo(bar) {
    if (!bar) {
        return;
    }
}

function foo(bar) {
    if (!bar) {
        return;
    }

    return bar;
}

function foo(bar) {
    if (!bar) {

        return;
    }
}

function foo() {

    // comment
    return;
}
