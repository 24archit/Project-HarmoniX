#include<stdio.h>
int main() {
    FILE *fptr;
    fptr=fopen("Text.txt", "w");
    char ch[100000];
    printf("Enter the text to be entered : ");
    fgets(ch, sizeof(ch), stdin);
    fprintf(fptr, "%s", ch );




    return 0;
}