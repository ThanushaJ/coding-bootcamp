def swap(l, n):
    for i in range(0, n - 1, 2):
        t = l[i + 1]
        l[i + 1] = l[i]
        l[i] = t
    return l


n = int(input())
l = [int(x) for x in input().split()]
nlist = swap(l, n)
for i in nlist:
    print(i, end=' ')
