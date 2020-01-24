"""Write a program to find frequency of each digit in a given integer
"""


def frequencyNum(fullNumber, digitCheck):
    count = 0
    while fullNumber != 0:
        if fullNumber % 10 == digitCheck:
            count += 1
            fullNumber = fullNumber // 10
        print(count)
    return count


countDict = {}
numToCheck = int(input())
fixNumber = numToCheck
while numToCheck > 0:
    digit = numToCheck % 10
    keyNum = frequencyNum(fixNumber, digit)
    numToCheck = numToCheck // 10
    countDict[digit] = keyNum

print(countDict)
