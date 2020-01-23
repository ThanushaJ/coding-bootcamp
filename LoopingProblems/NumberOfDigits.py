"""Write a program to count number of digits in a number.
Positive TC:
Input: 12345
Output: 5
Negative TC:
Input: 12345
Output: 12"""
countDigits = 0
num = int(input())

while num > 0:
    num = num//10
    countDigits += 1
print(countDigits)

'''numS = str(num)
print(len(numS))'''