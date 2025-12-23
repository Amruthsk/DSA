let str = "javascript";
let freqmap = {};

for(const char of str){
    if(freqmap[char]){freqmap[char] += 1;}
    else{freqmap[char] = 1;}
}

console.log(freqmap);