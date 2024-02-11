// Space Complexity : O(1)
// Time Complexity : O(n^2)
// Best Case : Already sorted : O(n)
// Worst Case : Reverse Sorted : O(n^2)
// For ith round we get the ith largest number placed at the correct position

// In C++, inplace sorting refers to sorting algorithms that do not require additional 
// memory to be allocated for temporary storage during the sorting process. Instead, 
// these algorithms operate directly on the input data, rearranging elements within
//  the existing array or container.

// Many sorting algorithms in C++ can be implemented as inplace algorithms. Some 
// common examples of inplace sorting algorithms include:

// 1. **Bubble Sort**: It repeatedly steps through the list, compares adjacent 
// elements, and swaps them if they are in the wrong order.

// 2. **Selection Sort**: It repeatedly selects the smallest (or largest) 
// element from the unsorted portion of the array and swaps it with the first unsorted element.

// 3. **Insertion Sort**: It builds the sorted array one element at a time 
// by repeatedly taking elements from the unsorted part and inserting them 
// into their correct position in the sorted part.

// 4. **Quicksort**: It is a divide-and-conquer algorithm that partitions 
// the array into two halves, recursively sorts each half, and then combines them.

// 5. **Heapsort**: It uses a binary heap data structure to build a heap 
// and then repeatedly extracts the maximum (for max-heap) element, restoring the heap property.

// These algorithms are called inplace because they don't require additional
//  memory proportional to the size of the input data, making them memory-efficient. 
//  However, it's essential to note that the time complexity of these algorithms can 
//  vary, and some may perform better than others in different scenarios. 
//  Additionally, modern C++ provides the `std::sort` function, which typically uses
// an efficient inplace sorting algorithm, like introsort or timsort, depending on the implementation.
// The terms "stable" and "unstable" refer to whether a sorting algorithm maintains the relative 
// order of equal elements in the sorted output.

// 1. **Stable Sorting:**
//    - A sorting algorithm is considered stable if the relative order of equal elements 
//    in the input is preserved in the sorted output.
//    - In other words, if you have two elements with equal keys in the input, and one 
//    appears before the other, a stable sorting algorithm ensures that the same relative 
//    order is maintained in the sorted output.
//    - Examples of stable sorting algorithms include Bubble Sort, Insertion Sort, Merge 
//    Sort, and TimSort.

// 2. **Unstable Sorting:**
//    - An unstable sorting algorithm does not guarantee to maintain the relative order 
//    of equal elements in the input when they have the same key value.
//    - Equal elements might appear in a different order in the sorted output compared
//     to their order in the input.
//    - Examples of unstable sorting algorithms include QuickSort and HeapSort.

// **Use Cases:**
// - In many practical scenarios, stability is not a crucial factor, and either stable 
// or unstable sorting may be suitable.
// - However, there are cases where stability is important. For example, when you are 
// sorting a dataset initially sorted by one attribute and then want to sort it by another
//  attribute, a stable sort can help maintain the initial order within groups of equal elements.

// **Note:**
// - The C++ standard library provides a stable sorting algorithm called `std::stable_sort`.
//  The standard `std::sort` function may or may not be stable depending on the implementation. 
//  Always check the documentation for the specific behavior of the sorting function you are using.


#include<iostream>
#include<algorithm>
using namespace std;
int main() {
    int n;
    cout<<"Enter the number of elements in the array: "<<endl;
    cin>>n;
    bool swapped = false;
    int arr[n];
    cout<<"Enter the elements of the array: "<<endl;
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    for(int i=1; i<n; i++){
        for(int j=0; j<n-i; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }
        if(swapped == false){
            // already sorted
            break;
        }
    }
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}
// Solve these quiz : https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUVMNHBiWVVtUV9VZk9WaDgxNG9IajYtUjQzUXxBQ3Jtc0tuc0g1VFdnSFp3UzlGUlFJb2lGSnE1ZVVrc21UbjFFcWhGMnFlT0xINU0xLUU1RHpJYkg2OUlVQ0hCTnB0ODdZRDNvRFV3SWZVSWREb1pmRndaWFdOaVdXRUVMZFQzQlRNbVhrYVFPT0dMTXB0NjRSdw&q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fquiz-bubblesort-gq%2F&v=zOhUavxlzw4