#include <stdio.h>
#include <math.h>

int main() {
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    
    int r[32]={0}, i = 0;
    int num = 0;

    while (n > 0) {
        r[i] = n % 2;
        n = n / 2;  // Update n by removing the last digit
        i++;
    }

    printf("%d", num);

    return 0;
}
