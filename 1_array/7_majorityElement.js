
var majorityElement = function(nums) {
    let candidate = 0; 
    let count = 0; 
    // for every element
    for(let i = 0; i < nums.length; i++){
        //reset set candidate
        if(count == 0){
            candidate = nums[i];
        }

        //voting
        // increase
        if(candidate == nums[i]){
            count++;
        }
        // decrease
        else{
            count--;
        }
    }

    return candidate;
    
};


//tc - O(N)