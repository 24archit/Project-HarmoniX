#include<iostream>
#include<math.h>
using namespace std;
int main() {
    int n;
    cout<<"Enter The number to check if it is a Pallindrome: ";
    cin>>n;
    int intial = n;
    int reverse=0;
    int digit;
    while(n >0) {
        digit=n%10;
        reverse= (reverse*10) + digit;
        n=n/10;
    }
    if (reverse==intial) {
        cout<<"The given number is a pallindrome."<<endl;
    }
    else {
        cout<<"The given number is not a pallindrome."<<endl;
    }
return 0;

}