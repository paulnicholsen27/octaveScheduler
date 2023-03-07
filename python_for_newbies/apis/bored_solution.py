import requests

def get_categories():
    return ["education", "recreational", "social", 
            "diy", "charity", "cooking", "relaxation", 
            "music", "busywork"]

def choose_category():
    for num, category in enumerate(get_categories(), 1):
        print(f"{num}. {category.capitalize()}")
    category_num = int(input("Enter the number of the type of activity you would like: ")) - 1
    return get_categories()[category_num]

def construct_url(category):
    return f"http://www.boredapi.com/api/activity?type={category}"

def get_results(url):
    return requests.get(url).json()

def display_results(activity):
    print(f" Your activity is:\n\n {activity['activity']}")
    return

def main():
    category = choose_category()
    url = construct_url(category)
    activity = get_results(url)
    display_results(activity)
    user_input = input("Would you like to play again? (y/n) ")
    main() if user_input == "y" else print("Bye bye")
    
main()