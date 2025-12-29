function printcolumn(grid, m, n) {
  let str = "";
  //up to down
  //for every column
  for (let col = 0; col < n; col++) {
    // for every row
    for (let row = 0; row < m; row++) {
      str += grid[row][col] + " ";
    
    }
  }

  console.log(str);
}


let grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [3, 4, 8, 9],
];

printcolumn(grid,3,4);

function printcolumnwaveform(grid, m, n) {
    let str = "";
    for(let col=0;col<n;col++){

    // up to down
    if(col % 2==0){
            for (let row = 0; row < m; row++) {
      str += grid[row][col] + " ";
    }
    }
    // down to up
    else{
    for (let row = m-1 ; row >=0; row-- ){
      str += grid[row][col] + " ";
    }
    }

    
}

console.log(str);

}






printcolumnwaveform(grid, 3, 4);