
#include <stdio.h> 
int main() {
float a, b, c, d;
printf("Enter the real part of the First Complex Number: \n"); scanf("%f", &a);
printf("Enter the imaginary part of the First Complex Number: \n"); scanf("%f", &b);
printf("Enter the real part of the Second Complex Number: \n"); scanf("%f", &c);
printf("Enter the imaginary part of the First Complex Number: \n"); scanf("%f", &d);
printf("The sum will be: (%f)+ i(%f)", (a+b), (c+d) );
return 0;
}