#include <stdio.h>
#include <stdlib.h>

// void merge(int* arr, int s, int e) {
//     int mid = (s + e) / 2;
//     int len1 = mid - s + 1;
//     int len2 = e - mid;
//     int *arr1 = (int*)malloc(len1 * sizeof(int));
//     int *arr2 = (int*)malloc(len2 * sizeof(int));
    
//     for (int i = 0; i < len1; i++) {
//         arr1[i] = arr[s + i];
//     }
//     for (int i = 0; i < len2; i++) {
//         arr2[i] = arr[mid + 1 + i];
//     }

//     int index1 = 0;
//     int index2 = 0;
//     int mainarray = s;
//     while (index1 < len1 && index2 < len2) {
//         if (arr1[index1] <= arr2[index2]) {
//             arr[mainarray++] = arr1[index1++];
//         } else {
//             arr[mainarray++] = arr2[index2++];
//         }
//     }
//     while (index1 < len1) {
//         arr[mainarray++] = arr1[index1++];
//     }
//     while (index2 < len2) {
//         arr[mainarray++] = arr2[index2++];
//     }
//     free(arr1);
//     free(arr2);
// }


void merge (int* arr, int s, int e){
    int mid = (s+e)/2;
    int len1 = mid - s +1;
    int len2 = e - mid;
    int*arr1 = (int*)malloc(len1*sizeof(int));
    int* arr2 = (int*)malloc(len2*sizeof(int));
    for(int i=0; i<len1; i++){
        arr1[i]=arr[s+i];
    }
    for(int i=0; i<len2; i++){
        arr2[i]=arr[mid+1+i];
    }
    int index1=0;
    int index2=0; 
    int mainarray =s;
    while(index1<len1 && index2<len2){
        if(arr2[index2]>=arr1[index1]){
            arr[mainarray++]=arr1[index1++];
        }
        else {
            arr[mainarray++]=arr2[index2++];
        }
    }
    while(index1<len1){
         arr[mainarray++]=arr1[index1++];
    }
    while (index2<len2)
    {
        arr[mainarray++]=arr2[index2++];
    }
    free(arr1);
    free(arr2);
}
void mergesort(int *arr, int s, int e) {
    if (s < e) {
        int mid = (s + e) / 2;
        mergesort(arr, s, mid);
        mergesort(arr, mid + 1, e);
        merge(arr, s, e);
    }
}
int main() {
    int arr[5] = {1, 5, 6, 78, 33};
    mergesort(arr, 0, 4);
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}
