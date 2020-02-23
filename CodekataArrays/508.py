N = int(input())
S = str(input())
St = S.split(" ")
St = sorted(St)
for i in range(len(St)):
    if(i!=N-1):
        print(St[i],end=" ")
    else:
        print(St[i])
