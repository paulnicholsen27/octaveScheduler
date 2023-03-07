def odd_even_sum(number):
    int(number)
    i = 1
    while i < number:
        total = 0
        if number % 2 == 0:
            total = total + number
        i = i + 1
    return total


print(odd_even_sum(5) == 9)
print(odd_even_sum(6) == 12)
print(odd_even_sum(3.5) == 4)
print(odd_even_sum(10) == 30)