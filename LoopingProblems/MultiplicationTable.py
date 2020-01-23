"""Write a program to print multiplication table of any number.
Positive TC:
Input: 6
Output:
6 * 1 =  6
6 * 2 =  12
6 * 3 =  18
6 * 4 =  24
6 * 5 =  30
6 * 6 =  36
6 * 7 =  42
6 * 8 =  48
6 * 9 =  54
6 * 10 =  60
Negative TC:
Input: 6
Output: 12"""
num = int(input())
for count in range(1,11):
    print(num, "*", count, "= ",num*count)
