"""Write a program to print all even numbers between 1 to 100. - using while loop
Positive TC:
Output: 2 4 6 8 10.....100
Negative TC:
Output: 1 2 3 4 .....100"""
numberNatural = 1
while numberNatural in range(1, 101):
    if numberNatural % 2 == 0:
        print(numberNatural, end=" ")
    numberNatural += 1
