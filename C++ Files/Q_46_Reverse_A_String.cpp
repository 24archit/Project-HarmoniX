#include<iostream>
#include<algorithm>
using namespace std;
void reversestring(char string[], int n) {
    for(int i=0; i<n/2; i++){
        swap(string[i], string[n-i-1]);
    }
}
int main() {
    int n;
    cout<<"Enter the length of the string: "<<endl;
    cin>>n;
    char string[n];
    cout<<"Enter the string: "<<endl;
    cin>>string;
    reversestring(string, n );
    cout<<string;
    return 0;
}