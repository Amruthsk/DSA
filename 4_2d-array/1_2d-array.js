let grid = [[1,2,3,4],[5,6,7,8],[3,4,8,9]];

console.log(grid);



// to create a 2d array of 5 * 6 => 5 rows * 6 columns - all elements 0
let arr = Array(5); // outer

for(let i =0; i < 5;i++ ){
    let inner = Array(6).fill(0);
    arr[i] = inner;
}

console.log(arr);

// assign value 
arr[0][0] = 11;
console.log(arr);

