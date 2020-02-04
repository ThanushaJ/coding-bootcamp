sizeArray=int(input())
elementsArray = [int(element) for element in input().split()]
resultValue = 1
for count in range(0,len(elementsArray),2):
    resultValue = resultValue & elementsArray[count]
print(resultValue)
