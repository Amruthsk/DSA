var groupAnagrams = function (strs) {

let resMap = new Map();

for (let s of strs)
{
//frequency
    let count = new Array(26).fill(0);
    for (let char of s){
        count [char.charCodeAt(0)-97]++;

    }
//key
let key = count.join('#');

//initialize | update
if(!resMap.has(key)){
    resMap.set(key, [])
}

// update
resMap.get(key).push(s);

}


return Array.from(resMap.values());


};
