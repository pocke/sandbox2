if (foo == null) {
  bar();
}
/*eslint no-eq-null: "error"*/

if (foo == null) {
  bar();
}

while (qux != null) {
  baz();
}
/*eslint no-eq-null: "error"*/

if (foo === null) {
  bar();
}

while (qux !== null) {
  baz();
}
