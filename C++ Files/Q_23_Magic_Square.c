#include<stdio.h>
int main() {
    int n;
    int k=0;
    printf("Enter the value of n :");
    scanf("%d", &n);
    int sum=0;
    int arr[n][n];
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            scanf("%d", &arr[i][j]);
        }
    }
    printf("\n");
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            printf("%3d ", arr[i][j]);
        }
        printf("\n");
    }
    int i=0;
    int j=0;
   while(i==j && i<n && j<n) {
        sum = sum +arr[i][j];
        i++;
        j++;
   }
 for(int i=0; i<n; i++) {
     int sum2 = 0;
    for(int j=0; j<n; j++) {
       
        k=0;
        sum2 = sum2 +arr[i][j];
    }
    if(sum2 == sum) {
            continue;   
        }
        else {
            k=1;
            printf("Not a Magic Square");
            break;
        }
 }
 if(k==0) {
 for(int i=0; i<n; i++) {
     int sum2 = 0;
    for(int j=0; j<n; j++) {
       
        k=0;
        sum2 = sum2 +arr[i][j];
    }
    if(sum2 == sum) {
            continue;   
        }
        else {
            k=1;
            printf("Not a Magic Square");
            break;
        }
 }
 }
int sum3=0;
 if(k==0) {
 for(int i=1, j =n-1; i<n, j>=0; i++, j--) {
    
    sum3=arr[i][j] + sum3;
 }
 }
 if(sum3==sum) {
    printf("Magic Sqaure");
 }
 else{
    printf("Not a Magic Square");
 }

    return 0;
}
