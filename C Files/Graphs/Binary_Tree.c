#include <stdio.h>
#include <stdlib.h>

// Structure of a binary tree node
struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

// Function to create a new binary tree node
struct TreeNode* createNode(int data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->left = newNode->right = NULL;
    return newNode;
}

// Function to insert a node into a binary tree
struct TreeNode* insertNode(struct TreeNode* root, int data) {
    if (root == NULL)
        return createNode(data);

    if (data < root->data)
        root->left = insertNode(root->left, data);
    else if (data > root->data)
        root->right = insertNode(root->right, data);

    return root;
}

// Function to delete a node from a binary tree
struct TreeNode* deleteNode(struct TreeNode* root, int key) {
    if (root == NULL)
        return root;

    if (key < root->data)
        root->left = deleteNode(root->left, key);
    else if (key > root->data)
        root->right = deleteNode(root->right, key);
    else {
        if (root->left == NULL) {
            struct TreeNode* temp = root->right;
            free(root);
            return temp;
        }
        else if (root->right == NULL) {
            struct TreeNode* temp = root->left;
            free(root);
            return temp;
        }
        struct TreeNode* temp = root->right;
        while (temp->left != NULL)
            temp = temp->left;
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}

// Function to perform an inorder traversal of a binary tree recursively
void inorderTraversal(struct TreeNode* root) {
    if (root != NULL) {
        inorderTraversal(root->left);
        printf("%d ", root->data);
        inorderTraversal(root->right);
    }
}

// Function to perform a preorder traversal of a binary tree recursively
void preorderTraversal(struct TreeNode* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}

// Function to perform a postorder traversal of a binary tree recursively
void postorderTraversal(struct TreeNode* root) {
    if (root != NULL) {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        printf("%d ", root->data);
    }
}

// Function to search for a key in a binary tree recursively
struct TreeNode* search(struct TreeNode* root, int key) {
    if (root == NULL || root->data == key)
        return root;
    
    if (key < root->data)
        return search(root->left, key);
    else
        return search(root->right, key);
}
void merge (int* arr, int s, int e){
    int mid = (s+e)/2;
    int len1 = mid - s +1;
    int len2 = e - mid;
    int*arr1 = (int*)malloc(len1*sizeof(int));
    int* arr2 = (int*)malloc(len2*sizeof(int));
    for(int i=0; i<len1; i++){
        arr1[i]=arr[s+i];
    }
    for(int i=0; i<len2; i++){
        arr2[i]=arr[mid+1+i];
    }
    int index1=0;
    int index2=0; 
    int mainarray =s;
    while(index1<len1 && index2<len2){
        if(arr2[index2]>=arr1[index1]){
            arr[mainarray++]=arr1[index1++];
        }
        else {
            arr[mainarray++]=arr2[index2++];
        }
    }
    while(index1<len1){
         arr[mainarray++]=arr1[index1++];
    }
    while (index2<len2)
    {
        arr[mainarray++]=arr2[index2++];
    }
    free(arr1);
    free(arr2);
}
void mergesort(int *arr, int s, int e) {
    if (s < e) {
        int mid = (s + e) / 2;
        mergesort(arr, s, mid);
        mergesort(arr, mid + 1, e);
        merge(arr, s, e);
    }
}
void swap(int * a, int * b){
    int p = *a;
    *a = *b;   
    *b=p;
}
void bubblesort(int* arr, int n){
    for(int i=0; i<n-1; i++){
        for(int j=0; j<n-1-i; j++){
            if(arr[j]>=arr[j+1]){
                swap(&arr[j], &arr[j+1]);
            }
        }
    }
}
void inertionsort(int*arr , int n){
    for(int i=1; i<n; i++){
        int temp = arr[i];
        int j = i-1;
        for(;j>=0; j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j];
            }
            else {
                break;
            }
        }
        arr[j+1]=temp;
    }
}
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Select the rightmost element as pivot
    int i = (low - 1); // Index of the smaller element
    
    for (int j = low; j <= high - 1; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of smaller element
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// Function to implement Quick Sort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        int pi = partition(arr, low, high);
        
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}







// Infix to postfix
struct Stack {
    int top;
    unsigned capacity;
    char* array;
};

// Function to create a stack
struct Stack* createStack(unsigned capacity) {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    if (!stack)
        return NULL;
    stack->top = -1;
    stack->capacity = capacity;
    stack->array = (char*)malloc(stack->capacity * sizeof(char));
    if (!stack->array)
        return NULL;
    return stack;
}

// Function to check if the stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Function to push an element to the stack
void push(struct Stack* stack, char item) {
    stack->array[++stack->top] = item;
}

// Function to pop an element from the stack
char pop(struct Stack* stack) {
    if (!isEmpty(stack))
        return stack->array[stack->top--];
    return '$'; // Return $ if the stack is empty
}

