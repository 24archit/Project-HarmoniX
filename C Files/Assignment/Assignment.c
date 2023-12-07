// #include<stdio.h>
// void rankdisplay(FILE *fptr);
// void namedisplay(FILE *fptr);
// void addname(FILE *fptr);
// void deletename(FILE *fptr);
// struct student {
//     char name[100];
//     int id;
//     int sub[5];
//     int rank;
// };
// int main() {
//     printf("\nEnter 1 : Display Student List Rankwise\n");
//     printf("Enter 2 : Display Student List namewise\n");
//     printf("Enter 3 : Add Names\n");
//     printf("Enter 4 : Delete Name\n");
//     int choice;
//     printf("\nEnter the Choice Number : ");
//     scanf("%d", &choice);
//     FILE *fptr =NULL;
//     switch(choice) {
//         case 1: 
//         rankdisplay();
//         break;
//         case 2: 
//         namedisplay();
//         break;
//         case 3 :
             
//             addname(fptr);
            
//         break;
//         case 4 :
//             deletename();
//         break;
//     }
//     return 0;
// }
// void rankdisplay(FILE *fptr) {

// }
// void namedisplay(FILE *fptr) {

// }
// void addname(FILE *fptr) {
//     fptr=fopen("Database.txt", "a+");
    
//     int n;
//     printf("Enter the number of students details you want to enter: \n");
//     scanf("%d", &n);  
    
//     struct student s[n];
    
//     for(int i=0; i<n; i++) {

//         printf("Enter the Name of Student %d : ", i+1);
//         scanf(" %[^\n]", s[i].name);
//         fprintf(fptr, "%-30s", s[i].name);

//         printf("Enter the ID of Student %d : ", i+1);
//         scanf("%d", &s[i].id);
//         fprintf(fptr, "%-16d", s[i].id);
        
//         for(int j=0; j<3; j++) {
//             printf("Enter the marks in Sub-%d : ", j+1);
//             scanf("%d", &s[i].sub[j]);
//             fprintf(fptr, "%-16d", s[i].sub[j]);
//         }
//         fprintf(fptr, "\n");  
//     }
//     fclose(fptr);
    

// }
// void deletename(FILE *fptr) {

// }