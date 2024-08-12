#include <iostream>
#include <string>
using namespace std;

int main()
{
    int marks;
    cin >> marks;
    
    string grade;
    
    if (marks < 0 || marks > 100) {
        grade = "Invalid marks";
    }
    else if (marks == 0) {
        grade = "You are fail in exam !!";
    }
    else if (marks < 25) {
        grade = "F";
    }
    else if (marks < 45) {
        grade = "E";
    }
    else if (marks < 50) {
        grade = "D";
    }
    else if (marks < 60) {
        grade = "C";
    }
    else if (marks < 76) {
        grade = "B";
    }
    else {
        grade = "A";
    }
    
    cout << "Your grade is " << grade << " !" << endl;
    
    return 0;
}