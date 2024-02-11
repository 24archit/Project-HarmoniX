#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number of elements in the array: "<<endl;
    cin>>n;
    float arr[n];
    cout<<"Enter the element of the array ( Press enter after each number): "<<endl;
    for(int i=0; i<n; i++) {
        cin>>arr[i];
}
float sum =0;
for(int j=0; j<n; j++) {
    sum = sum + arr[j];
}
float average = sum/n;
cout<<"The average of the given elements in the array is: "<<average<<endl; 
    return 0;
}