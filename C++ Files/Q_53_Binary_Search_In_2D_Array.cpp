#include<iostream>
using namespace std;
int main(){
    int m , n;
    cout<<"Enter the number of rows: "<<endl;
    cin>>m;
    cout<<"Enter the number of coloumns: "<<endl;
    cin>>n;
    int arr[m][n];
    cout<<"Enter the elements of the array: "<<endl;
    for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            cin>>arr[i][j];
        }
    }
    int k;
    cout<<"Enter the element to be searched: "<<endl;
    cin>>k;
    int start =0; 
    int end = m*n;
    int mid = end - (end - start)/2;
    while(start<=end){
        int element = arr[mid/n][mid%n];
        if(element==k){
            cout<<"Element is present at index: "<<mid/n<<","<<mid%n<<endl;
            break;
        }
        else if(element >k){
            end = mid-1;
        }
        else {
            start = mid +1;
        }
        mid = end -(end-start)/2;
    }
    return 0;
}