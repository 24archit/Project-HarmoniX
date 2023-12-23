#include<stdio.h>
struct object {
    int id;
    char name [100];
    float rate;
    int quant;
};
int main() {
int n;
printf("Enter the number of items : ");
scanf("%d", &n);
struct object item[n];
for(int i=0; i<n; i++) {

    printf("Enter ID: ");
    scanf("%d", &item[i].id);

    printf("Enter Name: ");
    scanf("%s", item[i].name);

    printf("Enter Rate: ");
    scanf("%f", &item[i].rate);

    printf("Enter Quantity: ");
    scanf("%d", &item[i].quant);
}
FILE *fptr= NULL;
fptr = fopen("List.txt", "w");
for(int j=0; j<n; j++){
    fprintf(fptr, "%-3d", item[j].id);
    fprintf(fptr, "%-30s", item[j].name);
    fprintf(fptr, "%-15f", item[j].rate);
    fprintf(fptr, "%-5d", item[j].quant);
    fprintf(fptr, "\n");
}
fclose(fptr);
    return 0;
}