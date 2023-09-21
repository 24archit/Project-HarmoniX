#include<iostream>
using namespace std;
int main() {
int n;
int num [n];
int sum =0;
cout<<"Enter the number: "<<endl;
cin>>n;
cout<<"Enter The array elements ( Press Enter after each input): "<<endl;
for(int j=0; n>j;j++)
{
    cin>>num[j];
}
for( int i=0; i<n; i++) {
    sum = sum + num[i];
}
cout<<"Sum of all elements is: "<<sum<<endl;
    return 0;
}