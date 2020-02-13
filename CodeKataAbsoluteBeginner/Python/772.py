S = str(input())
count =0
n = len(S)
for i in range(0,n):
    if(S[i]!=' '):
        count+=1
print(count)
