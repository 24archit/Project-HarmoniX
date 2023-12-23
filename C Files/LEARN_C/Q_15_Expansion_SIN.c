#include <stdio.h>
int main() {
    float x;
    printf("Enter the value of x (in radians): ");
    scanf("%f", &x);
    int n;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    float sinx = 0.0;
    float term = x;
    for (int i = 1, j = 2; i <= n; i++, j += 2) {
        if (i % 2 == 0) {
            sinx = sinx -term;
        } else {
            sinx = sinx + term;
        }
        term = term *(x * x) / (j * (j + 1));
    }
    printf("Approximate value of sin(x): %f\n", sinx);
    return 0;
}

