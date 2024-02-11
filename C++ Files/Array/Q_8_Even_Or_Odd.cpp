#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number: "<<endl;
    cin>>n;
    int remainder = n%2;
    if (remainder==0)
    {
       cout<<"The Given Integer is a 'Even' integer"<<endl;
    }
    else
    {
        cout<<"The Given Integer is a 'Odd' integer."<<endl;
    }  
  return 0;  
}