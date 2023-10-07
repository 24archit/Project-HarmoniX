#include<iostream>
using namespace std;
int main() {
    int n;
    int a;
    int sum;
    cout<<"Enter the number of elements in the array: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array: "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    cout<<"Enter the target number: "<<endl;
    cin>>a;
    for(int j=0;j<n; j++) {
        for(int k=j+1; k<n; k++) {
            if(arr[j] + arr[k]==a){
                cout<<j<<", "<<k<<endl;
            }
        }
    }
    return 0;
}