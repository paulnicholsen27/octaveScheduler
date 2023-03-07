# given the list of phrases below, write a function that returns a list
# of all the longest words.  The code below should return the list 
# ["outrageous", "abstracted", "capricious"] because each of those words
# is ten letters long, which is greater than the length of any other word.

phrases = [    
    "learn steady outrageous",
    "abstracted",
    "spy interfere clean precede",
    "system heavenly crow",
    "finger whole acid adorable",
    "straw medical",
    "shame poke book peep dull feeble",
    "pot baton matrimony",
    "debonair ancient early tickle",
    "sharp color capricious",
    "effect argue mourn"
    ]

def find_the_longest_words(phrases):
    # make a list of the individual words
    words = []
    for phrase in phrases:
        words += phrase.split( )

    longest_words = []
    for word in words:
        # if list is empty or the word is longer than a word in the list,
        # replace the contents of the list with current word
        if not longest_words or (len(word) > len(longest_words[0])):
            longest_words = [word]
        # otherwise if the new word is the same length as the words
        # in the list, add the word to the list
        elif len(word) == len(longest_words[0]):
            longest_words.append(word)
    return longest_words

print(find_the_longest_words(phrases) == ["outrageous", "abstracted", "capricious"])

