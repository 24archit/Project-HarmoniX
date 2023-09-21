#include <stdio.h>
int main() {
    int arr[7] ={2,3,4,10,12,4,2};
    int check;
    for( int i=0; i<7; i++) {
        check =0;
        for(int j =0; j<7; j++) {
            if(arr[i]==arr[j] && j != i ) {
                check =1;
            }
        }
        if(check ==0) {
            printf("%d ", arr[i]);
        }
    }
    return 0;
}
