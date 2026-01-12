fn main(){
    let var: u8 = b'a'; // byte value 97
    let ptr: &u8 = &var;

    // address of var
    println!(" address of var = {:p}", &var);

    // address of var via ptr
    println!(" address of var via ptr = {:p}", ptr);


    // value of var via ptr
    println!(" value of var = {}", var);

    // value of var extraction
    println!(" extraction of var = {}", *ptr);

    // value at ptr
    println!(" value of ptr = {}", *ptr as char);

    // address at ptr
    println!(" address of ptr = {:p}", &ptr);


}