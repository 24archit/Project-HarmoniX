#include <stdio.h>
int main() {
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    int remainder = n % 2;
    if (remainder == 0) {
        printf("The Given Integer is an 'Even' integer\n");
    } else {
        printf("The Given Integer is an 'Odd' integer.\n");
    }
    return 0;
}
