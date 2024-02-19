#include<stdio.h>
#include<stdlib.h>

struct Stack {
    int top;
    int size;
    int* arr;
};

void push(struct Stack* S, int data) {
    if (S->top == (S->size) - 1) {
        printf("Memory Overflow\n");
        return;
    }
    S->top++;
    S->arr[S->top] = data;
}

int pop(struct Stack* S) {
    if (S->top == -1) {
        printf("Stack is empty\n");
        return -1; // Indicate failure, you might handle it differently based on your needs
    }
    return S->arr[S->top--];
   
}

void printStack(struct Stack* S) {
    if (S->top == -1) {
        printf("Stack is empty\n");
        return;
    }
    printf("Elements of the stack:\n");
    for (int i = S->top; i >= 0; i--) {
        printf("%d ", S->arr[i]);
    }
    printf("\n");
}

int main() {
    struct Stack* S = (struct Stack*)malloc(sizeof(struct Stack));
    if (S == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }
    S->size = 100; // Assuming a maximum size of 100 for the stack
    S->arr = (int*)malloc(S->size * sizeof(int));
    if (S->arr == NULL) {
        printf("Memory allocation failed\n");
        free(S);
        return 1;
    }
    S->top = -1; // Initialize top to indicate an empty stack

    push(S, 20);
    push(S, 30);
    push(S, 50);
    push(S, 80);

    printStack(S);

    free(S->arr);
    free(S);
    
    return 0;
}
