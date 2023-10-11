#include <stdio.h>
int main() {
    float n, a, c;
    printf("Enter the Total Distance: ");
    scanf("%f", &n);
    printf("Enter the gas the vehicle emits\n");
    printf("Press 1 For Gas 1\n");
    printf("Press 2 For Gas 2\n");
    printf("Press 3 For Gas 3\n");
    printf("Press 4 For Gas 4\n");
    scanf("%f", &a);
    printf("Enter the amount of gas the vehicle emits: ");
    scanf("%f", &c);
    if (n >= 50000 && c <= 3.0 && a == 1) {
        printf("Normal");
    } else if (n >= 50000 && c > 3.0 && a == 1) {
        printf("Abnormal");
    } else if (n >= 50000 && c <= 5.5 && a == 2) {
        printf("Normal");
    } else if (n >= 50000 && c > 5.5 && a == 2) {
        printf("Abnormal");
    } else if (n >= 50000 && c <= 4.0 && a == 3) {
        printf("Normal");
    } else if (n >= 50000 && c > 4.0 && a == 3) {
        printf("Abnormal");
    } else if (n >= 50000 && c <= 6.5 && a == 4) {
        printf("Normal");
    } else if (n >= 50000 && c > 6.5 && a == 4) {
        printf("Abnormal");
    } else if (n < 50000 && c <= 2.0 && a == 1) {
        printf("Normal");
    } else if (n < 50000 && c > 2.0 && a == 1) {
        printf("Abnormal");
    } else if (n < 50000 && c <= 4.5 && a == 2) {
        printf("Normal");
    } else if (n < 50000 && c > 4.5 && a == 2) {
        printf("Abnormal");
    } else if (n < 50000 && c <= 3.0 && a == 3) {
        printf("Normal");
    } else if (n < 50000 && c > 3.0 && a == 3) {
        printf("Abnormal");
    } else if (n < 50000 && c <= 5.5 && a == 4) {
        printf("Normal");
    } else if (n < 50000 && c > 5.5 && a == 4) {
        printf("Abnormal");
    }

    return 0;
}


