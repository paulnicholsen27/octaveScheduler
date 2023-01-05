def word_lengths(words):
    for word in words:
        print(f"The word {word} has {len(word)} letters.")
    print(" ".join(words) + "!")

word_lengths(["We", "love", "Python"])