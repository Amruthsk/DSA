let obj = {gold : 42};
let ptr = obj;
console.log(ptr.gold);

ptr.gold = 100;
console.log(obj.gold);