#include<iostream>
#include<math.h>
using namespace std;
int main(){
   int a,b;
   cout<<"Enter the First Number: "; 
   cin>>a;
   cout<<"Enter the Second Number: ";
   cin>>b;
   char c;
   cout<<"Enter the operation: ";
   cin>>c;
   switch(c) {
    case '*': cout<<(a*b)<<endl;
    break;
    case '+': cout<<(a+b)<<endl;
    break;
    case '-': cout<<(a-b)<<endl;
    break;
    case '/': cout<<(a/b)<<endl;
    break;
    case '%': cout<<a%b<<endl;
    break;
    default: cout<<"Not Possible"<<endl;
    break;
   }
    return 0;
}
