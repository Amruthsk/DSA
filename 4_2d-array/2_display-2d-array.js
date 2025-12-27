function display(grid){
    let str ="";
    // print the whole grid row by row
    for(let i=0; i < grid.length;i++){
        // print all the elements inside the ith row
        for(let j=0; j < grid[i].length;j++){
            str += grid[i][j]+ " ";
        }
    }
    console.log(str);
}

let grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [3, 4, 8, 9],
];


display(grid);
