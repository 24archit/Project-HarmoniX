#include<stdio.h>
#include<stdlib.h>

// Function to convert adjacency matrix to adjacency list
int** convert(int** a, int n) {
    int** adjList = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        adjList[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            adjList[i][j] = 0;
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (a[i][j] != 0) {
                adjList[i][j] = 1;
            }
        }
    }
    return adjList;
}

// Driver code
int main() {
    int n = 3; // Size of matrix
    int** a = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        a[i] = (int*)malloc(n * sizeof(int));
    }

    // Adjacency matrix initialization
    int p[] = {0, 0, 1};
    int q[] = {0, 0, 1};
    int r[] = {1, 1, 0};
    a[0] = p;
    a[1] = q;
    a[2] = r;

    // Convert to adjacency list
    int** AdjList = convert(a, n);
    printf("Adjacency List:\n");

    // Print the adjacency list
    for (int i = 0; i < n; i++) {
        printf("%d", i);
        for (int j = 0; j < n; j++) {
            if (AdjList[i][j] == 1) {
                printf(" -> %d", j);
            }
        }
        printf("\n");
    }

    // Free dynamically allocated memory
    for (int i = 0; i < n; i++) {
        free(a[i]);
        free(AdjList[i]);
    }
    free(a);
    free(AdjList);

    return 0;
}
