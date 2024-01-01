#include <stdio.h>
#include <string.h>

int main() {
    // strlen()
    const char* myString = "Hello, C!";
    printf("Length of the string: %zu\n", strlen(myString));

    // strcpy()
    char destination[20];
    strcpy(destination, myString);
    printf("Copied string: %s\n", destination);

    // strncpy()
    char source[] = "Copy me!";
    strncpy(destination, source, 6);
    destination[6] = '\0'; // Null-terminate the string
    printf("Partial copy: %s\n", destination);

    // strcmp()
    const char* str1 = "apple";
    const char* str2 = "banana";
    int result = strcmp(str1, str2);
    printf("Comparison result: %d\n", result);

    // strncmp()
    result = strncmp(str1, str2, 3);
    printf("Partial comparison result: %d\n", result);

    // strcat()
    char dest[20] = "Hello, ";
    const char* appendStr = "world!";
    strcat(dest, appendStr);
    printf("Concatenated string: %s\n", dest);

    // strncat()
    char dest2[20] = "Hello, ";
    strncat(dest2, appendStr, 3);
    printf("Partial concatenation: %s\n", dest2);

    // strchr()
    const char* searchString = "Hello, C!";
    char searchChar = 'C';
    const char* found = strchr(searchString, searchChar);
    printf("Character '%c' found at position: %td\n", searchChar, found - searchString);

    // strrchr()
    const char* lastFound = strrchr(searchString, 'l');
    printf("Last 'l' found at position: %td\n", lastFound - searchString);

    // strstr()
    const char* substr = strstr(searchString, "C");
    printf("Substring 'C' found at position: %td\n", substr - searchString);

    // strtok()
    char strtokString[] = "Tokenize,this,string";
    char* token = strtok(strtokString, ",");
    while (token != NULL) {
        printf("Token: %s\n", token);
        token = strtok(NULL, ",");
    }

    // sprintf()
    char formatted[50];
    int value = 42;
    sprintf(formatted, "The value is: %d", value);
    printf("%s\n", formatted);

    // sscanf()
    char input[] = "123 4.56";
    int intValue;
    float floatValue;
    sscanf(input, "%d %f", &intValue, &floatValue);
    printf("Parsed values: %d, %f\n", intValue, floatValue);

    // snprintf()
    char buffer[10];
    int n = snprintf(buffer, 10, "Hello, World!");
    printf("Truncated string: %s, characters written: %d\n", buffer, n);

    // memset()
    char buffer2[10];
    memset(buffer2, 'A', 5);
    printf("Buffer after memset: %s\n", buffer2);

    // memcpy()
    char source2[] = "Copy me!";
    char destination2[20];
    memcpy(destination2, source2, strlen(source2) + 1);
    printf("Copied string with memcpy: %s\n", destination2);

    // memmove()
    char buffer3[] = "Move me!";
    memmove(buffer3 + 3, buffer3, strlen(buffer3) + 1);
    printf("After memmove: %s\n", buffer3);

    return 0;
}
