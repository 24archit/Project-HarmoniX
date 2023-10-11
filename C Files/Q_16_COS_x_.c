#include <stdio.h>
int main() {
    float x;
    printf("Enter the value of x (in radians): ");
    scanf("%f", &x);
    int n;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    float cosx = 0.0;
    float term = 1;
    for (int i = 1, j = 1; i <= n; i++, j += 2) {
        if (i % 2 == 0) {
            cosx = cosx -term;
        } else {
            cosx = cosx + term;
        }
        term = term *(x * x) / (j * (j + 1));
    }
    printf("Approximate value of sin(x): %f\n", cosx);
    return 0;
}

