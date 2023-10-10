#include <stdio.h>
#include <math.h>

// Function to calculate factorial
double factorial(int n) {
    if (n == 0) {
        return 1.0;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    double x, sum = 0.0;
    int n;

    printf("Enter the value of x in radians: ");
    scanf("%lf", &x);

    printf("Enter the number of terms in the Taylor series expansion: ");
    scanf("%d", &n);

    // Calculate the sine function using Taylor series expansion
    for (int i = 0; i < n; i++) {
        int exponent = 2 * i + 1;
        double term = pow(-1, i) * pow(x, exponent) / factorial(exponent);
        sum += term;
    }

    printf("sin(%lf) = %lf\n", x, sum);

    return 0;
}
