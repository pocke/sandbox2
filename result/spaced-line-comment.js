// When ["never"]
// This is a comment with a whitespace at the beginning
//When ["always"]
//This is a comment with no whitespace at the beginning
var foo = 5;
// When ["always",{"exceptions":["-","+"]}]
//------++++++++
// Comment block
//------++++++++
// When ["always"]
// This is a comment with a whitespace at the beginning
var foo = 5;
//When ["never"]
//This is a comment with no whitespace at the beginning
var foo = 5;
// When ["always",{"exceptions":["-"]}]
//--------------
// Comment block
//--------------
// When ["always",{"exceptions":["-+"]}]
//-+-+-+-+-+-+-+
// Comment block
//-+-+-+-+-+-+-+
