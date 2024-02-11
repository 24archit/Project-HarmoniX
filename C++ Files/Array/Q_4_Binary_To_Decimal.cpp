#include<iostream>
#include<math.h>
using namespace std;
int main() {
int n;
cout<<"Enter the Number: "<<endl;
cin>>n;
int digit;
int ans=0;
int i=0;
while (n != 0)
{
  digit = (n%10);
  ans = (pow(2,i)*digit)+ans;
  n=n/10;
  i++;
}
cout << "Given binary in Decimal system will be: "<<ans<<endl;
  return 0;            
}