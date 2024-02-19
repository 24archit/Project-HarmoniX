#include <iostream>
using namespace std;
class Node
{
public:
    int info;
    Node *next;

    Node(int info)
    {
        this->info = info;
        this->next = NULL;
    }
};
void printLinkedList(Node *&head)
{

    if (head = NULL)
    {
        cout << "No Element is present in the Linked List" << endl;
        return;
    }
    Node *temp = head;
    while (temp != NULL)
    {
        cout << temp->info << endl;
        temp = temp->next;
    }
}
void insertAtTail(Node *&head, int item)
{
    Node *temp = new Node(item);
    Node *previous = NULL;
    Node *current = head;
    while (current != NULL)
    {
        previous = current;
        current = current->next;
    }
    previous->next = temp;
}
int main()
{

    Node *n1 = new Node(10);
    Node *n2 = new Node(100);
    Node *n3 = new Node(1000);

    n1->next = n2;
    n2->next = n3;

    Node *head = n1;

    int item = 10000;

    insertAtTail(head, item);
    printLinkedList(head);

    return 0;
}