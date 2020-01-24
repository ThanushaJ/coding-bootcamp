"""Write a program to print all Prime numbers between 1 to n.
"""

numP = int(input())
for count in range(1,numP+1):
    if count>1:
        for num in range(2,count):
            if count%num == 0:
                break
        else:
            print(count)
        