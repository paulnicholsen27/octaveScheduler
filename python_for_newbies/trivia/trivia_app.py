score = 0
questions_asked = 0
total_questions = 0
game_length = None

def set_game_length(length):
    total_questions = {"s": 5, "m": 7, "l":10}[length]

def main():
    print("Welcome to Trivia!")
    game_length = input("Would you like to play a (S)hort, (M)edium, or (L)ong game? ")
    while game_length.lower() not in ["s", "m", "l"]:
        print("Please type S, M, or L.")
        game_length = input("Would you like to play a (S)hort, (M)edium, or (L)ong game? ")

main()