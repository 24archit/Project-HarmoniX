#include<iostream>
using namespace std;
void unique (int arr[], int n) {
    bool isduplicate;
    for( int j=0; j<n; j++) {
        isduplicate = false;
        for(int k=0; k<n; k++) {
            if(arr[j] ==arr[k] ) {
                isduplicate = true;
               
            }  
        }
        if(!isduplicate) {
            cout<<arr[j]<<endl;
        }
    }
}
int main() {
    //int a;
    //cin>>a;
    //for(int k=1; k<=a; k++){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++) {
        cin>>arr[i]; }
        unique(arr, n);
    

    return 0;

}