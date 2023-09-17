#include<iostream>
#include<cmath>
#include<math.h>
using namespace std;
void quadsolve(float a, float b, float c)
{
   float ans1 =(-b + sqrt(pow(b,2) -(4*a*c)))/(2*a);
   float ans2 =(-b - sqrt(pow(b,2) -(4*a*c)))/(2*a);
   if ((pow(b,2))<(4*a*c))
   {
    cout<<"No Real Roots";
   }
      cout<<"Roots are: "<<ans1<<", "<<ans2<<endl;
   }
int main() {
    float a;
    cout<<"Enter Cofficent of X^2: ";
    cin>>a;
    float b;
    cout<<"Enter Cofficent of X: ";
    cin>>b;
    float c;
    cout<<"Enter the constant term: ";
    cin>>c;
    quadsolve(a,b,c);
    return 0;
}
