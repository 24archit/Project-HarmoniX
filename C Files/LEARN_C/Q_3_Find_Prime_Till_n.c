#include<stdio.h>
int main() {
    int n;
    printf("Enter the Number: \n");
    scanf("%d", &n);
    int remainder;
    for(int i=2; i<=n; i++) {
        int isprime=1;
        for(int j=2; i>j; j++) {
            remainder = i%j;
            if(remainder==0){
                isprime =0;
                break;
            }
        }
        if(isprime) {
        printf("%d ", i);
        }
    }
    return 0;
}

