// 238 productExceptSelf

// solution 1
var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = []; //resultant array
  let l = []; // lhs array
  let r = []; // rhs array

  l[0] = 1; // intialize
  for (let i = 1; i < n; i++) {
    l[i] = l[i - 1] * nums[i - 1];
  }

  r[n - 1] = 1; // 
  for (let i = n - 2; i >= 0; i--) {
    // FIX: Start at n-2 to use r[i+1] safely
    r[i] = r[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    // FIX: Use i++ to move forward, not i--
    result[i] = l[i] * r[i];
  }

  return result;
};

// solution 2
var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = new Array(n);

  // Lab 1: Forward Pass (Store Prefix directly in Result)
  let curr = 1;
  for (let i = 0; i < n; i++) {
    res[i] = curr;
    curr *= nums[i];
  }

  // Lab 2: Backward Pass (Multiply Suffix into Result)
  curr = 1; // Resetting 
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= curr;
    curr *= nums[i];
  }

  return res;
};