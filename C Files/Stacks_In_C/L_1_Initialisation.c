#include<stdio.h>
#include<stdlib.h>
struct stack {
    int top;
    int size;
    int *arr;
};
int main(){
    struct stack S;
    S.top=-1;
    S.size=100;
    S.arr = (int*)malloc(S.size*sizeof(int));


    return 0;
}