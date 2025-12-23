// objects

let x = {name :"Dhoni",age:43}

console.log(x);
// how ot access key value pair?
// - from key we can access value but not viceversa(?- keys are unique, but mutiple different keys can have same value)
// - key as string
// x["name"]---->return Dhoni
// key
// x.name ---> return Dhoni

console.log(x["name"]);

// ## objects mutable
x.name = "Kholi"

console.log(x["name"]);

//x.["name"] = "Raina"; //error



console.log(x);

// ## add new property /key already created object
// - its just like assignment
 x.marks = 100;
 x.profession = "cricketer";

console.log(x);

// ## delet  property /key already created object
// - delete keyword + object

 delete x.profession;
 console.log(x);