#include<stdio.h>
int main() {
    int n;
    int sumrow;
    int sumcol;
    int sumdia=0;
    int k=0;
    int check=1;
    printf("\nEnter the number of rows and coloumns : ");
    scanf("%d", &n);
    printf("\nEnter the elements of the sqaure: ");
    int arr[n][n];
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            scanf("%d", &arr[i][j]);
        }
    }
    for(int j =0; j<n; j++) {
            k=k+arr[0][j]; 
    }
    for(int i=0; i<n; i++) {
        sumrow=0;
        for(int j=0; j<n; j++){
            sumrow = sumrow+arr[i][j];
        }
        if(sumrow==k){
            continue;
        }
        else{
            check =0;
            printf("\nNot a Magic Square");
            break;  
        }
    }
    if(check==1) {
        for(int i=0; i<n; i++) {
            sumcol=0;
        for(int j=0; j<n; j++){
            sumcol = sumcol+arr[j][i];
        }
        if(sumcol==k){
            continue;
        }
        else{
            check =0;
            printf("\nNot a Magic Square");
            break;
        }
    }
    }
    if(check==1){
        for(int i=0, j=n-1; i<n, j>=0; j--,i++){
            sumdia= sumdia+arr[i][j];
        }
        if(sumdia==k){
            printf("\nMagic Sqaure\n");
        }
        else{
            printf("\nNot a Magic Sqaure\n");
        }
    }
    return 0;
}