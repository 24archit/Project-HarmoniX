#include <stdio.h>
int calculateFactorial(int n); 
int main() {
    int n ;
    printf("Enter the number : ");
    scanf("%d", &n);
    if(n<0) {
        printf("Please Enter a non-negative integer");
        return 1;
    }
    int result = calculateFactorial(n); 
    printf("%d", result);
    return 0;
}

int calculateFactorial(int n) { 
    if (n == 0) {
        return 1;
    }
    int factorial = 1;
    factorial = calculateFactorial(n - 1) * n; 
    return factorial;
}
