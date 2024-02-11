#include<stdio.h>
using namespace std;
double findmedian(int num1[], int num2[], int m , int n);
int main(){
    int num1[5] = {1,2,3,4,5,};
    int num2[7] ={12, 14, 15 ,16 ,16, 18, 19};
    findmedian(num1, num2, 5, 7);
    return 0;
}
double findmedian(int num1[], int num2[], int m, int n) {
    int count, i =0, j=0, m1, m2;
    int total_num = n+m;
    for(count =1; count <total_num/2; count++){
        m2=m1;
        if(i<m && j <n){
            if(num1[j]>num2[i]){
                m1 = num2[i];
                i++;
            }
            else {
                m1 = num1[j];
                j++;
            }
        }
        else if (i>=m){
            m1=num2[j];
            j++;
        }
        else {
            m1=num1[i];
            i++;
        }
    }
    if(total_num %2 ==0){
            return (m1 +m2)/2;
    }
    else {
            return m1;
    }   
}