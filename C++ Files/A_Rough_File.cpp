#include <iostream>
using namespace std;
void primeFactorization(int n, int divisor = 2) {
    if (n <= 1) {
        return;
    }
    if (n % divisor == 0) {
        cout << divisor << " "; 
        while (n % divisor == 0) {
            n =  n/divisor;
        }
    }
    primeFactorization(n, divisor + 1);
}
int main() {
    int num;
    cout << "Enter a number to find its prime factorization: ";
    cin >> num;
    if (num <= 0) {
        cout << "Please enter a positive integer.\n";
        return 1; 
    }
    cout << "Prime Factorization of " << num << ": ";
    primeFactorization(num);
    return 0; 
}