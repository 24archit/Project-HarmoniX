#include<iostream>
#include<math.h>
using namespace std;
int main() {
int n;
cout<<"Enter The Number to be reversed : "<< endl;
cin>>n;
if (n<0)
{
  int a = n*(-1);
  int digit2;
  int ans2=0;
  int i2=0;
  while (a != 0)
  {
    digit2=a%10;
    ans2 = (ans2*10)+digit2;
    a=a/10;
    i2=i2 +1;
  }
   cout<<"-"<<ans2<<endl;
}
if (n>0)
{
int digit;
int ans =0;
int i=0;
while (n != 0)
{
   digit =n%10;
   ans = (ans*10)+digit;
   n= n/10;
   i=i+1;
}
cout<<ans<<endl;
}
else if(n=0)
cout<<n<<endl;
else if (pow(-2,31)>n || n>((pow(2,31))-1))
{
   cout<<"0"<<endl;
}

    return 0;
}