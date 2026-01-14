

fn main(){
    // heap allocation
    // std dynamic alloc
    // fixed size
    let ptr = Box::new(42);

    println!("Value in heap: {}", *ptr); 
    println!("Address in heap: {:p}", ptr); 

 

    let vault = Box::new(108); 
    println!("Vault Value: {} | Locus: {:p}", *vault, vault);

    // array dynamic allox
    // expandable size
    // current capacity 3
     let mut row = Vec::with_capacity(3); 

     for i in 1..=3 {
        row.push(i * 10);
    }


    println!("Row Data: {:?} | Capacity: {}", row, row.capacity());


    // rust doubles current capacity
    row.push(40);
    println!("New Data: {:?} | New Capacity: {}", row, row.capacity());




    

}