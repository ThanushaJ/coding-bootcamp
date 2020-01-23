"""Sample Input :
3 3
23 15 16
357 65 10
Sample Output :
15 16 23 357 65 10"""

n, m = input().split()
nList = [int(num) for num in input().split()]
mList = [int(num) for num in input().split()]
nList.sort()
mList.sort(reverse=True)
nList.extend(mList)
for num in range(len(nList)):
    if num<len(nList)-1:
        print(nList[num], end=" ")
    else:
        print(nList[num])

