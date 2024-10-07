#include <iostream>
#include <string>
using namespace std;

int main()
{
    string userName;
    int userAge;

    cout << "Enter your name: " << endl;
    getline(cin, userName);

    cout << "Enter your age: " << endl;
    cin >> userAge;

    cout << "My name is " << userName << " and I am " << userAge << " years old." << endl;
    return 0;
}