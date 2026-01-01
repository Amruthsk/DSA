


var longestConsecutive = function (nums) {
    
const numSet = new Set(nums);
let maxLen = 0;

for (let num of numSet) {
  //check for num-1 not present
  if (!numSet.has(num - 1)) {
    let currentNum = num;
    let currentLen = 1;
    // expand
    while (numSet.has(currentNum + 1)) {
      currentNum += 1;
      currentLen += 1;
    }

    // update global max

    maxLen = Math.max(maxLen, currentLen);
  }
}

return maxLen;



};



