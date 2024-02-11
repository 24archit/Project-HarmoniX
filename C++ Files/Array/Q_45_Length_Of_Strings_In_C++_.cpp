#include<iostream>
using namespace std;
int main() {
    char name [20];
    cout<<"Enter the string: ";
    cin>>name; //Taking input of a string
    cout<<name<<endl; // How to print a string
    int count=0;
    for(int i=0; name[i] != '\0'; i++) {
        count++;
    }
    cout<<count<<endl<<endl;
  return 0;
}