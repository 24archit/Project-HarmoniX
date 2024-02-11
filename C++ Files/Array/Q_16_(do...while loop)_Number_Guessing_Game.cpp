#include <iostream>
using namespace std;

int main() {
    int a = 25;
    int n;
    char playAgain;

    do {
        int attempts = 0; // Initialize attempts for each game

        cout << "Guess the number!" << endl;

        while (true) {
            cout << "Enter your guess: ";
            cin >> n;

            if (n == a) {
                cout << "Congratulations! You guessed the right number in " << (attempts + 1) << " attempts." << endl;
                break; // Break the loop if the user guessed correctly
            } else if (n > a) {
                cout << "Too High!" << endl;
            } else {
                cout << "Too Low!" << endl;
            }

            attempts++;                                                     
                                                                        /*Here's how it works:
                                                                        The code inside the do block is executed.
                                                                        After the code is executed, the condition specified in 
                                                                        the while statement is checked.
                                                                        If the condition is true, the loop continues, 
                                                                        and the code inside the do block is executed again.
                                                                        If the condition is false, the loop terminates, 
                                                                        and the program continues with the code following 
                                                                        the do...while loop.*/

        cout << "Do you want to play again? (y/n): ";
        cin >> playAgain;

    } while (playAgain == 'y' || playAgain == 'Y');

    cout << "Thanks for playing!" << endl;

    return 0;
}
