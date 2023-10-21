#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number of elements in the array: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array (no element should be repeated): "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    int key;
    cout<<"Enter the number to be found: ";
    cin>>key;
    int start =0;
    int end = n-1;
    int mid = (start +end)/2;
    while(start<=end) {
        mid = start +(end -start)/2;
        if(arr[mid]==key) {
           cout<<"Index Number is: "<<mid<<endl;
           break;
        }
        else if(arr[mid]>key) {
            end = mid-1;
        }
        else if( arr[mid]<key) {
            start = mid +1;
        }
        else {cout<<"Array doesn't contain this number."<<endl;}
    }
    return 0;
}

