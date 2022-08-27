guests = ["Buffy", "Willow", "Xander"]

def add_to_guest_list():
    new_guest = input("Who would you like to add to the list? ")
    if new_guest in guests:
        print("They're already invited!")
    else:
        guests.append(new_guest)
        print(f"We've added {new_guest} to the list!")

def remove_from_guest_list():
    new_guest = input("Who would you like to remove from the list? ")
    if new_guest in guests:
        guests.remove(new_guest)
        print("They're uninvited!")
    else:
        print("They're already not coming!")

def show_guest_list():
    for guest in guests:
        print(f"{guest} is invited!")



while True:
    print("""
        1.  Show all guests
        2.  Add a guest
        3.  Remove a guest
        4.  Exit
        """)
    user_choice = input("Choose the number that indicates your choice: ")
    if user_choice == "1":
        show_guest_list()
    elif user_choice == "2":
        add_to_guest_list()
    elif user_choice == "3":
        remove_from_guest_list()
    else:
        print("Goodbye!")
        break