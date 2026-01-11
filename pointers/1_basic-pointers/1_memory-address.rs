fn main(){
    let x = 42;
    let p = &x;

println!("Value via pointer: {}", *p);

println!("Address of x: {:p}", p);

}

