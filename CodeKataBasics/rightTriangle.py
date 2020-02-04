A, B, C = [int(x) for x in input().split()]
listSides = []

if A <= 100000 and B <= 100000 and C <= 100000:
    listSides.extend((A, B, C))
    listSides = sorted(listSides)
    hypSquare = listSides[2]**2
    sideSquare = listSides[0]**2 + listSides[1]**2
    if hypSquare == sideSquare:
        print("yes")
    else:
        print("no")
