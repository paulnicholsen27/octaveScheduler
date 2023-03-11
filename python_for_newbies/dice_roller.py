from random import randint 

def get_user_input():
    number_of_sides = int(input("How many sides do you want the dice to have?  Input a positive integer greater than 1: "))
    print(f"We will roll a {number_of_sides}-sided die for you.")
    number_of_rolls = int(input("How many times would you like us to roll the die for you? "))
    print(f"We will roll the die {number_of_rolls} time(s).")
    return number_of_sides, number_of_rolls

def roll_dice(number_of_sides, number_of_rolls):
    # results = sum([random.randint(1, number_of_sides) for i in range(number_of_rolls)])
    sum = 0 
    rolls_so_far = 0
    while rolls_so_far < num_rolls:
        sum += randint(1, number_of_sides)
        rolls_so_far += 1
    return sum

num_sides, num_rolls = get_user_input()
print(roll_dice(num_sides, num_rolls))