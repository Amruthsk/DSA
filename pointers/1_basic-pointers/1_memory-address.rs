fn main(){
    let mut x = 42;
    let p = &x;

    // Immutable borrow starts
println!("Value via pointer: {}", *p);

println!("Address of x: {:p}", p);
// Immutable borrow 'p' ends here because it's no longer used

println!("Value via x  : {}", x);

//mutable borrow because 'p' is no longer active
let p_mut = &mut x;
println!("Value via p_mut before: {}", *p_mut);

*p_mut = 100;

println!("Value via p_mut after: {}", *p_mut);

println!("Value via x  after: {}", x);


}

