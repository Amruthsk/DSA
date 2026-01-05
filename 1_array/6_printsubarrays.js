function printAllSubarrays(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i; j < n; j++) {
      //str += arr[j] + " ";
      str += arr[j] + (j === n - 1 ? "" : " ");
      console.log(str);
    }
  }
}

let arr = [1, 2, 3, 4];
printAllSubarrays(arr);