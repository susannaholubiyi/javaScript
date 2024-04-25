const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);
console.log(obj)
console.log(obj.count);
console.log(obj.result);

const string = JSON.stringify(obj)
console.log(string);

console.log(JSON.stringify({ x: 5, y: 6}))
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]))