#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the size of the array: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array: "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
    }
    int rev[n];
    for(int j=0; j<n;j++) {
       rev[j]=arr[ n-j-1];
    }
    for(int k=0; k<n;k++){
        cout<<rev[k]<<" ";   
         }
    return 0;
}
/*#include<iostream>
#include<algorithm>
using namespace std;
void printarray(int abc[], int size) {
    for(int j =0; j<size; j++) {
        cout<<abc[j]<<" ";
    }
    }
int main() {
    int n;
    cout <<"Enter the size of the array: "<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array: "<<endl;
    for(int i=0; n>i; i++) {
        cin>>arr[i];
    }
    int start =0; int end = (n-1);
    while(start<=end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
    printarray(arr, n);
    

return 0;
}*/
