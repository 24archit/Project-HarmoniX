#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node* right;
    struct node* left;
};
struct node* createnode(int item){
    struct node* newnode = (struct node*)malloc(sizeof(struct node));
    newnode->data = item;
    newnode->left = newnode->right=NULL;
    return newnode;
}
struct node* insertnode(struct node* root, int item){
    if(root==NULL){
        return createnode(item);
    }
    if(root->data>item){
        root->left=insertnode(root->left, item);
    }
    else if(root->data<item){
        root->right=insertnode(root->right, item);
    }
    return root;
}
void preorder(struct node* root){
        if(root !=NULL){
            printf("%d ", root->data);
            preorder(root->left);
            preorder(root->right);
        }
}
void inorder(struct node* root){
    if(root !=NULL){
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}
void postorder(struct node* root){
    if(root != NULL){
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}
struct node* insertnode(struct node* root, int item){
    if(root==NULL){
        return createnode(item);
    }
    if(root->data<item){
        root->left=insertnode(root->left, item);
    }
    else if(root->data>item){
        root->right=insertnode(root->right, item);
    }
    return root;
}
int binsearch(int arr[], int start, int end, int key){
   if(end>=start){
    int mid = (start+end)/2;
    if(arr)
   }
}
int main(){
    return 0;
}