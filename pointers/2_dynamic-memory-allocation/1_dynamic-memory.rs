fn main(){
    //static allocation - cant add new ele
    let static_age = [17,18,19,20,21];
    println!("value in static_age: {:?}", static_age);


    // dynamic allocation
    let val = Box::new(42); 
    println!("Value in dynamic vault: {}", *val);
     println!("value in val: {:?}", val);



    // dynamic resixing
    let mut dynamic_ages = vec![17, 19, 18]; 
    dynamic_ages.push(20); 
    dynamic_ages.push(21);
    dynamic_ages.push(22);
     println!("Ages: {:?}", dynamic_ages);


}