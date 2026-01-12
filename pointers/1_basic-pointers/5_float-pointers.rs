fn main(){
    //float f32 - 4bytes
    
    let var_f: f32 = 3.145;
    let ptr_f: &f32 = &var_f;

    // double f64 - 8 bytes for higher precision
    let var_d: f64 = 3.1455523;
    let ptr_d: &f64 = &var_d;

   println!("Address of f32 var = {:p}", &var_f);
   
   println!("Value at ptr_f = {}", *ptr_f);


   println!("Address of f64 var = {:p}", &var_d);

   println!("Value at ptr_d = {}", *ptr_d);



}