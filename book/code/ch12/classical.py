from math import sqrt

# returns all factors of x except for 1 and x itself
# O(sqrt(N))
def factorize(x):
    if x % 2 == 0:
        return [2, x // 2]
    for i in range(3, int(sqrt(x))+1, 2):
        if (x % i == 0):
            return [i, x // i]


factorize(n)

# python3 -m timeit -s 'import pure_factorization' /
# 'pure_factorization.factorize(80609)'