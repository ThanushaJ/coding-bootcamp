"""Write a program to calculate factorial of a number.
"""

num = int(input())
fact = 1
for count in range(1,num+1):
    fact *= count
print(fact)