let foo = "hol\a"; // > foo = "hola"
let bar = /\:/ // same functionality with /:/
/*eslint no-useless-escape: "error"*/

"\'";
'\"';
"\#";
"\e";
/\!/;
/\@/;

/*eslint no-useless-escape: "error"*/

"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
/\\/g;
/\t/g;
/\\w\\$\\*\\^\\./;

