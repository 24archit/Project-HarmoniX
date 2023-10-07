#include <stdio.h>

int main() {
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    int ans = 1;
    for (int i = 1; i <= n; i++) {
        ans = ans * i;
    }
    printf("Factorial of %d is: %d\n", n, ans);
    return 0;
}
