"""Write a program to enter a number and print its reverse.
"""

number2R = int(input())
reverseNum = 0
while(number2R>0):
    remainder = number2R % 10
    reverseNum = (reverseNum*10) + remainder
    number2R = number2R//10

print(reverseNum)