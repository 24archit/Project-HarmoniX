#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define MAX_SIZE 100

// Structure to represent a stack
struct Stack {
    int top;
    unsigned capacity;
    int* array;
};

// Function to create a stack
struct Stack* createStack(unsigned capacity) {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    if (!stack)
        return NULL;
    stack->top = -1;
    stack->capacity = capacity;
    stack->array = (int*)malloc(stack->capacity * sizeof(int));
    if (!stack->array)
        return NULL;
    return stack;
}

// Function to check if the stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Function to push an element to the stack
void push(struct Stack* stack, int item) {
    stack->array[++stack->top] = item;
}

// Function to pop an element from the stack
int pop(struct Stack* stack) {
    if (!isEmpty(stack))
        return stack->array[stack->top--];
    return -1; // Return -1 if the stack is empty
}

// Function to evaluate postfix expression
int evaluatePostfix(char* postfix) {
    struct Stack* stack = createStack(MAX_SIZE);
    if (!stack)
        return -1; // Error in stack creation

    int i;
    for (i = 0; postfix[i]; ++i) {
        if (isdigit(postfix[i]))
            push(stack, postfix[i] - '0'); // Convert character to integer
        else {
            int operand2 = pop(stack);
            int operand1 = pop(stack);
            switch (postfix[i]) {
                case '+':
                    push(stack, operand1 + operand2);
                    break;
                case '-':
                    push(stack, operand1 - operand2);
                    break;
                case '*':
                    push(stack, operand1 * operand2);
                    break;
                case '/':
                    push(stack, operand1 / operand2);
                    break;
            }
        }
    }
    return pop(stack);
}

int main() {
    char postfix[MAX_SIZE];

    printf("Enter postfix expression: ");
    fgets(postfix, MAX_SIZE, stdin);

    int result = evaluatePostfix(postfix);
    printf("Result: %d\n", result);

    return 0;
}
