#include <stdio.h>
int main(){
    int* p= NULL;
    int a =5;
    p=&a;
    printf("%d\n", p);
    *p++;
    printf("%d\n", p);
    printf("%d\n", a);



   return 0;
}