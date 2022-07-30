#include <iostream>

using namespace std;

int main()
{

    int num[] = {1, 3, 4, 1};
    int min, max = num[0];

    for (size_t i = 0; i < sizeof(num) / sizeof(num[0]); i++)
    {
        if (num[i] < min)
            min = num[i];
        if (num[i] > max)
            max = num[i];
    }

    cout << "MIN :: " << min << "\n";
    cout << "MAX :: " << max << "\n";

    cout << "Sum :: " << max + min;

    return 0;
}