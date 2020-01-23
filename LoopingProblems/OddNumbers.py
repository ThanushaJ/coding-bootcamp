"""Write a program to print all odd numbers between 1 to 100.
Positive TC:
Output: 1 3 5 7 9 ..... 99
Negative TC:
Output: 1 2 3 4 .....100"""

for numberNatural in range(1, 101):
    if numberNatural % 2 != 0:
        print(numberNatural, end=" ")
