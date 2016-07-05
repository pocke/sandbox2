d3.select("body").selectAll("p").data([4, 8, 15, 16, 23, 42 ]).enter().append("p").text(function(d) { return "I'm number " + d + "!"; });
d3
    .select("body")
    .selectAll("p")
    .data([
        4,
        8,
        15,
        16,
        23,
        42
    ])
    .enter()
    .append("p")
    .text(function (d) {
        return "I'm number " + d + "!";
    });
/*eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 2 }]*/

_.chain({}).map(foo).filter(bar).value();

// Or
_.chain({}).map(foo).filter(bar);

// Or
_
  .chain({}).map(foo)
  .filter(bar);

// Or
obj.method().method2().method3();
/*eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 2 }]*/

_
  .chain({})
  .map(foo)
  .filter(bar)
  .value();

// Or
_
  .chain({})
  .map(foo)
  .filter(bar);

// Or
_.chain({})
  .map(foo)
  .filter(bar);

// Or
obj
  .prop
  .method().prop;

// Or
obj
  .prop.method()
  .method2()
  .method3().prop;
