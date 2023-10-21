// C program to print the pascal's triangle pattern 
#include <stdio.h> 

int main() 
{ 
	int a =1;
    int b =1; 
    int c =a || --b;
    int d = a-- && --b;
    printf("a =%d, b =%d, c= %d, d=%d", a,b,c,d);
	return 0; 
}
