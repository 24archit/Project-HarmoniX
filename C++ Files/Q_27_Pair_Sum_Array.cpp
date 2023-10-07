#include<iostream>
using namespace std;
int main() {
    int n;
    bool b =false;
    cout<<"Enter the number of elements in the array: "<<endl;
    cin>>n;
    cout<<"Enter the number: "<<endl;
    int p;
    cin>>p;
    int arr[n];
    cout<<"Enter the elements in the array: "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    for(int j=n; j>=0; j--) {
        for(int k=0; k<j;k++) {
           int sum = arr[j] +arr[k];
           if(sum ==p) {
            b = true;
            
                cout<<arr[k]<<", "<<arr[j]<<endl;
            
           }
        }
    }
    if(!b) {
        cout<<"No pair can be generated"<<endl;
    }
    return 0;
}