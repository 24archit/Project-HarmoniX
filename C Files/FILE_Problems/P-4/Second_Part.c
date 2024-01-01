#include <stdio.h>
#include <string.h>

int main() {
    char line[50000];
    printf("Enter the specific line: ");
    fgets(line, sizeof(line), stdin);
    
    int c = strlen(line);
    FILE *fptr = NULL, *afptr = NULL;
    
    fptr = fopen("Text.txt", "r");
    afptr = fopen("Text2.txt", "w");

    if (fptr == NULL || afptr == NULL) {
        perror("Error opening files");
        return 1;
    }

    char line2[c + 1];
    char ch;
    int i = 0;

    while ((ch = getc(fptr)) != EOF) {
        for (int i = 0; i < c; i++) {
            line2[i] = ch;
            ch = getc(fptr);
        }
        line2[c] = '\0';  // Null-terminate the string

        if (strcmp(line2, line) == 0) {
            fprintf(afptr, "%s", line2);
            break;  // Stop after copying the specific line
        }
    }

    fclose(fptr);
    fclose(afptr);

    printf("Line copied successfully!\n");

    return 0;
}
