/*#include<iostream>
#include<math.h>
using namespace std;
int main() {
int n;
cout<<"Enter The Number:  "<<endl;
cin>>n;
int ans =0;
int i=0;
while (n!=0)
{
    int bit = n&1;
    ans = (bit *pow(10,i)) + ans;
    n=n>>1;
    i++;
}
int compliment =0;
int j=0;
while(ans != 0 ) 
{
  int digit = ans%10;
  if (digit == 1)
  {
    digit = digit- 1;
    compliment = (digit * pow(2,j)) + compliment;
    ans = ans/10;
    j++;
  }
  else
  {
    digit = digit +1;
    compliment = (digit * pow(2,j)) + compliment;
    ans = ans/10;
    j++;
  }
}
cout << " Compliment of the given is: "<<compliment<<endl;
    return 0;
}*/
#include<iostream>
#include<math.h>
using namespace std;
int main(){
int n;
cout<< "Enter the number: "<<endl;
cin>>n;
int unmasked = ~n;
int mask =0;
int i =1;
while(n ==0)
{
   mask = mask<<i;
   n = n>>i;
   i++;
}
int ans = unmasked & mask;
cout <<ans<<endl;
   return 0;
}


