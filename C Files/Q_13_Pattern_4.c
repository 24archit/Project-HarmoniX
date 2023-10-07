#include<stdio.h>
int main() {
    int n;
    printf("Enter the Number: ");
    scanf("%d", &n);
    int i, j, l, m , p, a;
    a=(n+1)/2;
    for(i=1; i<=n;i++) {
        printf(" %d ", i);
    }
    printf("\n");
    for(j=1; j<=(n/2); j++){
        for(l=1; l<=((n/2)-(j-1)); l++ ){
            printf(" %d ", l);
        }
        p=l;
        for(m=1; m<=((2*j)-1); m++) {
            printf("   ");
        }
        for(p=(j+a); p<=n; p++) {
            printf(" %d ", p);
        }
        printf("\n");
    }
        int b, c, e, f,g;
        for(b=1; b<(n/2); b++) {
            for(c=1; c<=(b+1); c++) {
                printf(" %d ", c);
            }
            for(e=1; e<=(n- 2- (2*b)); e++) {
                printf("   "); 
            }
            for(f=(n-b);f<=n; f++) {
                printf(" %d ", f);
            }
            printf("\n");
        }
         for(g=1; g<=n;g++) {
        printf(" %d ", g);
    }
        return 0;
}

