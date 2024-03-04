#include <stdio.h>
#include <stdlib.h>
struct node
{
    int info;
    struct node *next;
};
struct node *createNode(int k)
{
    struct node *newNode = (struct node*)malloc(sizeof(struct node));
    newNode->info = k;
    newNode->next = NULL;
    return newNode;
}
struct node *insertAtHead(struct node *head, int item)
{
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->info = item;
    newNode->next = head;
    head = newNode;
    return head;
}
struct node *insertAtEnd(struct node *head, int item)
{
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->info = item;
    newNode->next = NULL;
    if (head == NULL)
    {
        head = newNode;
        return head;
    }
    struct node *temp = head;
    while (temp->next != NULL)
    {
        temp = temp->next;
    }
    temp->next = newNode;
    return head;
}
struct node *insertAfterX(struct node *head, int item, int x)
{
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->info = item;
    struct node *temp = head;
    while (temp != NULL && temp->info != x)
    {
        temp = temp->next;
    }
    if (temp == NULL)
    {
        printf("Element X = %d is not present\n", x);
        free(newNode);
        return head;
    }
    newNode->next = temp->next;
    temp->next = newNode;
    return head;
}
struct node *insertBeforeX(struct node *head, int item, int x)
{
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->info = item;
    if (head != NULL && head->info == x)
    {
        newNode->next = head;
        head = newNode;
        return head;
    }
    struct node *temp = head;
    struct node *temp2 = NULL;
    if (temp == NULL)
    {
        newNode->next = NULL;
        newNode = head;
        return head;
    }
    while (temp != NULL && temp->info != x)
    {
        temp2 = temp;
        temp = temp->next;
    }
    if (temp == NULL)
    {
        printf("Element X = %d is not present\n", x);
        free(newNode);
        return head;
    }
    temp2->next = newNode;
    newNode->next = temp;
    return head;
}
struct node *insertAtPosition(struct node *head, int item, int a)
{
    if (a == 1)
    {
        head = insertAtHead(head, item);
        return head;
    }
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->info = item;
    struct node *temp = head;
    int count = 1;
    while (count < a - 1)
    {
        temp = temp->next;
        count++;
    }
    if (temp->next == NULL)
    {
        newNode->next = NULL;
        temp->next = newNode;
        return head;
    }
    newNode->next = temp->next;
    temp->next = newNode;
    return head;
}
int deleteFromBegin(struct node **head)
{
    if (*head == NULL)
    {
        printf("No element present in the linked list\n");
        return -1;
    }
    int del_item = (*head)->info;
    struct node *temp = *head;
    (*head) = (*head)->next;
    free(temp);
    return del_item;
}
int deleteFromLast(struct node **head)
{
    if (*head == NULL)
    {
        printf("Linked List has no elements to delete\n");
        return -1;
    }
    struct node *temp = *head;
    struct node *temp2 = NULL;
    while (temp->next != NULL)
    {
        temp2 = temp;
        temp = temp->next;
    }
    int del_item = temp->info;
    if (temp2 == NULL)
    {
        free(*head);
        *head = NULL;
    }
    else
    {
        temp2->next = NULL;
        free(temp);
    }
    return del_item;
}
int deleteX(struct node **head, int x)
{
    if (head == NULL)
    {
        printf("Linked List is empty\n");
        return -1;
    }
    struct node *temp = *head;
    struct node *temp2 = NULL;

    while (temp != NULL && temp->info != x)
    {
        temp2 = temp;
        temp = temp->next;
    }
    if (temp == NULL)
    {
        printf("Element X = %d is not present in the linked list\n", x);
        return -1;
    }
    int k = temp->info;
    if (temp2 == NULL)
    {
        *head = temp->next;
        free(temp);
        temp = NULL;
    }
    else
    {
        temp2->next = temp->next;
        free(temp);
        temp = NULL;
    }
    return k;
}
struct node *deleteFromPostition(struct node **head, int a)
{
    if (a == 1)
    {
        deleteFromBegin(head);
        return *head;
    }
    struct node *temp = *head;
    struct node *temp2 = NULL;
    int count = 1;
    while (count < a)
    {
        temp2 = temp;
        temp = temp->next;
        count++;
    }
    if (temp->next == NULL)
    {
        deleteFromLast(head);
        return *head;
    }
    temp2->next = temp->next;
    free(temp);
    temp = NULL;
    return *head;
}
void traversal(struct node *head)
{
    if (head == NULL)
    {
        printf("No element to print\n");
    }
    struct node *temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->info);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    struct node *head = createNode(55);
    traversal(head);
    head = insertAtHead(head, 24);
    traversal(head);
    head = insertAtEnd(head, 29);
    head = insertAtEnd(head, 9);
    head = insertAtEnd(head, 39);
    head = insertAtEnd(head, 49);
    head = insertAtEnd(head, 69);
    head = insertAtEnd(head, 19);
    head = insertAtEnd(head, 79);
    traversal(head);
    deleteFromBegin(&head);
    traversal(head);
    deleteFromLast(&head);
    traversal(head);
    deleteX(&head, 9);
    traversal(head);
    head = insertAtPosition(head, 78, 3);
    traversal(head);
    head = insertAtPosition(head, 900, 1);
    traversal(head);
    head = insertAtPosition(head, 0, 9);
    traversal(head);
    head = deleteFromPostition(&head, 9);
    traversal(head);
    return 0;
}