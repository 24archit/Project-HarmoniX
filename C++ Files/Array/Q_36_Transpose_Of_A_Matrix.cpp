#include<iostream>
using namespace std;
int main() {
    int a, b, t;
    cout<<"Enter the number of rows: "<<endl;
    cin>>a;
    cout<<"Enter the number of coloumns: "<<endl;
    cin>>b;
    int arr[a][b];
    cout<<"Enter the matrix elements: "<<endl;
    for(int r =0; r<a; r++) {
        for(int c=0; c<b; c++) {
            cin>>arr[r][c];
        }
    }
    for(int r =0; r<a; r++) {
        for(int c=0; c<b; c++) {
            cout<<arr[r][c];
        }
        cout<<endl;
    }
    cout<<endl<<endl;
  for(int r =0; r<b; r++) {
        for(int c=0; c<a; c++) {
            cout<<arr[c][r];
        }
        cout<<endl;
    }
    return 0;
}