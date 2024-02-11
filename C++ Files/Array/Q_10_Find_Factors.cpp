#include<iostream>
#include<math.h>
using namespace std;
int main() {
    int n;
    cout<<"Enter the Number: "<<endl;
    cin>>n;
    int i=1;
    int remainder;
    cout<<"Factors of the given number are: ";
    while (n>i)
    {
        remainder = n%i;
        if (remainder==0)
        {
           cout<<i<<", ";
        }
        i++;
    }
    cout<<n<<endl;
    return 0;
}