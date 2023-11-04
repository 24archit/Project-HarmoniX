#include<iostream>
#include<iomanip>
using namespace std;
int main(){
    int a, b;
    cout<<"Enter the number of rows: "<<endl;
    cin>>a;
    cout<<"Enter the number of columns: "<<endl;
    cin>>b;
    cout<<"Enter the elements of the array: "<<endl;
    int arr[a][b];
    for(int col=0; col<b; col++) {
        for(int row=0; row<a; row++) {
            cin>>arr[row][col];
        }
    }
    cout<<endl<<endl;
    for(int row=0; row<a; row++) {
        for(int col=0; col<b; col++) {
            cout<<setw(3)<<arr[row][col];
        }
        cout<<endl;
            }
    cout<<endl<<endl;
    cout<<"The sine wave of the matrix will be: ";
    for(int col =0; col<b; col++ ) {
        if(col&1)  { //for odd column
        for(int row = a-1; row>=0;row--) {
                cout<<arr[row][col]<<" ";
            }
        }
        else {//for even column
        for(int row=0; row<a; row++) {
            cout<<arr[row][col]<<" ";
            } 
        }
    }
    cout<<endl<<endl;
    return 0;
}