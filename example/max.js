var maxBy = require('../');
var n = maxBy([9,3,5], function (x) { return x % 3 });
console.log(n);