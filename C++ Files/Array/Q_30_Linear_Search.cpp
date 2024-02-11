#include<iostream>
using namespace std;
int main() {
    int n;
    cout <<"Enter the number of elements in the array: "<< endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array (no element should be repeated): "<<endl;
    for(int i=0; i<n ; i++) {
        cin>>arr[i];
    }
    int a;
    cout<<"Enter the number whose index is to be found: "<<endl;
    for(int i=0; i<n; i++) {
        if(arr[i]==a) {
            cout<<"The index of "<<a <<"is: "<<i<<endl;
    }
    }
    return 0;
}