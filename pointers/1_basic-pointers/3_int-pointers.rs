fn main(){
    let a: i32 = 10;

    let ptr: &i32 = &a;

    // value of a
    println!("value of a = {}", a);

    // extraction of a
    println!("value of stored at ptr = {}", *ptr);

    // address of a
    println!("Address of a = {:p}", &a);

     println!("ptr points to the  a address = {:p}", ptr);

    // address of pointer
    println!("Address of ptr = {:p}", &ptr);

}