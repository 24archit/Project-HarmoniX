#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_VERTICES 100

struct Node {
    int data;
    struct Node* next;
};

struct List {
    struct Node* head;
};

struct Graph {
    int vertices;
    struct List* array;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

struct Graph* createGraph(int vertices) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->vertices = vertices;
    graph->array = (struct List*)malloc(vertices * sizeof(struct List));

    for (int i = 0; i < vertices; i++) {
        graph->array[i].head = NULL;
    }

    return graph;
}

void addEdge(struct Graph* graph, int src, int dest) {
    struct Node* newNode = createNode(dest);
    newNode->next = graph->array[src].head;
    graph->array[src].head = newNode;
}

void bfs(struct Graph* graph, int startNode, int visited[]) {
    int queue[MAX_VERTICES];
    int front = 0, rear = 0;
    visited[startNode] = 1;
    queue[rear++] = startNode;

    while (front != rear) {
        int currentNode = queue[front++];
        printf("%d ", currentNode);

        struct Node* temp = graph->array[currentNode].head;
        while (temp != NULL) {
            int neighbor = temp->data;
            if (!visited[neighbor]) {
                visited[neighbor] = 1;
                queue[rear++] = neighbor;
            }
            temp = temp->next;
        }
    }
}

void DFS(struct Graph* graph, int vertex, bool visited[]) {
    visited[vertex] = true;
    printf("%d ", vertex);

    struct Node* currentNode = graph->array[vertex].head;
    while (currentNode) {
        int adjacentVertex = currentNode->data;
        if (!visited[adjacentVertex]) {
            DFS(graph, adjacentVertex, visited);
        }
        currentNode = currentNode->next;
    }
}

void DFSTraversal(struct Graph* graph, int* order, int orderSize) {
    bool* visited = (bool*)malloc(graph->vertices * sizeof(bool));
    for (int i = 0; i < graph->vertices; i++) {
        visited[i] = false;
    }

    for (int i = 0; i < orderSize; i++) {
        if (!visited[order[i]]) {
            DFS(graph, order[i], visited);
        }
    }

    free(visited);
}

int main() {
    int vertices = 5;
    struct Graph* graph = createGraph(vertices);

    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 4);

    int visitedBFS[vertices];
    for (int i = 0; i < vertices; ++i)
        visitedBFS[i] = 0;
    bfs(graph, 0, visitedBFS);
    printf("\n");

    int order[] = {2, 0, 1, 3, 4};
    int orderSize = sizeof(order) / sizeof(order[0]);
    DFSTraversal(graph, order, orderSize);
    printf("\n");

    return 0;
}
