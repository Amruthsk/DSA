#include <stdio.h>

int main() {
    int gold = 42;             
    int* ptr = &gold;          
    
    printf("%p", ptr);        
    printf("%d", *ptr);        
    
    *ptr = 100;     
     printf("%d", gold);                  
    return 0;                  
}