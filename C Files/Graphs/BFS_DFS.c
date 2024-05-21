#include <stdio.h>
#include <stdlib.h>

#define MAX_NODES 100

// Structure to represent a node in the graph
struct Node {
    int data;
    struct Node* next;
};

// Structure to represent a graph
struct Graph {
    int numNodes;
    struct Node* adjList[MAX_NODES];
    int visited[MAX_NODES];
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to create a graph with 'n' nodes
struct Graph* createGraph(int n) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->numNodes = n;
    int i;
    for (i = 0; i < n; ++i) {
        graph->adjList[i] = NULL;
        graph->visited[i] = 0;
    }
    return graph;
}

// Function to add an edge between two nodes in the graph
void addEdge(struct Graph* graph, int src, int dest) {
    // Add an edge from src to dest
    struct Node* newNode = createNode(dest);
    newNode->next = graph->adjList[src];
    graph->adjList[src] = newNode;

    // Add an edge from dest to src
    newNode = createNode(src);
    newNode->next = graph->adjList[dest];
    graph->adjList[dest] = newNode;
}

// Breadth-First Search traversal
void BFS(struct Graph* graph, int start) {
    // Create a queue for BFS
    int queue[MAX_NODES];
    int front = -1, rear = -1;

    // Mark the current node as visited and enqueue it
    graph->visited[start] = 1;
    queue[++rear] = start;

    while (front != rear) {
        // Dequeue a vertex from queue and print it
        int current = queue[++front];
        printf("%d ", current);

        // Get all adjacent vertices of the dequeued vertex current
        // If an adjacent vertex has not been visited, then mark it visited and enqueue it
        struct Node* temp = graph->adjList[current];
        while (temp) {
            int adjNode = temp->data;
            if (!graph->visited[adjNode]) {
                graph->visited[adjNode] = 1;
                queue[++rear] = adjNode;
            }
            temp = temp->next;
        }
    }
}

// Depth-First Search traversal
void DFSUtil(struct Graph* graph, int current) {
    // Mark the current node as visited and print it
    graph->visited[current] = 1;
    printf("%d ", current);

    // Recur for all the vertices adjacent to this vertex
    struct Node* temp = graph->adjList[current];
    while (temp) {
        int adjNode = temp->data;
        if (!graph->visited[adjNode]) {
            DFSUtil(graph, adjNode);
        }
        temp = temp->next;
    }
}

void DFS(struct Graph* graph, int start) {
    // Call the recursive helper function to print DFS traversal
    DFSUtil(graph, start);
}

int main() {
    struct Graph* graph = createGraph(6);
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 4);
    addEdge(graph, 3, 4);
    addEdge(graph, 3, 5);
    addEdge(graph, 4, 5);

    printf("Breadth First Traversal (starting from vertex 0): ");
    BFS(graph, 0);
    printf("\n");

    // Resetting visited array for DFS
    for (int i = 0; i < graph->numNodes; ++i) {
        graph->visited[i] = 0;
    }

    printf("Depth First Traversal (starting from vertex 0): ");
    DFS(graph, 0);
    printf("\n");

    return 0;
}
