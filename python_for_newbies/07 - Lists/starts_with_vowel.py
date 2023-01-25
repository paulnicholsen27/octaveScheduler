word_list = ["rectangle", "ulterior", "altruism", "carriage", "betrayal", "ennui", "spork", "mailbox"]
vowels = ["a", "e", "i", "o", "u"]

def first_letter(words):
    starts_with_vowel = []
    starts_with_consonant = []
    for word in words:
        if word[0] in vowels:
            starts_with_vowel.append(word)
        else:
            starts_with_consonant.append(word)
    return starts_with_vowel, starts_with_consonant

print(first_letter(word_list))