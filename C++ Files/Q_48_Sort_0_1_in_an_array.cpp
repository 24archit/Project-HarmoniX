#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int n;
    cout<<"Enter n: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the numbers (either 0 or 1)"<<endl;
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    for(int i=0; i<n; i++){
        for(int j=i; j<n;j++ ){
            if(arr[i]>=arr[j]){
                swap(arr[i], arr[j]);
            }
        }
    }
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}