#include<stdio.h>
int sumofdigits(int n) {
    if(n==0){
        return 0;
    }
    else {
        return (n%10) +sumofdigits(n/10);
    }
}
int main() {
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    int sum =sumofdigits(n);
    printf("%d", sum);
    return 0;
}