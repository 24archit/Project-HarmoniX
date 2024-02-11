#include<iostream>
using namespace std;
int main() {
    int n;
    int isprime=1;
    cout<<"Enter The Number: "<<endl;
    cin>>n;
    int i = 2;
    int remainder;
    while(n>i)
    {
       remainder = n%i;
       if(remainder==0)
       {
        isprime =0;
        break;  
       }
       i=i+1;
    }
    if(isprime=1) {
        cout<<"Prime";
    }
    else{
        cout<<"Not Prime";
    }
    return 0;
}