#include<stdio.h>
int main() {
    int isprime =1;
    int n;
    printf("Enter the number: \n");
    scanf("%d", &n);
    int remainder;
    for(int i=2; i<n; i++) {
        remainder = n%i;

        if(remainder==0) {
            printf("Not Prime");
            break;
        }
        
    }
    if(isprime) {
        printf("Prime");
    }
    return 0;
}