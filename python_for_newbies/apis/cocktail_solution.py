import requests

def search_by_name():
    name = input("What cocktail would you like to search for? ")
    named_cocktail_url = f"https://www.thecocktaildb.com/api/json/v1/1/search.php?s={name}"
    cocktails = requests.get(named_cocktail_url).json()["drinks"]
    # breakpoint()
    for cocktail in cocktails:
        display_cocktail(cocktail)

def search_by_ingredient():
    ingredient = input("What ingredient would you like to search for? ")
    ingredient_url = f"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient}"
    cocktails = requests.get(ingredient_url).json()["drinks"]
    cocktail_ids = [cocktail["idDrink"] for cocktail in cocktails]
    for id in cocktail_ids:
        search_by_id(id)

def search_by_id(id):
    id_url = f"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}"
    cocktail = requests.get(id_url).json()
    display_cocktail(cocktail["drinks"][0])
    
def random_cocktail():
    random_cocktail_url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    cocktail = requests.get(random_cocktail_url).json()["drinks"][0]
    display_cocktail(cocktail)

def display_cocktail(cocktail):
    # breakpoint()
    print("\n*************\n")

    print(f"\nDrink name: {cocktail['strDrink']}\n")
    ingredients = []
    print("Ingredients:\n")
    for k, v in cocktail.items():
        if k.startswith("strIngredient") and v:
            print(v)
    print(cocktail["strInstructions"] + "\n\n")


def main():
    query_type = input(
        """
        Choose from the following options: \n
        1.  Search cocktail by name
        2.  Search cocktail by ingredient
        3.  Show a random cocktail
        """
    )
    {"1": search_by_name, "2": search_by_ingredient, "3": random_cocktail}[query_type]()


main()