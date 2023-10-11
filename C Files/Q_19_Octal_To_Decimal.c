#include <stdio.h>
#include <math.h>
int main() {
    int n;
    printf("Enter the Number: ");
    scanf("%d", &n);
    int digit;
    int ans = 0;
    int i = 0;
    while (n != 0) {
        digit = n % 10;
        ans = (int)(pow(8, i) * digit) + ans;
        n = n / 10;
        i++;
    }
    printf("Given Octal in Decimal system will be: %d\n", ans);
    return 0;
}



