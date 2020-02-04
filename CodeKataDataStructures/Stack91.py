inputString = input()
charList = []
for char in inputString:
    charList.append(char)

print(charList)

for i in charList:
    if i == ')':
        charList.pop()
        print(i)
print(charList)