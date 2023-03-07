import requests 

def choose_category():
    url = "https://v2.jokeapi.dev/categories"

    response = requests.get(url)
    categories = response.json()["categories"]
    categories.remove("Dark")
    print("\n\n****************")
    for count, value in enumerate(categories, start=1):
         print(str(count) + ")", value)
    print("****************\n\n")

    category_number = int(input("Choose a category: "))
    return categories[category_number - 1]

def display_joke(category):
    url = f"https://v2.jokeapi.dev/joke/{category}?safe-mode"
    response = requests.get(url)
    json = response.json()
    if json["type"] == "twopart":
        print(json["setup"])
        print(json["delivery"])
    else:
        print(json["joke"])

def main():
    category = choose_category()
    display_joke(category)
    main()

main()