#include<iostream>
using namespace std;
int factorial (int n) 
{
    int ans=1;
    for(int i=1;i<=n;i++)
    {
        ans = ans*i;
    }
    return ans;
}
int nCr (int n, int r)
{       int a;
        a=n-r;
        int ans;
        ans = (factorial(n))/((factorial(r))*(factorial(a)));
        return ans;
}
int main(){
    int n;
    cout<<"Enter the value of n: ";
    cin>>n;
    int r;
    cout<<"Enter the value of r: ";
    cin>>r;
    cout<<"The value of nCr is: "<<nCr(n, r )<<endl;

    return 0;
}