/*#include<iostream>
using namespace std;
int main() {
int a,b,c;
cout<<"Enter the First Number: ";
cin>>a;
cout<<"Enter the Second Number: ";
cin>>b;
cout<<"Enter the Third Number: ";
cin>>c;
if(a>b){
    if(a>c){
        cout<<"First Number is maximum."<<endl;
            }
        }
   if (b>a){
    if (b>c){
    cout<<"Second Number is maximum."<<endl;
   }
   }
   if(c>a)
   {
    if(c>b)
   {
    cout<<"Third Number is maximum."<<endl;
   }
   }
    return 0;
} 

OR

*/
#include<iostream>
using namespace std;
int main() {
int a,b,c;
cout<<"Enter the First Number: ";
cin>>a;
cout<<"Enter the Second Number: ";
cin>>b;
cout<<"Enter the Third Number: ";
cin>>c;
if( a>b && a>c) {
    cout<<"First Number is maximum."<<endl;
} else if (b>a && b>c) {
    cout<<"Second  Number is maximum."<<endl;
} else {
cout <<"Third Number is maximum."<<endl;
}
return 0;
}
