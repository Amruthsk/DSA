//check firstMissingPositive


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    // is 1 present
    let hasOne = false;
    for(let x of nums){if(x==1) hasOne = true;}
    if(!hasOne) return 1;


    //replace negative and out of bound with 1
    for(let i=0; i < n; i++){
        if(nums[i] <= 0 || nums[i] > n) nums[i] =1;
    }

    // marking present 

    for(let i=0; i < n; i++){
        let val = Math.abs(nums[i]);
        let idx = val -1;

        nums[idx] = - Math.abs(nums[idx])
    
    }

// checking for final answer
for(let i=0; i < n; i++){
    if(nums[i]>0) return i+1;
}


return n+1;
};