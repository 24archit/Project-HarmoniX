#include<iostream>
using namespace std;
int Binarysearch( int n, int arr[]) {
    int start =0;
    int end =n-1;
    int mid;
    while (start <= end) {
            mid = start + (end - start) / 2;

            if (mid > 0 && mid < n- 1) {
                if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
                    return mid;
                } else if (arr[mid] < arr[mid + 1]) {
                    start = mid + 1;
                } else if (arr[mid] < arr[mid - 1]) {
                    end = mid - 1;
                }
            }
            // Handle the case where mid is at the boundary
            else if (mid == 0) {
                start = mid + 1;
            } else if (mid == n- 1) {
                end = mid - 1;
            }
        }

        return -1;  // Not a mountain array
    }

int main() {
    int n;
    cout<<"Enter the number of elements in array: "<<endl;
    cin>>n;
    cout<<"Enter the elements of the array: "<<endl;
    int arr [n];
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    int ans = Binarysearch(n, arr);
    if(ans != -1) {
    cout<<"Index of Maximum valued element is: "<<ans<<endl; }
    else { cout<<"This is not a mountain array."<<endl;
    }
        return 0;
}