#include<stdio.h>
#include<stdlib.h>
#include<string.h>
struct student{
    char name[50];
    int id;
    int arr[3];
    int sum;
};
int main() {
FILE *fptr= NULL;
fptr = fopen("Database.txt", "r");
FILE *ptr =NULL;
ptr = fopen("Dummy.txt", "w");
char delname[50];
printf("Enter the name to be deleted : ");
scanf(" %s", delname);
struct student s;
while(fscanf(fptr, " %s %d %d %d %d %d", s.name, &s.id, &s.arr[0], &s.arr[1], &s.arr[2], &s.sum)==6) {
    if((strcmp(s.name, delname)) !=0) {
       fprintf(ptr, "%-30s %-16d %-16d %-16d %-16d", s.name, s.id, s.arr[0], s.arr[1], s.arr[2]);
       fprintf(ptr, "\n");
    }
}
fclose(fptr);
fclose(ptr);
ptr =fopen("Dummy.txt", "r");
fptr= fopen("Database.txt", "w");
int ch;
ch = fgetc(ptr);
while(ch !=EOF) {
    fputc(ch, fptr);
    ch =fgetc(ptr);
}
remove("Dummy.txt");
fclose(fptr);
fclose(ptr);
    return 0;
}
