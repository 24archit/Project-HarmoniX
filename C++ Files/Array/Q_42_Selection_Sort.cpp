#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number of elements in the array: ";
    cin>>n;
    cout<<"Enter the elements in the array: "<<endl;
    int arr[n];
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    for(int i=0; i<n; i++) {
        for(int j=i; j<n; j++) {
            if(arr[i]>arr[j]) {
                arr[i]=arr[i] +arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]=arr[i]-arr[j];
            }
        }
    }
    for(int i=0; i<n; i++) {
        cout<<arr[i]<<" ";
    }
    return 0;
}