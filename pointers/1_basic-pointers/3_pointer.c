// no duplication access through address

# include <stdio.h>

int main(){
    int val = 25;
    int *iptr;

    iptr = &val;

    printf("Value via Pointer: %d\n", *iptr); 

    return 0;
}