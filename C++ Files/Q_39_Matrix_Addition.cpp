#include<iostream>
#include<iomanip>
using namespace std;
int main() {
    int a, b;
    cout<<"Enter the number of rows matrices: "<<endl;
    cin>>a;
    cout<<"Enter the number of columns of the matrices: "<<endl;
    cin>>b;
    int arr1[a][b];
    cout<<"Enter the elements of the first array: "<<endl;
    for(int row=0; row<a; row++) {
        for(int col =0; col <b; col++) {
            cin>>arr1[row][col];
        }
    }
    cout<<"Enter the elements of the second array: "<<endl;
    int arr2[a][b];
    for(int row =0; row<a; row++) {
        for(int col =0; col <b; col++){
            cin>>arr2[row][col];
        }
    }
    cout<<endl;
    for(int row =0; row<a; row++){
        for(int col =0; col<b; col++){
            cout<<left<<setw(3)<<arr1[row][col]+arr2[row][col];
        }
        cout<<endl;
    }
    cout<<endl<<endl;
    for(int row =0; row<a; row++){
        for(int col =0; col<b; col++){
            cout<<left<<setw(3)<<arr1[row][col]-arr2[row][col];
        }
        cout<<endl;
    }
    
    return 0;
}