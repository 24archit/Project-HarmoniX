#include<stdio.h>
#include<stdlib.h>
int main() {
int *ptr = NULL;
ptr = (int*) calloc(5, sizeof(int));
for(int i =0; i<5; i++){
    printf("%d ", ptr[i]);
}
realloc(ptr, 8);
for(int i =0; i<8; i++){
    printf("\n%d ", ptr[i]);
}
    return 0;
}