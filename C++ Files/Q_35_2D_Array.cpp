#include<iostream>
using namespace std;
int main() {
    int a, b, t;
    cout<<"Enter the number of rows: "<<endl;
    cin>>a;
    cout<<"Enter the number of coloumns: "<<endl;
    cin>>b;
    int arr[a][b];    // Defining a 2d array.
    cout<<"Enter the matrix elements: "<<endl;
    //Taking input for a 2D array.(Row-wise)
    for(int r =0; r<a; r++) {
        for(int c=0; c<b; c++) {
            cin>>arr[r][c];
        }
    }
    //Taking input for a 2d array.(Column-wise) 
    for(int r =0; r<a; r++) {
        for(int c=0; c<b; c++) {
            cin>>arr[r][c];
        }
    }
    //Printing a 2D array
    for(int r =0; r<a; r++) {
        for(int c=0; c<b; c++) {
            cout<<arr[r][c];
        }
        cout<<endl;
    }
    //Hardcode initialising a 2D array
    int arr1[5][2] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}; // It will take the input row wise 
    int arr2[5][2] = {{1,2}, {2,3}, {3,4}, {4,5},{5,6}}; // It will take the input rowsise correspoding to the number of bracket
    
    return 0;
}