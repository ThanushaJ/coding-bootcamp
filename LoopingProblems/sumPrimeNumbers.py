"""Write a program to find sum of all prime numbers between 1 to n.
"""
primeList = []
sum = 0
numP = int(input())
for count in range(1,numP+1):
    if count>1:
        for num in range(2,count):
            if count%num == 0:
                break
        else:
            primeList.append(count)
print(primeList)
for c in range(len(primeList)):
    sum += primeList[c]
print(sum)