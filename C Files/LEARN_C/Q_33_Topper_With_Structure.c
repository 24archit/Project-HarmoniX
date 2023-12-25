#include<stdio.h>
struct student {
    char name[30];
    int id;
    int marks[5];
    int total;
};
int main() {
    int n, a;
    printf("Enter the number of students: ");
    scanf("%d", &n);
    struct student s[n];
    printf("Enter the students details....");
    for(int i=0; i<n; i++) {

        printf("\nEnter the name of the student : ");
        scanf("%s", s[i].name);

        printf("Enter the id of the student : ");
        scanf("%d", &s[i].id);

        printf("Enter the marks of the student in five subjects : ");
        for(int j=0;  j<5; j++) {
            scanf("%d", &s[i].marks[j]);
        }

        s[i].total=s[i].marks[0]+s[i].marks[1]+s[i].marks[2]+s[i].marks[3]+s[i].marks[4];
    }
    int max = s[0].total;
    for(int i=0; i<n; i++) {
        if(max<=s[i].total){
            max=s[i].total;
            a=i;
        }
    }
    printf("Topper Details are :");
    printf("\nName : %s", s[a].name);
    printf("\nID : %d", s[a].id);
    printf("\nTotal Marks: %d", s[a].total);
    printf("\nMarks in each subject is as follows..");
    for(int i=0; i<5; i++){
        printf("%d ", s[a].marks[i]);
    }
    return 0;
}