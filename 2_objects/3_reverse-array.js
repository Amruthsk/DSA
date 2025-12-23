function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


let arr = [1,2,3,4,5,6]

let i = 0; //starting index
let j = arr.length -1; // last index

while(i<=j){
    swap(arr,i,j);
    i++;
    j--;
}

console.log(arr)