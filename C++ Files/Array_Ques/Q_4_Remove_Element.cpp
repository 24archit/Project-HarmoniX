#include <iostream>
#include <algorithm>
using namespace std;
int removeElement(int nums[], int n, int val)
{
    int count = 0;
    int countVal = 0;
    for (int i = 0; i < n; i++)
    {
        if (nums[i] == 0)
        {
            count++;
        }
        if (nums[i] == val)
        {
            nums[i] = 0;
            countVal++;
        }
    }
    sort(nums, nums + n);
    for (int i = 0; i < countVal; i++)
    {
        swap(nums[i], nums[n - i - 1]);
    }
    return (n - countVal);
}
void inputArr(int arr[], int n)
{
    cout << "Enter the Elements of the array: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << "Enter element " << i + 1 << ": ";
        cin >> arr[i];
    }
}
void printArr(int arr[], int n)
{
    cout << endl
         << "Printing the element: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}
int main()
{
    int n, val;
    cout << "Enter the number of elements: " << endl;
    cin >> n;
    int arr[n];
    inputArr(arr, n);
    cout << "Enter the element to be removed: " << endl;
    cin >> val;
    removeElement(arr, n, val);
    printArr(arr, n);
    return 0;
}