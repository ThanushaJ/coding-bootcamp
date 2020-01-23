"""Write a program to calculate sum of digits of a number.
"""
sumDigits = 0
numD = int(input())
while numD!=0:
    remainder=numD%10
    numD = numD//10
    sumDigits += remainder
print(sumDigits)