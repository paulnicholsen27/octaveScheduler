candies = [
    {
        "name": "Almond Joy",
        "ingredients": ["chocolate", "coconut", "almonds"]
    },
    {
        "name": "Baby Ruth",
        "ingredients": ["caramel", "nougat", "peanuts"]
    },
    {
        "name": "Heath Bar",
        "ingredients": ["chocolate", "toffee"]
    },
    {
        "name": "Mars Bar",
        "ingredients": ["chocolate", "nougat", "almonds"]
    },
    {
        "name": "Milky Way",
        "ingredients": ["chocolate", "nougat", "caramel"]
    },
    {
        "name": "Mounds",
        "ingredients": ["chocolate", "coconut"]
    },
    {
        "name": "Take 5",
        "ingredients": ["chocolate", "caramel", "peanuts", "pretzels", "peanut butter"]
    },
    {
        "name": "Reese's Bar",
        "ingredients": ["chocolate", "peanut butter"]
    },
    {
        "name": "Oh Henry",
        "ingredients": ["chocolate", "caramel", "fudge", "peanuts"]
    },

]


def sort_by_ingredient(candy_bars):
    # returns a dictionary with ingredients as keys
    # and lists of candy bars containing that ingredient as values
    ing = {}
    for candy in candies:
        for ingredient in candy["ingredients"]:
            x = ing.get(ingredient, [])
            x.append(candy["name"])
            ing[ingredient] = x
    return ing

print(sort_by_ingredient(candies))



