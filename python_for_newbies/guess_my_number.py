import random 

def get_secret_number():
    return random.randint(1, 100)

def get_user_input():
    user_choice = int(input("Please guess a number between 1-100: "))
    return user_choice

def play_game():
    guesses = 0
    secret_number = get_secret_number()
    still_guessing = True 
    while still_guessing:
        user_choice = get_user_input()
        guesses += 1
        if user_choice == secret_number:
            print(f"You guessed it and it only took you {guesses} chances!")
            still_guessing = False
        else:
            if user_choice < secret_number:
                print("Too low!")
            else:
                print("Too high!")

play_game()
