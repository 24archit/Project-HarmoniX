#include<stdio.h>
void rankdisplay();
void namedisplay();
void addname();
void deletename();
struct student {
    char name[100];
    int id;
    int sub[5];
    int rank;
};
int main() {
    printf("\nEnter 1 : Display Student List Rankwise\n");
    printf("Enter 2 : Display Student List namewise\n");
    printf("Enter 3 : Add Name\n");
    printf("Enter 4 : Delete Name\n");
    int choice;
    printf("\nEnter the Choice Number : ");
    scanf("%d", &choice);
    FILE *fptr;
    struct student s[n];
    switch(choice) {
        case 1: 
        rankdisplay();
        break;
        case 2: 
        namedisplay();
        break;
        case 3 :
            fopen("Database.txt", "a");
            int n;
            printf("Enter the number of students details you want to enter: \n");
            scanf("%d", &n);  
            addname(s, n);
            fclose(fptr);
        break;
        case 4 :
            deletename();
        break;
    }
    return 0;
}
void rankdisplay() {

}
void namedisplay() {

}
void addname(struct student s[], int n) {
    
    for(int i=0; i<n; i++){
        printf("Enter the student name : ");
        scanf("%s", s[i].name );  
    }

}
void deletename() {

}