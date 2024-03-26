#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node* left;
    struct node* right;
};
struct node* createNode(int data){
    struct node* n = (struct node*)malloc(sizeof(struct node));
    n->left=NULL;
    n->right=NULL;
    n->data=data;
    return n;
}
int main() {




    return 0;
}