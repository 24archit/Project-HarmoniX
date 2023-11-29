#include<stdio.h>
void _swap(int*a, int*b);
int main() {
    int a;
    int b;
    printf("Enter the first number(a) : ");
    scanf("%d", &a);
    printf("Enter the second number(b): ");
    scanf("%d", &b);
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    _swap(&a,&b);
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    return 0;
}
void _swap(int*a, int*b) {
    int k;
    k=*a;
    *a=*b;
    *b=k;
    printf("Vaule of a becomes : %d\n", *a);
    printf("Vaule of b becomes : %d\n", *b);
}