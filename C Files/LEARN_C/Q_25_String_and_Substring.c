#include<stdio.h>
#include<string.h>
int main() {
    char str[100];
    char substr[100];
    scanf("%s", str);
    scanf("%s", substr);
    int c = strlen(str);
    int d = strlen(substr);
    char copy[100];
    int arr[100];
    int l=0;
    for(int i=0; i<(c-d+1); i++){
        int k=i;
        for(int j=0; j<d; j++) {
            copy[j]=str[k];
            k++;
        }
        if(strcmp(copy, substr)){
            continue;
        }
        else{
           arr[l]=i+1;
           l++;
        }
    }
    printf("Number of Matcing = %d", l);
    printf("\nPositions = ");
    for(int i=0; i<l; i++){
        printf("%d ", arr[i]);
    }
return 0;
}