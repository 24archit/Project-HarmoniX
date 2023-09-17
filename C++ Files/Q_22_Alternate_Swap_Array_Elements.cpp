#include<iostream>
using namespace std;
void swap(int arr[], int n) {
int swap[n];
    for( int j=0;j<n; j++) {
        if(j%2==0 && j != (n-1)) {
        swap[j]=arr[j+1];
            }
        else if(j%2==0 && j==(n-1)) {
            swap[j] = arr[j];
        }
        else {
            swap[j] = arr[j-1];
        }
    }
}
int main() {
    int n;
    int j =0;
    cout<<"Enter the size of the array: "<<endl;
    cin>>n;
    int arr[n];
    if (n <= 1) {
        cout << "Array is too small to swap elements." << endl;
        return 0;
    }
    cout<<"Enter the elements of the array: "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    /*int swap[n];
    for( j=0;j<n; j++) {
        if(j%2==0 && j != (n-1)) {
        swap[j]=arr[j+1];
            }
        else if(j%2==0 && j==(n-1)) {
            swap[j] = arr[j];
        }
        else {
            swap[j] = arr[j-1];
        }
    }*/
    swap(arr,n);
        for(int k=0; k<n; k++) {
            cout <<swap[k]<<" ";
        }
    return 0;
}


