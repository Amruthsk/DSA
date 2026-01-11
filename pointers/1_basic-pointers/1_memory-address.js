
let obj = { val: 42 }; // [obj] ⇔ [Hidden_Pointer_to_Heap_Locus]
let ptr = obj; // [ptr] ⇔ [Copy_of_Pointer]

ptr.val = 100; // (Implicit_Dereference)
console.log(obj.val); // 100 ∵ {Both Pointers target the same Vault}
