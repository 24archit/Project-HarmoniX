#include<stdio.h>
int main() {
FILE *fptr = NULL;
fptr = fopen("List.txt", "r");
int sum =0;
char ch; 
float rate;
int quant, id;
char name[100];
while(fscanf(fptr, "%d %s %f %d" ,&id, name, &rate, &quant)==4) {
    sum = sum +(rate*quant);
}
fclose(fptr);
printf("Total Bill is : %d",sum );

    return 0;
}