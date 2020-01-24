"""Write a program to find HCF (GCD) of two numbers.
"""
gcd = 1
num1 = int(input())
num2 = int(input())
if num1>num2:
    smallN = num2
else:
    smallN = num1
for count in range(1,smallN+1):
    if num1%count == 0 and num2%count ==0:
        gcd = count

print(gcd)