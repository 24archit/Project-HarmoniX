#include<stdio.h>
int power(int n, int m){
    if(m==0){
        return 1;
    }
    else {
        return (n*power(n, m-1));
    }
}
int main() {
    int n, m;
    printf("Enter the base : ");
    scanf("%d", &n);
    printf("Enter the exponent: ");
    scanf("%d", &m);
    int pow = power(n, m);
    printf("%d", pow);




    return 0;
}