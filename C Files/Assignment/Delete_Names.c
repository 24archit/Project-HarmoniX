#include <stdio.h>
#include <string.h>

struct student {
    char name[100];
    int id;
    int sub[3];
};

int main() {
    FILE *fptr = fopen("Database.txt", "r");

    if (fptr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    char targetName[100];
    printf("Enter the name to be deleted: ");
    scanf(" %[^\n]", targetName);

    FILE *dummy = fopen("dummy.txt", "w");
    struct student s;

    int found = 0; // Flag to check if the target name is found

    // Read lines using fgets to handle possible leading/trailing whitespaces
    while (fgets(s.name, sizeof(s.name), fptr) != NULL) {
        sscanf(s.name, " %99[^\n] %6d %6d %6d %6d", s.name, &s.id, &s.sub[0], &s.sub[1], &s.sub[2]);

        if (strcmp(s.name, targetName) == 0) {
            found = 1; // Set the flag to indicate that the target name is found
            continue;  // Skip writing this record to the temporary file (delete it)
        }

        fprintf(dummy, "%-99s %-6d %-6d %-6d %-6d\n", s.name, s.id, s.sub[0], s.sub[1], s.sub[2]);
    }

    fclose(fptr);
    fclose(dummy);

    if (!found) {
        remove("dummy.txt"); // If the target name is not found, remove the temporary file
        printf("Student with name '%s' not found.\n", targetName);
    } else {
        remove("Database.txt");
        rename("dummy.txt", "Database.txt");
        printf("Student with name '%s' deleted.\n", targetName);
    }

    return 0;
}
