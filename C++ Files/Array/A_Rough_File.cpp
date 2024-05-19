#include<iostream>
using namespace std;
int main(){
    int a = 6;
    int*b = &a;
    cout<<b<<endl<<a<<endl;
    int a=7;
    cout<<b<<endl<<a;
    return 0;
}
