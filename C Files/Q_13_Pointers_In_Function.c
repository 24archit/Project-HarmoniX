#include<stdio.h>
void swap (int a, int b);
void _swap(int*a, int*b);
int main() {
    int a;
    int b;
    printf("Enter the first number(a) : ");
    scanf("%d", &a);
    printf("Enter the second number(b): ");
    scanf("%d", &b);
    swap(a, b);
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    _swap(&a,&b);
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    return 0;
}
void swap(int a, int b) {
    a=a+b;
    b=a-b;
    a=a-b;
    printf("Vaule of a becomes : %d\n", a);
    printf("Vaule of b becomes : %d\n", b);
}
void _swap(int*a, int*b) {
    int k=0;
    k=*a;
    *a=*b;
    *b=k;
    printf("Vaule of a becomes : %d\n", *a);
    printf("Vaule of b becomes : %d\n", *b);
}