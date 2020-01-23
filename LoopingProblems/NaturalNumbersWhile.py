"""Write a program to print all natural numbers from 1 to n. - using while loop
Positive TC:
Input: 6
Output: 1 2 3 4 5 6
Negative TC:
Input: 6
Output: 1 2 3 4 5
"""

startNum = 1
endNum = int(input())
while startNum <= endNum:
    print(startNum, end=" ")
    startNum += 1
