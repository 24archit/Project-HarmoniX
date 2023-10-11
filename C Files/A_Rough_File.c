#include<stdio.h>
int main() {
    int n;
    printf("Enter the number of stars to be present in the first line: ");
    scanf("%d", &n);
    int p=n;
    for(int i=1; i<=p;i++) {
        for(int j=1; j<=n; j++) {
            printf("*");
        }
        printf("\n");
        n=n-1;
        for(int k=1; k<=(p-n); k++ ){
            printf(" ");
        }
    }
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=(p-1); j++) {
            printf(" ");
        }
        for(int k=1; k<=i; k++){
            printf("*");
        }
        printf("\n");
        p=p-1;
    }
    
    return 0;
}
