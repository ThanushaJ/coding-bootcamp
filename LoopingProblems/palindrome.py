"""Write a program to check whether a number is palindrome or not.
"""

number2R = int(input())
givenNumber = number2R
reverseNum = 0
while(number2R>0):
    remainder = number2R % 10
    reverseNum = (reverseNum*10) + remainder
    number2R = number2R//10

if givenNumber == reverseNum:
    print("palindrome")
else:
    print("Not a palindrome")