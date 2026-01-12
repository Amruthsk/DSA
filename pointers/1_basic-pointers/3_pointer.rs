fn main(){
    let val: i32 = 25;
    let ptr = &val;

    //Print Value
    println!("value: {}", ptr);

    //Print Address
    println!("Address: {:p}", ptr);

    //Print Dereferenced
    println!("value: {}", *ptr)
}