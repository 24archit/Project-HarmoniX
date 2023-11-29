#include<stdio.h>
int sum(int n);
int main() {
    int n;
    printf("Enter the number : ");
    scanf("%d", &n);
    if(n<0) {
        printf("Enter a non-negative integer");
        return 1;
    }
    printf("%d", sum(n));

    return 0;
}
int sum(int n) {
    if(n==1) {
        return 1;
    }
    int k=0;
    k= sum(n-1) + n;
    return k;
}