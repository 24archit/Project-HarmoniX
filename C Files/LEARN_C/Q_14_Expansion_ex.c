#include<stdio.h>
int main() {
    float n=0;
    float ex=1;
    float x, dummy=1;
    printf("Enter the value of x: ");
    scanf("%f", &x);
    int a;
    printf("Enter the number of terms: ");
    scanf("%d", &a);
    for(int i=1; i<a; i++){
        dummy = (dummy*x)/i;
        ex =ex+ dummy;
    }
    printf("%f", ex);
    return 0;
}