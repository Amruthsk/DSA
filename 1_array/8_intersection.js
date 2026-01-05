// frequency map

var intersection = function (nums1, nums2) {
  let freqMap1 = {};
  for (let i = 0; i < nums1.length; i++) {
    let ele = nums1[i];
    if (freqMap1[ele]) {
      //update
      freqMap1[ele]++;
    }
    //intialize
    else {
      freqMap1[ele] = 1;
    }
  }

  let freqMap2 = {};
  for (let i = 0; i < nums2.length; i++) {
    let ele = nums2[i];
    if (freqMap1[ele]) {
      freqMap2[ele] = 1;
    }
  }

  return Object.keys(freqMap2).map(Number);
};

// better way
// hashset
// unique set
const set1 = new Set(nums1);
// return set
const intersectionSet = new Set();

// for every element
for(const num of nums2){
    //compare
    //present in both
    if(set1.has(num)){
        //add to intersection set
        intersectionSet.add(num);
    }
}

//return in array
return Array.from(intersectionSet);