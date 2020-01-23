"""Write a program to find first and last digit of a number.
"""

num = int(input())
lastDigit = num%10
while num >=10:
    num = num/10
    firstDight = int(num)
print(firstDight)
print(lastDigit)