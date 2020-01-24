"""Write a program to find power of a number using for loop.
"""
res = 1
num = int(input())
numP = int(input())
for i in range(1,numP+1):
    res=num*res
print(res)