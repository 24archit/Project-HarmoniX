
#include <stdio.h>
#include <stdlib.h>

// Node structure for the linked list
struct Node {
    int data;
    struct Node* next;
};

// Queue structure
struct Queue {
    struct Node* front;
    struct Node* rear;
};

// Function to create an empty queue
struct Queue* createQueue() {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->front = queue->rear = NULL;
    return queue;
}

// Function to enqueue a new element
void enqueue(struct Queue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    // If the queue is empty, set both front and rear to the new node
    if (queue->rear == NULL) {
        queue->front = queue->rear = newNode;
        return;
    }

    // Otherwise, add the new node to the end and update the rear
    queue->rear->next = newNode;
    queue->rear = newNode;
}

// Function to dequeue an element
void dequeue(struct Queue* queue) {
    // If the queue is empty, do nothing
    if (queue->front == NULL)
        return;

    // Store the front node, update front, and free the stored node
    struct Node* temp = queue->front;
    queue->front = queue->front->next;

    // If front becomes NULL, update rear to NULL as well
    if (queue->front == NULL)
        queue->rear = NULL;

    free(temp);
}

// Function to get the front element of the queue
int front(struct Queue* queue) {
    // If the queue is empty, return an arbitrary value (considering the context)
    if (queue->front == NULL)
        return -1;

    return queue->front->data;
}

// Function to check if the queue is empty
int isEmpty(struct Queue* queue) {
    return (queue->front == NULL);
}

// Function to display the elements of the queue
void displayQueue(struct Queue* queue) {
    struct Node* temp = queue->front;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Function to free the memory allocated for the queue
void freeQueue(struct Queue* queue) {
    while (!isEmpty(queue)) {
        dequeue(queue);
    }
    free(queue);
}
void dequeue2 (struct Queue* q){
    if(q->front==NULL){
        printf("No elemet to delete...Queue is empty\n");
        return;
    }
    if(q->front==q->rear){
        struct node* temp = q->front;
        q->front=NULL;
        q->rear=NULL;
        free(temp);
        return;
    }
    struct node* temp =q->front;
    q->front=q->front->next;
    free(temp);
}

// Example usage:
int main() {
    struct Queue* queue = createQueue();

    enqueue(queue, 10);
    enqueue(queue, 20);
    enqueue(queue, 30);

    printf("Queue elements: ");
    displayQueue(queue);

    printf("Front element: %d\n", front(queue));

    dequeue(queue);
    printf("Queue after dequeue: ");
    displayQueue(queue);

    freeQueue(queue);

    return 0;
}


