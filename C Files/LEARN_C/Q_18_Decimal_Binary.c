#include<stdio.h>
int main() {
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    int r;
    while(n>0) {
        r = n%2;
        printf("Given Number in Binary is %d", r);
        n=n/2;
    }
    return 0;
}

