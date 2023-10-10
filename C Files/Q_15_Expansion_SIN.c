#include<stdio.h>
int main() {
    float x;
    printf("Enter the value of x: ");
    scanf("%f", &x);
    float ex = x, dummy=x;
    int i, j;
    int a;
    printf("Enter the number of terms: ");
    scanf("%d", &a);
    for( i=1, j=1; i<a; j=j+2, i++){
        if(i%2 != 0) {
             dummy = (-1)*(dummy*x*x)/((j+1)*(j+2));
        }
        else{
            dummy = (dummy*x*x)/((j+1)*(j+2));
        }
        ex =ex+ dummy;
    }
    printf("%f", ex);
    return 0;
}