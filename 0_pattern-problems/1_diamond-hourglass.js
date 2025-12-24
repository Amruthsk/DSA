function hourglass(n) {
  //upper
  //for every row
  for (let row = 1; row <= n; row++) {
    //within row space
    let str = "";
    let space = row - 1;
    for (let i = 0; i <= space; i++) {
      str += " ";
    }
    //within row numbers
    let num = row
    while(num <= n){
        str += num + " ";
        num++;

    }
    console.log(str)
  }
  //lower
  for (let row = 1; row <= n - 1; row++) {
    //within row space
    let str = "";
    let space = n-row-1;

    for (let i = 0; i <= space; i++) {
      str += " ";
    }
    //within row numbers
        let num = n-row;
        while (num <= n) {
          str += num + " ";
          num++;
        }
        console.log(str);
  }
}


hourglass(7);
