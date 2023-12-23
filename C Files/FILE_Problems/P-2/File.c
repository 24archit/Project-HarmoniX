// Code to read a file and then copy all the vowels to an another file.
#include<stdio.h>
int main() {
    FILE *fptr = NULL;
    FILE *afptr = NULL;
    afptr = fopen("Text2.txt", "w");
    fptr = fopen("Text.txt", "r");
    char ch ='\0';
    while(ch != EOF) {
        ch = fgetc(fptr);
        if(ch=='a' || ch=='e'||ch=='i'||ch=='o'||ch=='u') {
            fprintf(afptr,"%c", ch);
        }
    }
    return 0;
}