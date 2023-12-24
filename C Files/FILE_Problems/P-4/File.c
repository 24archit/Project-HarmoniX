//Code to copy a file contents to another file
#include <stdio.h>
int main() {
    FILE *sourceFile, *destinationFile;
    char ch;
    sourceFile = fopen("Text.txt", "r");
    destinationFile = fopen("destination.txt", "w");
    while (  (ch = fgetc(sourceFile)) != EOF) {
       ;
        fputc(ch, destinationFile);
    }
    fclose(sourceFile);
    fclose(destinationFile);
    printf("File copied successfully!\n");
    return 0; 
}
