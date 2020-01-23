"""Write a program to print all natural numbers in reverse (from n to 1). - using while loop
Positive TC:
Input: 6
Output: 6 5 4 3 2 1
Negative TC:
Input: 6
Output: 1 2 3 4 5 6
"""

startNum = int(input())
while startNum >= 1:
    print(startNum, end=" ")
    startNum -= 1
