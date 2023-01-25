import string
import random 

def choose_random_character():
    return random.choice(list(string.ascii_letters) + list(string.digits))

def ask_user_for_password_length():
    try:
        return int(input("How many characters should be in your password? "))
    except ValueError:
        print("Please choose a positive integer")
        return ask_user_for_password_length() # use pythontutor.com to explain why this return is necessary
    
def generate_password(password_length):
    password = ""
    for i in range(password_length):
        password += choose_random_character()
    return password 

def run():
    password_length = ask_user_for_password_length()
    return generate_password(password_length)


print(run())