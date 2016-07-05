function doSomething(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        callback(err);
    }
    callback();
}
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        send.error(err);
    }
    send.success();
}
/*eslint callback-return: ["error", ["done", "send.error", "send.success"]]*/

function foo(err, done) {
    if (err) {
        return done(err);
    }
    done();
}

function bar(err, send) {
    if (err) {
        return send.error(err);
    }
    send.success();
}
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        setTimeout(callback, 0); // this is bad, but WILL NOT warn
    }
    callback();
}
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        process.nextTick(function() {
            return callback(); // this is bad, but WILL NOT warn
        });
    }
    callback();
}
/*eslint callback-return: "error"*/

function foo(err, callback) {
    if (err) {
        callback(err); // this is fine, but WILL warn
    } else {
        callback();    // this is fine, but WILL warn
    }
}
