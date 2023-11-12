#include<iostream>
using namespace std;
int main() {
int n;
cout<<"Enter the number of elements in the array: ";
cin>>n;
cout<<"Enter the elements of the array (in non decreasing order): ";
int arr[n];
for(int i=0; i<n; i++) {
    cin>>arr[i];
}
int arr2[n]={0};
int k=arr[0];
int j=1;
arr2[0]=arr[0];
for(int i=1; i<n; i++) {
    if(k<arr[i]) {
        arr2[j]=arr[i];
        j=j+1;
        k=arr[i];
    } 
}
for(int i=0; i<n; i++) {
    cout<<arr2[i]<<" ";
}

    return 0;
}