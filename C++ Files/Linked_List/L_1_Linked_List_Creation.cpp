#include<iostream>
using namespace std;
class Node {
    public:
    int info;
    Node* next;
    Node(int info){
        this->info=info;
        this->next= NULL;
    }
};
int main(){
    Node n1(10);
    cout<< n1.info<<endl;
    cout<<n1.next<<endl;
    Node * n2 = new Node(100);
    cout<<n2->info<<endl;
    cout<<n2->next<<endl;






    return 0;
}
