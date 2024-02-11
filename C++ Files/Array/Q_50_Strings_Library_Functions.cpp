#include <iostream>
#include <string>

using namespace std;

int main() {
    // std::string::length() and std::string::size()
    string myString = "Hello, C++!";
    cout << "Length: " << myString.length() << endl;  // Output: 12
    cout << "Size: " << myString.size() << endl;      // Output: 12

    // std::string::empty()
    cout << "Is empty? " << (myString.empty() ? "Yes" : "No") << endl;  // Output: No

    // std::string::at()
    cout << "Character at position 7: " << myString.at(7) << endl;  // Output: C

    // std::string::append()
    myString.append(" Welcome!");
    cout << "Appended string: " << myString << endl;  // Output: Hello, C++! Welcome!

    // std::string::push_back()
    myString.push_back('X');
    cout << "String after push_back: " << myString << endl;  // Output: Hello, C++! Welcome!X

    // std::string::c_str()
    const char* cString = myString.c_str();
    cout << "C-style string: " << cString << endl;  // Output: Hello, C++! Welcome!X

    // std::string::substr()
    string subString = myString.substr(7, 5);
    cout << "Substring: " << subString << endl;  // Output: C++! 

    // std::string::find()
    size_t found = myString.find("C++");
    cout << "Position of 'C++': " << found << endl;  // Output: 7

    // std::string::rfind()
    size_t rfound = myString.rfind("e");
    cout << "Last position of 'e': " << rfound << endl;  // Output: 24

    // std::string::compare()
    string anotherString = "Hello, C++! Welcome!X";
    cout << "Comparison result: " << myString.compare(anotherString) << endl;  // Output: 0 (equal)

    // std::string::replace()
    myString.replace(7, 3, "G++");
    cout << "After replacement: " << myString << endl;  // Output: Hello, G++! Welcome!X

    // std::string::erase()
    myString.erase(6, 5);
    cout << "After erasing: " << myString << endl;  // Output: Hello! Welcome!X

    // std::string::insert()
    myString.insert(6, " C++");
    cout << "After insertion: " << myString << endl;  // Output: Hello C++! Welcome!X

    // std::string::pop_back()
    myString.pop_back();
    cout << "String after pop_back: " << myString << endl;  // Output: Hello C++! Welcome!


    return 0;
}
