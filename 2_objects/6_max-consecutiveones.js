function maxcons (nums){
    let final_answer = 0;
    let cons_ones = 0;
    //for all elements in an array
    for(let i = 0; i <= nums.length;i++){

        // if i == 1
        if (nums[i] == 1) {
          cons_ones += 1;
        }
        //if i==0
        else {
          final_answer = Math.max(final_answer, cons_ones);
          cons_ones = 0;
        }
    }
    return Math.max(final_answer, cons_ones);
}