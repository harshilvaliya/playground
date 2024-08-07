#include <iostream>
using namespace std;

// Pass by value
void passByValue(int x) {
    x = x + 10;
    cout << "Inside passByValue: x = " << x << endl;
}

// Pass by reference
void passByReference(int& x) {
    x = x + 10;
    cout << "Inside passByReference: x = " << x << endl;
}

int main() {
    int num1 = 5;
    int num2 = 5;

    cout << "Before function calls:" << endl;
    cout << "num1 = " << num1 << ", num2 = " << num2 << endl;

    passByValue(num1);
    passByReference(num2);

    cout << "After function calls:" << endl;
    cout << "num1 = " << num1 << " (unchanged by passByValue)" << endl;
    cout << "num2 = " << num2 << " (changed by passByReference)" << endl;

    return 0;
}