#include<iostream>
#include<string>
#include<vector>
using namespace std;

class Student{
private:
    int id;
    int age;
public:
    // Public constructor
    Student(int studentId, int studentAge) {
        cout << "Parameterised Constructor called" << endl;
        id = studentId;
        age = studentAge;
    }
    Student(){
        cout<<"Default Constructor called"<<endl;
    }
};

int main(){
    // Creating a Student object
    Student s1(123, 20);
    return 0;
}
