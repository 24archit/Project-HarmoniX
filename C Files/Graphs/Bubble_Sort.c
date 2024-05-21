#include<stdio.h>
#include<stdlib.h>
void swap(int * a, int * b){
    int p = *a;
    *a = *b;  
    *b=p;
}
void bubblesort(int* arr, int n){
    for(int i=0; i<n-1; i++){
        for(int j=0; j<n-1-i; j++){
            if(arr[j]>=arr[j+1]){
                swap(&arr[j], &arr[j+1]);
            }
        }
    }
}
void inertionsort(int*arr , int n){
    for(int i=1; i<n; i++){
        int temp = arr[i];
        int j = i-1;
        for(;j>=0; j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j];
            }
            else {
                break;
            }
        }
        arr[j+1]=temp;
    }
}
int main(){
    int* arr = (int*)malloc(5*sizeof(int));
    arr[0]=23;
    arr[1]=44;
    arr[2]=-3;
    arr[3]=2;
    arr[4]=4;
    bubblesort(arr, 5);
    for(int i=0; i<5; i++){
        printf("%d ", arr[i]);
    }
    return 0;
}


