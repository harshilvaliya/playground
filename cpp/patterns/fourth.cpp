#include <bits/stdc++.h>
using namespace std;

void pattern(int n){
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << i << " ";
        }
        cout << endl;
    }
}

int main() {
    int n;
    cin >> n;
    pattern(n);
    return 0;
}

/*
output:

4
1 
2 2 
3 3 3 
4 4 4 4 

*/