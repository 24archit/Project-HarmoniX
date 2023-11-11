#include <iostream>
#include <math.h>
using namespace std;

int digit(int n) {
    int count = 0;
    while (n > 0) {
        count++;
        n = n / 10;
    }
    return count;
}

void storeinarr(int n, int arr[]) {
    int digits = digit(n);
    for (int i = 0; i < digits; i++) {
        arr[i] = n % 10;
        n = n / 10;
    }
}

bool compare(int a, int b) {
    int digitsA = digit(a);
    int digitsB = digit(b);

    return (a * pow(10, digitsB) + b) < (b * pow(10, digitsA) + a);
}

void customSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            if (compare(arr[i], arr[j])) {
                swap(arr[i], arr[j]);
            }
        }
    }
}

int main() {
    int n;
    cout << "Enter the number of elements in the array: " << endl;
    cin >> n;
    int arr[n];
    cout << "Enter the elements of the array: " << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    customSort(arr, n);

    cout << "Largest number: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i];
    }
    return 0;
}
