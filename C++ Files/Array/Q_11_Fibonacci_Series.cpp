#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number of Fibonacci Terms: ";
    cin>>n;
    int a=3; int i=0;int j =1;int ans=0; int b;
    if (n>=2){
        cout<<"0,1";
    }
    else if(n=1){
        cout<<"0"<<endl;
    }
    while(a<=n){
           ans=i+j;
           if (i==n){
            cout<< ans <<endl;
           }
           else{
            cout<<", "<<ans;
           }
        b=j;
        j=ans;
        i=b;
        a++;
    }
    return 0;
}