"""Write a program to find sum of all natural numbers between 1 to n.
Positive TC:
Input: 6
Output: 21
Negative TC:
Input: 6
Output: 10 """
sumN = 0
limit = int(input())
for number in range(limit+1):
    sumN += number
print(sumN)