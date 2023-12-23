#include<stdio.h>
#include<stdlib.h>
struct student {
    char name[100];
    int id;
    int sub[3];
};
int main() {
    FILE *fptr=NULL;
    fptr=fopen("Database.txt", "a");
    int n;
    printf("Enter the number of students details you want to enter: \n");
    scanf("%d", &n);  
    struct student s[n];
    for(int i=0; i<n; i++) {
        int sum =0;
        printf("Enter the Name of Student %d : ", i+1);
        scanf(" %[^\n]", s[i].name);
        fprintf(fptr, "%-30s", s[i].name);
        printf("Enter the ID of Student %d : ", i+1);
        scanf("%d", &s[i].id);
        fprintf(fptr, "%-16d", s[i].id);
        for(int j=0; j<3; j++) {
            printf("Enter the marks in Sub-%d : ", j+1);
            scanf("%d", &s[i].sub[j]);
            fprintf(fptr, "%-16d", s[i].sub[j]);
            sum = sum + s[i].sub[j];
        }
        fprintf(fptr, "%-16d", sum);
        fprintf(fptr, "\n");  
    }
    fclose(fptr);
    return 0;
}