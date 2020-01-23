"""Write a program to swap first and last digits of a number.
"""

numD = int(input())
listNum = [x for x in str(numD)]
sizeList = len(listNum)
temp = listNum[0]
listNum[0] = listNum[-1]
listNum[-1] = temp
finalNum = int("".join(listNum))
print(finalNum)