"""Write a program to check whether a number is Armstrong number or not.
"""

numberA = int(input())

sumF = 0

numberT = numberA
while numberT>0:
    remainder = numberT%10
    sumF += remainder**3
    numberT = numberT//10

if sumF == numberA:
    print("Armstrong Number")
else:
    print("Not an Armstrong Number")