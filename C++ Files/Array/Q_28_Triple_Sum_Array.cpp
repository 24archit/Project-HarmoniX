#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number of elements in an array: "<<endl;
    cin>>n;
    cout<<"Enter the Number: "<<endl;
    int a;
    cin>>a;
    int s;
    int arr[n];
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    for(int j=0; j<=n; j++) {
        for(int k=1; k<j; k++) {
            for(int l=2; l<k; l++) {
               s = arr[j] +arr[k] +arr[l] ;
                if(s==a) {
                   // if(arr[j]<arr[k]<arr[l]) {
                        cout<<arr[j]<<", "<<arr[k]<<", "<<arr[l]<<endl;
                   // }
                   /* else if(arr[j]<arr[l]<arr[k]) {
                        cout<<arr[j]<<", "<<arr[l]<<", "<<arr[k]<<endl;
                    }
                    else if(arr[l]<arr[j]<arr[k]) {
                        cout<<arr[l]<<", "<<arr[j]<<", "<<arr[k]<<endl;
                    }
                    else if(arr[l]<arr[k]<arr[j]) {
                        cout<<arr[l]<<", "<<arr[k]<<", "<<arr[j]<<endl;
                    }
                    else if( arr[k]<arr[j]<arr[l]) {
                        cout<<arr[k]<<", "<<arr[j]<<", "<<arr[l]<<endl;
                    }
                    else if(arr[k]<arr[j]<arr[l]) {
                        cout<<arr[k]<<", "<<arr[j]<<", "<<arr[l]<<endl;
                    }
                    else if ( arr[j] == arr[k] == arr[l]) {
                        cout<<arr[j]<<", "<<arr[k]<<", "<<arr[l]<<endl;
                    }*/
                }
            }
        }
    }
    return 0;
}