fn main(){
    let a:i32 = 10;
    let ptr: &i32 = &a; 
    let dptr: &&i32 = &ptr;


    println!("Address of a = {:p}", &a);

    println!("ptr is pointing to the address = {:p}", ptr);

    println!("Address of ptr = {:p}", &ptr);


    println!("dptr is pointing to the address = {:p}", dptr);

    println!("Address of dptr = {:p}", &dptr);

    println!("Value of a = {}", a);

     println!("*ptr = {}", *ptr);

     println!("**dptr = {}", **dptr);






}