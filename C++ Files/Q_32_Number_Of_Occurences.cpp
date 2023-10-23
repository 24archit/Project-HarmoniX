#include <iostream>
using namespace std;

int LastOccurrenceBinarySearch(int n, int arr[], int a) {
    int start = 0;
    int end = n - 1;
    int b = -1;
    while (start <= end) {
        int mid = start + (end - start) / 2;
        if (arr[mid] == a) {
            b = mid;
            start = mid + 1;  
        } else if (arr[mid] > a) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return b;
}

int FirstOccurrenceBinarySearch(int n, int arr[], int a) {
    int start = 0;
    int end = n - 1;
    int b = -1;
    while (start <= end) {
        int mid = start + (end - start) / 2;
        if (arr[mid] == a) {
            b = mid;
            end = mid - 1;  
        } else if (arr[mid] > a) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return b;
}

int main() {
    int n;
    cout << "Enter the number of elements in the array: " << endl;
    cin >> n;
    int arr[n];
    cout << "Enter the elements in the array: " << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << "Enter the number to be analyzed: " << endl;
    int a;
    cin >> a;

    int lastOccurrenceIndex = LastOccurrenceBinarySearch(n, arr, a);
    int firstOccurrenceIndex = FirstOccurrenceBinarySearch(n, arr, a);

    if (firstOccurrenceIndex != -1 && lastOccurrenceIndex != -1 ) {
        cout << "Number of Occurrence : " << (lastOccurrenceIndex-firstOccurrenceIndex +1) << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }

    return 0;
}
