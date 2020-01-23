"""Write a program to calculate product of digits of a number.
"""

productDigits = 1
numD = int(input())
while numD!=0:
    remainder=numD%10
    numD = numD//10
    productDigits *= remainder
print(productDigits)