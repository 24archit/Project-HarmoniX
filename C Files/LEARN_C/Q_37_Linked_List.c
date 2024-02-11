#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
void print (struct node *ptr){
    while(ptr != NULL){
        printf("%d", ptr->data);
        ptr = ptr->next;
    }
}
int main()
{
    struct node *head = NULL;
    struct node *second = NULL;
    struct node *third = NULL;

    head = (struct node *)malloc(sizeof(struct node));
    second = (struct node *)malloc(sizeof(struct node));
    third = (struct node *)malloc(sizeof(struct node));

    head->data = 5;
    head->next = second;

    second->data = 88;
    second->next = third;

    third->data = 90;
    third->next = NULL;

    printf("%d", third->data);

    return 0;
}
