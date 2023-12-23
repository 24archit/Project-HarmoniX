#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct student {
    char name[50];
    int id;
    int marks[3];
    int sum;
    int rank;
};
void deletename(FILE *fptr, char delname[]) {
    fptr = fopen("Database.txt", "r");
    FILE *ptr = NULL;
    ptr = fopen("Dummy.txt", "w");
    struct student s;
    while (fscanf(fptr, " %s %d %d %d %d %d", s.name, &s.id, &s.marks[0], &s.marks[1], &s.marks[2], &s.sum) == 6) {
        if ((strcmp(s.name, delname)) == 0) {
            fprintf(ptr, "%-30s %-16d %-16d %-16d %-16d", s.name, s.id, s.marks[0], s.marks[1], s.marks[2]);
            fprintf(ptr, "\n");
        }
    }
    fclose(fptr);
    fclose(ptr);
    ptr = fopen("Dummy.txt", "r");
    fptr = fopen("Database.txt", "w");
    int ch;
    ch = fgetc(ptr);
    while (ch != EOF) {
        fputc(ch, fptr);
        ch = fgetc(ptr);
    }
    remove("Dummy.txt");
    fclose(fptr);
    fclose(ptr);
}
int main() {
    FILE *fptr = NULL;
    FILE *ptr = NULL;
    fptr = fopen("Database.txt", "r");
    ptr = fopen("Dummy2.txt", "a");
    struct student s;
    struct student s1;
    int key=-1;
    int i = 1;
    int c;
    
        while (fscanf(fptr, "%s %d %d %d %d %d", s.name, &s.id, &s.marks[0], &s.marks[1], &s.marks[2], &s.sum) == 6) {
            if (key < s.sum) {
            strcpy(s1.name, s.name);
            s1.id=s.id;
            s1.marks[0]=s.marks[0];
            s1.marks[1]=s.marks[2];
            s1.marks[2]=s.marks[2];
            key = s.sum;
            }
        }
        s1.rank=i;
        i++;
        fprintf(ptr,"%-16d %-30s %-16d %-16d %-16d %-16d %-16d\n", s1.rank, s1.name, s1.id, s1.marks[0], s1.marks[1], s1.marks[2], s1.sum );
        deletename(fptr, s1.name);
        rewind(fptr);
    
    fclose(fptr);
    fclose(ptr);
    ptr = fopen("Dummy2.txt", "r");
    fptr = fopen("Database.txt", "w");
    int ch;
    ch = fgetc(ptr);
    while (ch != EOF) {
        fputc(ch, fptr);
        ch = fgetc(ptr);
    }
    remove("Dummy2.txt");
    fclose(fptr);
    fclose(ptr);

    return 0;
}
