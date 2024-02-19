#include<iostream>
using namespace std;
class Node {
    public:
    int info;
    Node* next;
    Node(int data){
        this->info = data;
        this->next= NULL;
    }
};
void insertAtHead (Node* &head, int item){
    Node* temp = new Node(item);
    temp -> next= head;
    head =temp;
}
void printLinkedList (Node* &head){
    Node* temp = head;
    while(temp != NULL){
        cout<<temp->info<<endl;
        temp=temp->next;
    }
}
int main(){
    Node* n1 = new Node(24); 
    int a = 4;
    insertAtHead(n1, a);
    printLinkedList(n1);
    return 0;
}