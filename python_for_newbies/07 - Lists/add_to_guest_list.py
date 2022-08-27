guests = ["Buffy", "Willow", "Xander"]

while True:
    new_guest = input("Who would you like to add to the list? ")
    if new_guest in guests: 
        print("They're already invited!")
    else:
        guests.append(new_guest)
        print(f"We've added {new_guest} to the list!")