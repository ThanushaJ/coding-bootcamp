"""Write a program to check whether a number is Prime number or not.
"""
numP = int(input())

if numP>1:
    for count in range(2,numP):
        if numP%count==0:
            print("Not Prime")
            break
    else:
        print("prime")
else:
    print("Not Prime")