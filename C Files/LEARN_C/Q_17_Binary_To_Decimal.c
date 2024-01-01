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
        ans = (pow(2, i) * digit) + ans;
        n = n / 10;
        i++;
    }
    printf("Given binary in Decimal system will be: %d\n", ans);
    return 0;
}



