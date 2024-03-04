
#include <stdio.h>
#include <stdlib.h>

// Node structure for the linked list
struct Node {
    int data;
    struct Node* next;
};

// Circular Queue structure
struct CircularQueue {
    struct Node* front;
    struct Node* rear;
};

// Function to initialize an empty circular queue
void initializeQueue(struct CircularQueue* queue) {
    queue->front = NULL;
    queue->rear = NULL;
}

// Function to check if the circular queue is empty
int isEmpty(struct CircularQueue* queue) {
    return (queue->front == NULL);
}

// Function to enqueue a new element to the circular queue
void enqueue(struct CircularQueue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (isEmpty(queue)) {
        queue->front = newNode;
    } else {
        queue->rear->next = newNode;
    }

    queue->rear = newNode;
    queue->rear->next = queue->front; // Make the queue circular
}

// Function to dequeue an element from the circular queue
int dequeue(struct CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\n");
        return -1; // Assuming -1 represents an error or an invalid value
    }

    int data = queue->front->data;
    struct Node* temp = queue->front;

    if (queue->front == queue->rear) {
        queue->front = NULL;
        queue->rear = NULL;
    } else {
        queue->front = queue->front->next;
        queue->rear->next = queue->front; // Update the circular link
    }

    free(temp);
    return data;
}
int dequeue(struct CircularQueue* q){
    if( q->front==NULL){
        printf("No element to print\n");
        return -1;
    }
    if(q->front==q->rear){
        struct node* temp = q->front;
        int data = q->front->data;
        q->front=NULL;
        q->rear=NULL;
        free(temp);
        return data;
    }
    int data = q->front->data;
    struct node* temp = q->front;
    q->front=q->front->next;
    q->rear->next=q->front;
    free(temp);
    return data;
}

// Function to display the elements in the circular queue
void displayQueue(struct CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\n");
        return;
    }

    struct Node* current = queue->front;
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != queue->front);

    printf("\n");
}

// Function to free the memory used by the circular queue
void freeQueue(struct CircularQueue* queue) {
    while (!isEmpty(queue)) {
        dequeue(queue);
    }
}

// Example usage:
int main() {
    struct CircularQueue myQueue;
    initializeQueue(&myQueue);

    enqueue(&myQueue, 1);
    enqueue(&myQueue, 2);
    enqueue(&myQueue, 3);

    displayQueue(&myQueue);

    printf("Dequeued element: %d\n", dequeue(&myQueue));

    displayQueue(&myQueue);

    freeQueue(&myQueue);

    return 0;
}

