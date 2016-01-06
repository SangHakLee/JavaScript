var xml2js = require('xml2js');

var xml = "<root>Hello xml2js!</root>"
var parser = new xml2js.Parser({async: true});
var parser2 = require('xml2json');

// parser.parseString(xml, function (err, result) {
//   console.log('1111');
//   console.dir(result);
// });
// console.log("2222");
//
console.log("1111");
var json = parser2.toJson(xml);
console.log("2222");
console.log(json);