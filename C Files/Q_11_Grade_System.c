#include <stdio.h>
int main() {
    float percentage;
    char grade;
    printf("Enter the student's percentage of marks: ");
    scanf("%f", &percentage);
    if (percentage >= 90 && percentage <= 100) {
        grade = 'A';
    } else if (percentage >= 80 && percentage < 90) {
        grade = 'B';
    } else if (percentage >= 70 && percentage < 80) {
        grade = 'C';
    } else if (percentage >= 60 && percentage < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    switch (grade) {
        case 'A':
            printf("Grade: A\n");
            break;
        case 'B':
            printf("Grade: B\n");
            break;
        case 'C':
            printf("Grade: C\n");
            break;
        case 'D':
            printf("Grade: D\n");
            break;
        case 'F':
            printf("Grade: F\n");
            break;
        default:
            printf("Invalid input\n");
            break;
    }
    return 0;
}
