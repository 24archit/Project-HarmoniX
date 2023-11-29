#include <stdio.h>
int main() {
  int printfibonacci(int n);
  int n;
  printf("Enter the number : \n");
  scanf("%d", &n);
  if(n<0) {
   printf("Please enter a non-negative integer");
   return 1;
  }
  for(int i=1; i<=n; i++) {
   int k = printfibonacci(i);
   printf("%d ", k);
  }
return 0; 
}
int printfibonacci(int n) {
   if(n==1) {
      return 0;
   }
   else if(n==2) {
      return 1;
   }
   int k;
   k=printfibonacci(n-1) + printfibonacci(n-2);
   return k;
}
   