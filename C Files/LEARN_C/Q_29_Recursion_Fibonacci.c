#include<stdio.h>
int fib(int n) {
    if(n==1 || n==2){
        return 1;
    }
    else {
        return (fib(n-1)+fib(n-2));
    }
}
int main() {
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    int c = fib(n);
    printf("%d", c);




    return 0;
}