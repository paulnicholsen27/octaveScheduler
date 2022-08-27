guests = ["Buffy", "Willow", "Xander"]

while True:
    new_guest = input("Who would you like to remove from the list? ")
    if new_guest in guests:
        guests.remove(new_guest)
        print("They're uninvited!")
    else:
        print("They're already not coming!")
