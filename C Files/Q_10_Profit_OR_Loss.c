#include <stdio.h>
int main() {
    int a, b, c;
    printf("Enter the First Number: ");
    scanf("%d", &a);
    printf("Enter the Second Number: ");
    scanf("%d", &b);
    printf("Enter the Third Number: ");
    scanf("%d", &c);
    if (a > b && a > c) {
        printf("Greatest Number is %d\n", a);
    } else if (b > a && b > c) {
        printf("Greatest Number is %d\n", b);
    } else if (c > a && c > b) {
        printf("Greatest Number is %d\n", c);
    } else {
        printf("There are one or more equal greatest numbers.\n");
    }
    return 0;
}

