#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node* next;
};
int adjMatrix[20][20];
void initialiseMatrix(){
    for(int i=0; i<20; i++){
        for(int j=0; j<20; j++){
            adjMatrix[i][j]=0;
        }
    }
}
void add_Edge_adjMatrix(int fromVertex, int toVertex){
    adjMatrix[fromVertex][toVertex]=1;
    adjMatrix[toVertex][fromVertex]=1;
}
void add_Edge_adjList(struct node* adjlist[], int fromVertex, int toVertex){
    struct node* newNode1 =(struct node*)malloc(sizeof(struct node));
    newNode1->data = toVertex;
    newNode1->next = adjlist[fromVertex];
    adjlist[fromVertex]=newNode1;

    struct node* newNode2 =(struct node*)malloc(sizeof(struct node));
    newNode2->data = toVertex;
    newNode2->next = adjlist[fromVertex];
    adjlist[fromVertex]=newNode2;
}
void display_adjMatrix(int numNodes){
    printf("  ");
    for(int i =0; i<numNodes; i++){
        printf("%2d", i);
    }
    for(int i=0; i<numNodes; i++){
        printf("%2d", i);
        for(int j=0; j<numNodes;j++){
            printf("%2d", adjMatrix[i][j]);
        }
    }
}
void display_adjList(struct node* adjlist[], int numNodes){
    for(int i=0; i<numNodes; i++){
        printf("%2d--->", i);
        struct node* temp = adjlist[i];
        while(temp != NULL){
            printf("%2d", temp->data);
            temp = temp->next;
        }
        printf("\n");
    }
}
void convert_List_To_Matrix(struct node* adjlist[], int numNodes){
    initialiseMatrix();
    for(int i = 0; i < numNodes; i++){
        struct node* temp = adjlist[i];
        while(temp != NULL){
            int toVertex = temp->data;
            add_Edge_adjMatrix(i, toVertex);
            temp = temp->next;
        }
    }
}
int main(){
    return 0;
}