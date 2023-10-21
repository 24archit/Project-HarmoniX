#include<stdio.h>
#include<math.h>
int main() {
    int n, i;
    printf("Enter the value of n: ");
    scanf("%d", &n);
    int a = n;
     i =1;
    printf("The given number in Hexadecimal system will be: ");
    while (a>0) {
        a= a%16;
        a= a/16;
        i++;
    }
    int b =i+1;
    printf("%d\n", b);
    for( int j=1; b>0 ; j++, b--) {
        
        int l = pow(16,b);
        int r =n%l;
        if(r<10) {
        printf("%d", r); }
        else if( r==10 ) { printf("A");}
        else if( r==11 ) { printf("B");}
        else if( r==12 ) { printf("C");}
        else if( r==13 ) { printf("D");}
        else if( r==14 ) { printf("E");}
        else if( r==15 ) { printf("F");}
    }
    return 0;
}