#include<iostream>
#include<math.h>
using namespace std;
int main(){
  int n;
  cout<<"Enter the number: "<<endl;
  cin>>n;
  int unmask = ~n;
  int mask=0;
  int i = 1;
  int compliment;
  while (n==0)
  {
    mask = mask<<i;
    n>>i;
    i++;
  }
  compliment = mask & unmask;
  if((compliment & 0 )== 0)
  {
    cout<<"True"<<endl;
  }
  else
  {
    cout<<"False"<<endl;
  }
  
    return 0;

}