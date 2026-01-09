function f(n){

    // base case
    if(n==1) return 1;

    // if n != 1
    return n * f(n-1);

}

function factorial(n){
    //1-base
    if(n==1) return 1;
    //2-assume
    let smallerans = factorial(n-1);
    //3-selfwork
    let result = n * smallerans;

    return result; 
}



// factorial with loops
    function factorialwithLoops(n){
        let ans = 1;
        for(let i =1; i <= n; i++){
            ans = ans * i;
        }
        return ans;
    }