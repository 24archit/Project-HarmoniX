#include <stdio.h>
#include <stdlib.h>

struct Node {
    int info;
    struct Node* next;
};

// Function to insert a node at the head
struct Node* insertAtHead(struct Node* head, int item) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    if (temp == NULL) {
        printf("Memory allocation failed.\n");
        exit(1);
    }
    temp->info = item;
    temp->next = head;
    return temp;
}

// Function to insert a node at the end
struct Node* insertAtEnd(struct Node* head, int item) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    if (temp == NULL) {
        printf("Memory allocation failed.\n");
        exit(1);
    }
    temp->info = item;
    temp->next = NULL;

    if (head == NULL) {
        return temp;
    }

    struct Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = temp;
    return head;
}

// Function to insert a node after a given element x
struct Node* insertAfterX(struct Node* head, int x, int item) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    if (temp == NULL) {
        printf("Memory allocation failed.\n");
        exit(1);
    }
    temp->info = item;

    struct Node* current = head;
    while (current != NULL && current->info != x) {
        current = current->next;
    }

    if (current == NULL) {
        printf("Element %d not found in the list.\n", x);
        free(temp);
        return head;
    }

    temp->next = current->next;
    current->next = temp;
    return head;
}

// Function to insert a node before a given element x
struct Node* insertBeforeX(struct Node* head, int x, int item) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    if (temp == NULL) {
        printf("Memory allocation failed.\n");
        exit(1);
    }
    temp->info = item;

    if (head == NULL || head->info == x) {
        temp->next = head;
        return temp;
    }

    struct Node* current = head;
    while (current->next != NULL && current->next->info != x) {
        current = current->next;
    }

    if (current->next == NULL) {
        printf("Element %d not found in the list.\n", x);
        free(temp);
        return head;
    }

    temp->next = current->next;
    current->next = temp;
    return head;
}

// Function to print the linked list
void printLinkedList(struct Node* head) {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d ", temp->info);
        temp = temp->next;
    }
    printf("\n");
}

// Function to free the memory allocated for the linked list
void freeLinkedList(struct Node* head) {
    while (head != NULL) {
        struct Node* temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    struct Node* head = NULL;

    // Insert at head
    head = insertAtHead(head, 3);
    head = insertAtHead(head, 2);
    head = insertAtHead(head, 1);

    printf("Linked list after insert at head: ");
    printLinkedList(head);

    // Insert at end
    head = insertAtEnd(head, 4);

    printf("Linked list after insert at end: ");
    printLinkedList(head);

    // Insert after a given element
    head = insertAfterX(head, 2, 5);

    printf("Linked list after insert after 2: ");
    printLinkedList(head);

    // Insert before a given element
    head = insertBeforeX(head, 4, 6);

    printf("Linked list after insert before 4: ");
    printLinkedList(head);

    // Free allocated memory
    freeLinkedList(head);

    return 0;
}
