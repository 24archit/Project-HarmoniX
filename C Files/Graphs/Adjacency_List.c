#include<stdio.h>
#include<stdlib.h>
int adjMatrix[20][20];
struct node{
    int data;
    struct node* next;
};
void displayAdjlist(struct node* adjlist[], int v){
    for(int i=0; i<v; i++){
        printf("%d--->", i);
        struct node* ptr = adjlist[i];
        while(ptr != NULL){
            printf("%3d", ptr->data);
            ptr=ptr->next;
        } 
        printf("\n");
}
}
void addEdge(struct node* adjlist[], int u, int v){
    struct node* newNode = (struct node*)malloc(sizeof(struct node));
    newNode->data = v;
    newNode->next = adjlist[u];
    adjlist[u]=newNode;

    struct node* newNode = (struct node*)malloc(sizeof(struct node));
    newNode->data = u;
    newNode->next = adjlist[v];
    adjlist[v]=newNode;
}
int main(){

    return 0;
}