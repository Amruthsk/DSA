let result = Array(m +n).fill(0);
let i = 0;
let j = 0;
let k = 0;

while (i < m && j < n){
    if (nums[i]<nums[j]){
        result[k] = nums1[i];
        i++;
        k++;
    }
    else{
        result[k] = nums2[j];
        j++;
        k++;

    }

}

// when one of the array get exhausted
while(i < m) {
    // nums1 still got element
            result[k] = nums1[i];
            i++;
            k++;

}

while (j < n) {
  // nums2 still got element
  result[k] = nums2[j];
  j++;
  k++;
}
// assigning
// nums1 = result;

// update - changing 
for(let i = 0; i< result.length; i++){
    nums1[i] = result[i];
}