arraySize = int(input())
arrayElements = [int(element) for element in input().split()]
arrayOr = 0
for i in range(0,arraySize,1):
    arrayOr = arrayOr | arrayElements[i]
print(arrayOr)