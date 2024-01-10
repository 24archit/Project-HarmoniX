#include<iostream>
#include<climits>
using namespace std;

int maxarea(int arr[], int n){
    int max = INT_MIN;
    int i = 0, j = n - 1;

    while (i < j) {
        int min_height = min(arr[i], arr[j]);
        int width = j - i;
        int current_area = min_height * width;

        if (current_area > max) {
            max = current_area;
        }

        if (arr[i] < arr[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
}

int main(){
    int n;
    cout << "Enter the number of elements in the array: " << endl;
    cin >> n;

    int* arr = new int[n];

    cout << "Enter the heights of the bars in the array: " << endl;
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int result = maxarea(arr, n);

    cout << "Maximum water that can be contained is: " << result << endl;

    delete[] arr; // Don't forget to free the allocated memory

    return 0;
}
