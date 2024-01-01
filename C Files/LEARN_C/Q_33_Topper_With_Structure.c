#include<stdio.h>
#include<string.h>
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
    struct student copy;
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
    for(int i=0; i<n; i++){
        for(int j=i; j<n; j++){
            if(s[i].total<s[j].total){
                strcpy(copy.name, s[j].name);
                strcpy(s[j].name, s[i].name);
                strcpy(s[i].name, copy.name);
                copy.id=s[j].id;
                s[j].id=s[i].id;
                s[i].id=copy.id;
                copy.marks[0]=s[j].marks[0];
                copy.marks[1]=s[j].marks[1];
                copy.marks[2]=s[j].marks[2];
                copy.marks[3]=s[j].marks[3];
                copy.marks[4]=s[j].marks[4];
                copy.total=s[j].total;
                s[j].total=s[i].total;
                s[i].total=copy.total;
            }
        }
    }
    printf("\nRank List is as follows...\n");
    for(int i=0; i<n; i++){
        printf("%-20s", s[i].name);
        printf("%-3d", s[i].id);
        for(int j=0; j<5; j++){
            printf("%-3d", s[i].marks[j]);
        }
        printf("%-3d\n", s[i].total);
        
    }
    return 0;
}