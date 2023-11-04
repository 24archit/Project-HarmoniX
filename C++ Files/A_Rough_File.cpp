#include <iostream>

int main() {
    using namespace std; // Add this line to use the std namespace

    int rows = 3;
    int cols = 4;

    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    for (int i = 0; i < rows; i++) {
        if (i % 2 == 0) {
            for (int j = 0; j < cols; j++) {
                cout << matrix[i][j] << ' '; // Use cout directly
            }
        } else {
            for (int j = cols - 1; j >= 0; j--) {
                cout << matrix[i][j] << ' '; // Use cout directly
            }
        }
        cout<<endl;
    }

    cout << endl; // Use cout directly

    return 0;
}
