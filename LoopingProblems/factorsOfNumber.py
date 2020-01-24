"""Write a program to find all factors of a number.
"""

num = int(input())
for count in range(1,num+1):
    if num % count == 0:
        print(count)