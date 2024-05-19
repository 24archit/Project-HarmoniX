#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node* left;
    struct node* right;
};
struct node* createNode(int data){
    struct node* newNode = (struct node*)malloc(sizeof(struct node));
    newNode->left=NULL;
    newNode->right=NULL;
    newNode->data=data;
    return newNode;
}
struct node* insertNode(struct node* root, int data){
    if(root==NULL){
        root=createNode(data);
    }
    else{
        if(root->data > data){
            root->left=insertNode(root->left, data);
        }
        else{
            root->right=insertNode(root->right, data);
        }
    }
}
int main() {




    return 0;
}