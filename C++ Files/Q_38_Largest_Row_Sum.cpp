#include<iostream>
using namespace std;
int main() {
    int a, b, t=INT32_MIN, k;
    cout<<"Enter the number of rows: "<<endl;
    cin>>a;
    cout<<"Enter the number of columns: "<<endl;
    cin>>b;
    int arr[a][b];
    cout<<"Enter the elements of the matrix: ";
    for(int row =0; row<a; row++) {
        for(int col =0; col<b; col++){
            cin>>arr[row][col];
        }
    }
    for(int row =0; row<a; row++) {
        int sum =0;
        for(int col =0; col<b; col++) {
            sum = sum + arr[row][col];
        }
        if(sum>=t) {
            k=row;
            }
        t= sum; 
    }
    cout<<"Required Row is: "<<k+1<<endl;
    return 0;
}