// Function to return the top element of the stack
char peek(struct Stack* stack) {
    if (!isEmpty(stack))
        return stack->array[stack->top];
    return '$'; // Return $ if the stack is empty
}

// Function to determine the precedence of operators
int precedence(char ch) {
    switch (ch) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
    }
    return -1;
}

// Function to convert infix expression to postfix expression
void infixToPostfix(char* infix, char* postfix) {
    struct Stack* stack = createStack(strlen(infix));
    if (!stack)
        return;

    int i, k;
    for (i = 0, k = -1; infix[i]; ++i) {
        if (isalnum(infix[i]))
            postfix[++k] = infix[i];
        else if (infix[i] == '(')
            push(stack, infix[i]);
        else if (infix[i] == ')') {
            while (!isEmpty(stack) && peek(stack) != '(')
                postfix[++k] = pop(stack);
            if (!isEmpty(stack) && peek(stack) != '(')
                return; // Invalid expression
            else
                pop(stack);
        } else { // Operator encountered
            while (!isEmpty(stack) && precedence(infix[i]) <= precedence(peek(stack)))
                postfix[++k] = pop(stack);
            push(stack, infix[i]);
        }
    }

    // Pop remaining operators from the stack
    while (!isEmpty(stack))
        postfix[++k] = pop(stack);
    postfix[++k] = '\0';
}
// int main() {
//     char infix[MAX_SIZE];
//     char postfix[MAX_SIZE];

//     printf("Enter infix expression: ");
//     fgets(infix, MAX_SIZE, stdin);

//     infixToPostfix(infix, postfix);

//     printf("Postfix expression: %s\n", postfix);

//     return 0;
// }









// #include <stdio.h>
// #include <stdlib.h>
// #include <ctype.h>

// #define MAX_SIZE 100

// // Structure to represent a stack
// struct Stack {
//     int top;
//     unsigned capacity;
//     int* array;
// };

// // Function to create a stack
// struct Stack* createStack(unsigned capacity) {
//     struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
//     if (!stack)
//         return NULL;
//     stack->top = -1;
//     stack->capacity = capacity;
//     stack->array = (int*)malloc(stack->capacity * sizeof(int));
//     if (!stack->array)
//         return NULL;
//     return stack;
// }

// // Function to check if the stack is empty
// int isEmpty(struct Stack* stack) {
//     return stack->top == -1;
// }

// // Function to push an element to the stack
// void push(struct Stack* stack, int item) {
//     stack->array[++stack->top] = item;
// }

// // Function to pop an element from the stack
// int pop(struct Stack* stack) {
//     if (!isEmpty(stack))
//         return stack->array[stack->top--];
//     return -1; // Return -1 if the stack is empty
// }

// // Function to evaluate postfix expression
// int evaluatePostfix(char* postfix) {
//     struct Stack* stack = createStack(MAX_SIZE);
//     if (!stack)
//         return -1; // Error in stack creation

//     int i;
//     for (i = 0; postfix[i]; ++i) {
//         if (isdigit(postfix[i]))
//             push(stack, postfix[i] - '0'); // Convert character to integer
//         else {
//             int operand2 = pop(stack);
//             int operand1 = pop(stack);
//             switch (postfix[i]) {
//                 case '+':
//                     push(stack, operand1 + operand2);
//                     break;
//                 case '-':
//                     push(stack, operand1 - operand2);
//                     break;
//                 case '*':
//                     push(stack, operand1 * operand2);
//                     break;
//                 case '/':
//                     push(stack, operand1 / operand2);
//                     break;
//             }
//         }
//     }
//     return pop(stack);
// }

// int main() {
//     char postfix[MAX_SIZE];

//     printf("Enter postfix expression: ");
//     fgets(postfix, MAX_SIZE, stdin);

//     int result = evaluatePostfix(postfix);
//     printf("Result: %d\n", result);

//     return 0;
// }

int main() {
    struct TreeNode* root = NULL;
    root = insertNode(root, 50);
    insertNode(root, 30);
    insertNode(root, 20);
    insertNode(root, 40);
    insertNode(root, 70);
    insertNode(root, 60);
    insertNode(root, 80);

    printf("Inorder traversal: ");
    inorderTraversal(root);
    printf("\n");

    printf("Preorder traversal: ");
    preorderTraversal(root);
    printf("\n");

    printf("Postorder traversal: ");
    postorderTraversal(root);
    printf("\n");

    int key = 70;
    struct TreeNode* result = search(root, key);
    if (result != NULL)
        printf("%d found in the tree.\n", key);
    else
        printf("%d not found in the tree.\n", key);

    root = deleteNode(root, 20);
    printf("Inorder traversal after deleting 20: ");
    inorderTraversal(root);
    printf("\n");

    return 0;
}
