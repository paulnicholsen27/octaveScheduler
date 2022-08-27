word_list = ["rectangle", "ulterior", "altruism", "carriage", "betrayal", "ennui", "spork", "mailbox"]
vowels = ["a", "e", "i", "o", "u"]

def first_letter(words):
    for word in words:
        if word[0] in vowels:
            print(f"{word} starts with a vowel")
        else:
            print(f"{word} starts with a consonant")

first_letter(word_list)