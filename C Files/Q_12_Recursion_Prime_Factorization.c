#include <iostream>

// Function to find prime factorization using recursion
void primeFactorization(int n, int divisor = 2) {
    // Base case
    if (n <= 1) {
        return;
    }

    // Check if the divisor is a factor of n
    if (n % divisor == 0) {
        std::cout << divisor << " ";

        // Divide n by the divisor until it's no longer divisible
        while (n % divisor == 0) {
            n /= divisor;
        }
    }

    // Recursively find prime factorization for the reduced value of n
    primeFactorization(n, divisor + 1);
}

int main() {
    int num;

    // Input the number
    std::cout << "Enter a number to find its prime factorization: ";
    std::cin >> num;

    // Check if the input is a positive integer
    if (num <= 0) {
        std::cout << "Please enter a positive integer.\n";
        return 1; // Return error code
    }

    // Display the prime factorization
    std::cout << "Prime Factorization of " << num << ": ";
    primeFactorization(num);
    std::cout << "\n";

    return 0; // Return success code
}
