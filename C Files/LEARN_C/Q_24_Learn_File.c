#include<stdio.h>
int main() {
    FILE *ptr=NULL;
    ptr =fopen("Arc.txt", "w");
    char name[] = "My name is Archit Mishra";
    fprintf(ptr, "%s", name);
    fclose(ptr);
    FILE *fptr=NULL;
    fptr =fopen("Arc.txt", "r");
    int n=80;
    char myname[80];
    fgets(myname,n, fptr);
    printf("%s", myname);
    fclose(fptr);
    return 0;
}