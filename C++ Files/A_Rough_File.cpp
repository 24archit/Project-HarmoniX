#include <iostream>
using namespace std;
int main() {

//int arr2[5][2] = {{1,2}, {2}, {3,4}, {4,5},{5,6}};
int arr2[5][2] = {1, 2, 3,4 ,5 , 6, 7};
for(int r =0; r<5; r++) {
        for(int c=0; c<2; c++) {
            cout<<arr2[r][c];
        }
        cout<<endl;
    }
    return 0;
}
