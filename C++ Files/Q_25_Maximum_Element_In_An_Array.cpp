#include<iostream>
using namespace std;
int main () {
    int n;
    cout<<"Enter the nuhmber of elements: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements (Press Enter afer each number): "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    for(int j =0; j<n; j++) {
        int c=1;
        for (int k=0; k<n; k++) {
            if(arr[j] < arr[k]) {
                 c=0;
                 break;
            }
        }
        if(c==1) {
        cout<<"Maximum valued element is: "<< arr[j];
    }
    }
return 0;
}