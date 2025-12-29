function transpose(matrix){
  // r * c => c * r
  let r = matrix.length;
  let c = matrix[0].length;
  // resultant matrix c * r
  let res = Array.from({ length: c }, () => new Array(r));

  // not swapping ! migrating read & write
  //for every row
  for(let row = 0;row < r; row++){
    // for every colum in row migrate
    for(let col =0;col < c; col++ ){
        // assign directly
        res[col][row] = matrix[row][col]

    }
  }

  return res;
}