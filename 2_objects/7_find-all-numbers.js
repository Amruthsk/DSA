// 448

//creation of negative array to identify 
for(let i=0; i <=nums.lenght; i++){
    let x = Math.abs(nums[i]);
    let idx = x -1;
    // creating -ve values to show the presence of x values
    if(nums[idx] > 0){
        nums[idx] *= -1;
    }
}

let result =[];
//creation of missing array
for(let i=0; i <=nums.lenght; i++){
    if(nums[i]>0){result.push(i+1)}
}

return result