use std::io;

fn main() {
    println!("Enter size:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).ok();
    let n: usize = input.trim().parse().unwrap_or(0);

    let mut ptr = vec![0; n]; 
    println!("Initial: {:?} | Locus: {:p}", ptr, ptr.as_ptr());

    if n > 0 {
        ptr[0] = 42; 
        ptr[3] = 42;
    }

   
    println!("Updated: {:?}", ptr);


}
