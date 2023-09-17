#include<iostream>
#include<math.h>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number: ";
    cin>>n;
    int sum=0;
    int digit;
    while (n>0) {
        digit = n%10;
        sum = digit + sum; 
        n=n/10; 
    } 
    cout<<"Sum of the digits of given number is: "<<sum<<endl;
    return 0;
}
