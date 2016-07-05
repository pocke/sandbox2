/*eslint operator-assignment: ["error", "always"]*/

x = y;
x += y;
x = y * z;
x = (x * y) * z;
x[0] /= y;
x[foo()] = x[foo()] % 2;
x = y + x; // `+` is not always commutative (e.g. x = "abc")
/*eslint operator-assignment: ["error", "always"]*/

x = x + y;
x = y * x;
x[0] = x[0] / y;
x.y = x.y << z;
/*eslint operator-assignment: ["error", "never"]*/

x = x + y;
x.y = x.y / a.b;
/*eslint operator-assignment: ["error", "never"]*/

x *= y;
x ^= (y + z) / foo();
