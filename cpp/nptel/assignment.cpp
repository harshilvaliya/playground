// week 0

// question 1: consider the below code
#include <stdio.h>
int main()
{
    typedef double num[3];
    num array[5] = {1, 2, 3, 4, 5, 6}; // LINE-1
    printf("%u", sizeof(array));
    printf(" %.2f", array[1][1]);
    return 0;
}
// what will be output/error (sizeof(double) = 8 bytes) ?

