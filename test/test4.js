const objectAssign = require('object-assign');
 
//console.log(objectAssign({foo: 0}, {bar: 1}));
//=> {foo: 0, bar: 1} 
 var a={baz:2}
// multiple sources 
objectAssign(a, {baz: 1});
//change a
console.log(a)
 var b={baz:2}
objectAssign({}, b, {baz: 1});
console.log(b)
//=> {foo: 0, bar: 1, baz: 2} 
 
// overwrites equal keys 
//console.log(objectAssign({foo: 0}, {foo: 1}, {foo: 2}));
//=> {foo: 2} 
 
// ignores null and undefined sources 
//console.log(objectAssign({foo: 0}, null, {bar: 1}, undefined));
//=> {foo: 0, bar: 1} 