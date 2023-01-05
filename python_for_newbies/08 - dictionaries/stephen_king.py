sk = {
    "name": "Stephen King",
    "birthday": "09/21/1947",
    "penname": "Richard Bachmann",
    "books": [
        {
            "title": "It",
            "page_length": 1138,
            "pub_year": 1986
        },
        {
            "title": "Misery",
            "page_length": 310,
            "pub_year": 1987
        },
        {
            "title": "The Stand",
            "page_length": 1152,
            "pub_year": 1990
        },
        {
            "title": "Carrie",
            "page_length": 199,
            "pub_year": 1974
        },
    ]
}

longest_title = None
longest_pages = 0 
for book in sk["books"]:
    if book["page_length"] > longest_pages:
        longest_pages = book["page_length"]
        longest_title = book["title"]
print(longest_title)