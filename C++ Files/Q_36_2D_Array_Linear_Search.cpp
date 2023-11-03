#include<iostream>
using namespace std;
bool ispresent (int arr[][2], int k, int a){
    for(int row =0; row<a; row++) {
        for(int col =0; col<2; col++) {
            if(arr[row][col]==k){
                return 1;
            }
        }
    }
    return 0;
}
int main() {
    int a, b, k;
    cout<<"Enter the number of rows :"<<endl;
    cin>>a;
    cout<<"Enter the number of columns: "<<endl;
    cin>>b;
    cout<<"Enter the elements of the array: "<<endl;
    int arr[a][b];
    for(int row=0; row<a; row++) {
        for(int col=0; col<b; col++) {
            cin>>arr[row][col];
        }
    }
    cout<<"Enter the element to be searched: "<<endl;
    cin>>k;
    if(ispresent(arr, k, a)==1){
    cout<<"Found"<<endl;
    }
    else {cout<<"Not Found";
    }
    return 0;
}