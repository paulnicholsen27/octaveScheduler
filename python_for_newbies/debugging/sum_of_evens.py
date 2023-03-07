'''
The function below accepts an input of a number.  If the number is odd,
the function returns the sum of all odd numbers up to and including the 
number.  If the number is even, the function returns the sum of all even 
numbers up to and including the number.

Ex:
odd_even_sum(10) => 2 + 4 + 6 + 8 + 10 => 30
odd_even_sum(7) => 1 + 3 + 5 + 7 => 16

The code has a number of errors, both in syntax and in logic.  Insert 
debugger breakpoints and fix the code so that all four print statements
read True.


'''

def odd_even_sum(number):
    int(number)
    i = 1
    while i < nomber:
        total = 0
        if number % 2 = 0:
            total = total + number
        i = i + 1
    return total


print(odd_even_sum(5) == 9)
print(odd_even_sum(6) == 12)
print(odd_even_sum(3.5) == 4)
print(odd_even_sum(10) == 30)