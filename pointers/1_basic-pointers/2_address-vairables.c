#include <stdio.h>

int main(){

    int var = 10;

    printf("Base: %p\n",(void*)&var);

    printf("Base + 1: %p\n",(void*)(&var + 1));// 4

    printf("Base + 5: %p\n",(void*)(&var + 5)); //  20 bytes

    return 0;
}