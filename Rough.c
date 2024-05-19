#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node* next;
};
struct node* insertathead_SL(struct node* head, int item){
    struct node* newnode = (struct node*)malloc(sizeof(struct node));
    newnode->data=item;
    newnode->next = head;
    head=newnode;
    return head;
}
struct node* insertathead_CL(struct node* head, int item){
    struct node* newnode =(struct node*)malloc(sizeof(struct node));
    newnode->data=item;
    newnode->next = head;
    struct node* temp = head;
    while(temp ->next != head){
        temp=temp->next;
    }
    temp->next = newnode;
    head = newnode;
    return head;  
}
struct node* insertatend(struct node* head, int item){
    struct node* newnode = (struct node*)malloc(sizeof(struct node));
    newnode->data=item;
    newnode-next
}
int main(){
    int n; 
    printf("Enter the number of elements in the array: \n");
    return 0;
}