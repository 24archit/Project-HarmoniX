#include <iostream>
#include <vector>

int main() {
    std::vector<int> myVector = {1, 2, 3, 4, 5};

    // Using range-based for loop
    for (int element : myVector) {
        // Access 'element' for the current element
        std::cout << element << " ";
    }

    std::cout << std::endl;

    return 0;
}
