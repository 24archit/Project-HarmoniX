#include<stdio.h>
#include<stdlib.h>
int main() {
    int* ptr = (int*) malloc(4*sizeof(int));
    int* p = ptr;
    for(int i=0; i<4; i++){
        printf("Enter the numbers: ");
        scanf("%d", &(*p));
        p++;
    }
    printf("%p", ptr);

    realloc(ptr, 6*sizeof(int));




    return 0;
}