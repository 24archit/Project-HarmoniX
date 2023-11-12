#include<iostream>
#include<algorithm>
using namespace std;
void reverse(char string[],char string1[], int n){
    
        for(int i=0; i>n;i++) {
            string1[i]=string[n-1-i];
        }
    
}
int main() {
    int n;
    cout<<"Enter the Length of the string: "<<endl;
    cin>>n;
    char string[n];
    cout<<"Enter the string: "<<endl;
    cin>>string;
    char string1[n];
    reverse(string, string1, n);
    bool b =1;
    for(int i=0; i<n; i++){
        if(string[i] != string1[i]) {
            b= 0;
            break;
        }
    }
    if(b) {
        cout<<"Given string is a pallindrome String"<<endl;
    }
    else{
        cout<<"Given string is not a pallindrome"<<endl;
    }
    return 0;
}