#include<iostream>
using namespace std;
int max() {
    int n;
    cout<<"Enter the number of elements in the array: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array ( Press Enter afer each space)"<<endl;
    for( int i =0; i<n; i++) {
        cin>>arr[i];
    }
    for(int j=0; j<n; j++) {
        int c =1;
        for(int k=0; k<n; k++) {
            if( arr[j] < arr[k]) {
                c=0;
            }
        }
        if(c){
        cout<<"The most valued element in the array is: "<<arr[j]<<endl;
        }
    }
}
int main () {
    max();
return 0;
}