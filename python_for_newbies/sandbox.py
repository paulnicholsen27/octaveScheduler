number = int(input("Enter an integer: "))

i = 1

total = 0

while i <= number:
    if i % 2 == number % 2:
        total = total + i
    i += 1

print(total)