"""Write a program to find LCM of two numbers.
"""
gcd = 1
num1 = int(input())
num2 = int(input())
if num1>num2:
    smallN = num2
    greatN = num1
else:
    smallN = num1
    greatN = num2
for count in range(1,smallN+1):
    if num1%count == 0 and num2%count ==0:
        gcd = count

lcm = (num1*num2)//gcd

print(lcm)
