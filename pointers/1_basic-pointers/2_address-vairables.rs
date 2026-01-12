fn main(){
    let var: i32 = 10;
    
    let base_ptr = &var as *const i32;

    unsafe{
        let next_locus = base_ptr.add(1);
         println!("Base: {:p}", base_ptr); //Base: 0x8a0fdfac4
         println!("Base + 1: {:p}", next_locus); //Base + 1: 0x8a0fdfac8

    }
}