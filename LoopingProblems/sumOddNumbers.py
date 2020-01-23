"""Write a program to find sum of all even numbers between 1 to n.
Positive TC:
Input: 6
Output: 9
Negative TC:
Input: 6
Output: 12"""
sumN = 0
limit = int(input())
for number in range(limit+1):
    if number % 2 != 0:
        sumN += number
print(sumN)