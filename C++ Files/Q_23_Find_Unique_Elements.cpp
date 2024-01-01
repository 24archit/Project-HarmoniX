// #include<iostream>
// using namespace std;
// void unique (int arr[], int n) {
//     bool isduplicate;
//     for( int j=0; j<n; j++) {
//         isduplicate = false;
//         for(int k=0; k<n; k++) {
//             if(arr[j] ==arr[k] ) {
//                 isduplicate = true;
               
//             }  
//         }
//         if(!isduplicate) {
//             cout<<arr[j]<<endl;
//         }
//     }
// }
// int main() {
//     //int a;
//     //cin>>a;
//     //for(int k=1; k<=a; k++){
//     int n;
//     cin>>n;
//     int arr[n];
//     for(int i=0; i<n; i++) {
//         cin>>arr[i]; }
//         unique(arr, n);
    

//     return 0;

// }
#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the value of n: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements in the array: "<<endl;
    for(int i=0; i<n ;i++){
        cin>>arr[i];
    }
    int ans=0;
    for(int i=0; i<n; i++){
        ans = ans^arr[i];
    }
    for(int i =0 ; i<n; i++){
        ans = ans ^i;
    }
    cout<<"The duplicate element is: "<<ans;
    return 0;
}