#include<stdio.h>
int adjMatrix[20][20];
void initializeMatrix(){
    for(int i=0; i<20; i++){
        for(int j=0; j<20; j++){
            adjMatrix[i][j]=0;
        }
    }
}
void add_edge(int fromVertex, int toVertex){
  adjMatrix[fromVertex][toVertex]=1;
  adjMatrix[toVertex][fromVertex]=1; // Assuming Non Directed graph  
}
void displayMatrix(int numVertex){
    for(int i=0; i<numVertex; i++){
        for(int j=0; j<numVertex; j++){
            printf("%3d", adjMatrix[i][j]);
        }
        printf("\n");
    }
}
int main(){
    initializeMatrix();
    int numVertex=6;
    add_edge(0, 4);
    add_edge(0, 3);
    add_edge(1, 2);
    add_edge(1, 4);
    add_edge(1, 5);
    add_edge(2, 3);
    add_edge(2, 5);
    add_edge(5, 3);
    add_edge(5, 4);
    displayMatrix(numVertex);
    return 0;
}