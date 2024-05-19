#include <stdio.h>
#include <stdlib.h>

// Function to insert vertices to adjacency list
void insert(int* adj[], int u, int v, int* size) {
    adj[u][(*size)++] = v;
}

// Function to display adjacency list
void printList(int* adj[], int V) {
    for (int i = 0; i < V; i++) {
        printf("%d", i);
        for (int j = 0; adj[i][j] != -1; j++)
            printf(" --> %d", adj[i][j]);
        printf("\n");
    }
    printf("\n");
}

// Function to convert adjacency list to adjacency matrix
int** convert(int* adj[], int V) {
    int** matrix = (int**)malloc(V * sizeof(int*));
    for (int i = 0; i < V; i++) {
        matrix[i] = (int*)calloc(V, sizeof(int));
        for (int j = 0; adj[i][j] != -1; j++)
            matrix[i][adj[i][j]] = 1;
    }
    return matrix;
}

// Function to display adjacency matrix
void printMatrix(int** adj, int V) {
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++)
            printf("%d ", adj[i][j]);
        printf("\n");
    }
    printf("\n");
}

// Driver code
int main() {
    int V = 5;
    int* adjList[V];
    int size[V];

    // Initializing adjacency list and sizes
    for (int i = 0; i < V; i++) {
        adjList[i] = (int*)malloc(V * sizeof(int));
        size[i] = 0;
        for (int j = 0; j < V; j++)
            adjList[i][j] = -1;
    }

    // Inserting edges
    insert(adjList, 0, 1, &size[0]);
    insert(adjList, 0, 4, &size[0]);
    insert(adjList, 1, 0, &size[1]);
    insert(adjList, 1, 2, &size[1]);
    insert(adjList, 1, 3, &size[1]);
    insert(adjList, 1, 4, &size[1]);
    insert(adjList, 2, 1, &size[2]);
    insert(adjList, 2, 3, &size[2]);
    insert(adjList, 3, 1, &size[3]);
    insert(adjList, 3, 2, &size[3]);
    insert(adjList, 3, 4, &size[3]);
    insert(adjList, 4, 0, &size[4]);
    insert(adjList, 4, 1, &size[4]);
    insert(adjList, 4, 3, &size[4]);

    // Display adjacency list
    printf("Adjacency List: \n");
    printList(adjList, V);

    // Function call to convert adjacency list to adjacency matrix
    int** adjMatrix = convert(adjList, V);

    // Display adjacency matrix
    printf("Adjacency Matrix: \n");
    printMatrix(adjMatrix, V);

    // Free dynamically allocated memory
    for (int i = 0; i < V; i++)
        free(adjList[i]);
    free(adjMatrix);

    return 0;
}
