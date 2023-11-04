#include<iostream>
using namespace std;
int main() {
    int a, b;
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
        cout<<"Sum of elements of row number "<<row+1<<"is: "<<sum<<endl;
    }
    cout<<endl;
    for(int col =0; col<b; col++) {
        int sum =0;
        for(int row=0; row<a; row++) {
            sum = sum + arr[row][col];
        }
        cout<<"Sum of elements of column number "<<col+1<<"is: "<<sum<<endl;
    }

    return 0;
}