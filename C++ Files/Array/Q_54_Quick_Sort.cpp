#include<iostream>
#include<algorithm>
using namespace std;
int partition (int arr[], int start, int end){
    int pivot = arr[end];
    int j = start;
    for(int i = start; i<end; i++){
        if(arr[i]<=pivot){
            swap(arr[j], arr[i]);
            j++;
        }
    }
    swap(arr[j], arr[end]);
    return j;
}
void quicksort(int arr[], int start, int end){
    if(start>=end){
        return;
    }
    int p = partition(arr, start, end);
    quicksort(arr, start, p-1);
    quicksort(arr, p+1, end);
}
int main(){
    int arr[] = {1, 2, 23, 44, 22, 17, 89, 0};
    int n = 8;
    quicksort(arr, 0, n-1);
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}