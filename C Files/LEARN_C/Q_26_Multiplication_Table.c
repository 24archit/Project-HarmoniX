#include<stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int arr [10] = {1,2,3,4,5,6,7,8,9,10};
    for(int i=1; i<=n; i++) {
        for(int j=0; j<10; j++){
            printf("%d x %d = %2d, ", i, arr[j], i*arr[j]);
        }
        printf("\n");
    }
    return 0;
}