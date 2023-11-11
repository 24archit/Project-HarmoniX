#include<iostream>
using namespace std;
int main() {
    int a, b;
    cout<<"Enter the Number of rows: ";
    cin>>a; 
    cout<<"Enter the number of columns: ";
    cin>>b;
    int arr[a][b];
    cout<<"Enter the elements of the matrix: ";
    for(int row=0; row<a; row++) {
        for(int col =0; col<b; col++) {
            cin>>arr[row][col];
        }
    }
    if(a%2==0) {
    for(int i=1; i<=a/2; i++) {
    for(int col=0; col<b; col++) {
        
        cout<<arr[0][col];
    }
    for(int row=0; row<a; row++) {
        if(row==0) {
            continue;
        }
        cout<<arr[row][b-1];
    }
    for(int col=b-1; col>=0; col--) {
        if(col==b-1) {
            continue;
        }
        cout<<arr[a-1][col];
    }
    for(int row=a-1; row>=0; row--) {
        if(row==a-1 || row ==0) {
            continue;
        }
        cout<<arr[row][0];
    }
    a=a-a/2;
    b=b-a/2;
    }
    }
    else{for(int i=1; i<=a+1/2; i++) {
    for(int col=0; col<b; col++) {
        
        cout<<arr[0][col];
    }
    for(int row=0; row<a; row++) {
        if(row==0) {
            continue;
        }
        cout<<arr[row][b-1];
    }
    for(int col=b-1; col>=0; col--) {
        if(col==b-1) {
            continue;
        }
        cout<<arr[a-1][col];
    }
    for(int row=a-1; row>=0; row--) {
        if(row==a-1 || row ==0) {
            continue;
        }
        cout<<arr[row][0];
    }
    a=a-(a+1)/2;
    b=b-(a+1)/2;
    }
    }
    return 0;
}