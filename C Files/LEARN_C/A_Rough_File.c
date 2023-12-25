#include <stdio.h>
struct product{
int id;
char name[100];
int quantity;
float price;
};
int main(){
    struct product p[2];
    float netprice=0;

    for(int i=0;i<2;i++){
        printf("ENTER THE PRODUCT ID OF %d\n",i+1);
        scanf("%d",&p[i].id);
        printf("ENTER THE NAME OF THE PRODUCT %d\n",i+1);
        scanf("%s",p[i].name);
        printf("ENTER THE QUANTITY OF PRODUCT %d\n",i+1);
        scanf("%d",&p[i].quantity);
        printf("ENTER THE PRICE OF %d\n",i+1);
        scanf("%f", &p[i].price);
    }
    for(int i=0;i<2;i++){
        netprice = netprice + (p[i].price*p[i].quantity)*1.18;
    }
    printf("YOUR BILL IS %.2f\n",netprice);
    return 0;
}