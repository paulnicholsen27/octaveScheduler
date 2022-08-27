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

ing = {}
for candy in candies:
    for ingredient in candy["ingredients"]:
        x = ing.get(ingredient, [])
        x.append(candy["name"])
        ing[ingredient] = x
        # print(ing)
        # print(ing.get(ingredient, []))
print(ing)