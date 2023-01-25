# Introduction

Welcome to the course
	- my background
	- structure of the course
		- emphasize importance of doing activities -- can't learn to swim w/o getting in the water

Installing Python
	- Windows doc already bookmarked
	- terminal
	- python interpreter vs running a whole program

Installing a Code Editor
	- set up VSCode

Running Your First Program
	- students will download first_program.py and run in their own IDE

Running a Program
	- comments (VS Code shortcut)
	- print("I love Python")
	- Activity: print("Hello World") 

You're a Programmer!
	- Review last exercise
    - you have programmed
    - take a screen shot

The Zen of Python
    - import this

# DataTypes

Numbers and math
    - integers vs float
    - type()
    - +-*/ // **
    - modulo
    - parentheses 
    - float(int) & int(float) - casting

Quiz	

Intro to Variables
	- name and values
	- declare/initialize a variable
	- dynamically typed
	- assignment operator (=)
	- foo / bar / baz

Variable best practices
	- PEP8: lowercase, snake_case
	- use clear names - PEP8: Readability counts
	- https://betterprogramming.pub/all-33-reserved-keywords-in-python-98e55f6c8ded

Working with Variables
	- demo math with variables
	- can set with expression
		- centimeters = inches * 2.54 (better than c = i *2.54)
		- x = x + 1
    - avoid hardcoding (e.g., what if you needed to change 2.54 throughout your code to 2.45xxxx?)

Exercise:  Working with variables

Exercise Review
	- definition and dangers of hardcoding

Understanding Error Messages
	- NameError
		- reading stack traces
	- Syntax Error


<!-- Activity: Converter (metric?  temperature?) -->



# Strings

Intro to Strings
	- single/double/triple quotes
	- immutable

Manipulating Strings
	- concatenation
    - string * number
	- string formatting / interpolation

Useful String Methods
	- useful methods
		- define method
		- .lower, .upper, .capitalize, .title, .strip
		- NoMethodError

How to Google
	- Google how to find the length of a string

Counting Your E's Review
	- Activity:  Count number of letters

String Slicing and Indexing
	- string indexing
		- start at 0
		- negative index
		- x.index vs x.find

Getting User Input
	- getting user input
	- Demo Build Your Dream Cat (get user input of cat attributes, format string response)
	- Some extension on their own


# Boolean

Intro to Booleans
	- True / False (capitalization matters)
	- Simple but fundamental for logic
    - type(True)

Compound Expressions
	- truth tables
	- not
	- and
	- or
	- parentheses, order of operations

Comparison Operators
	- comparison operators, >, <, <=, >=, ==, !=
	- 5 < x < 6

Truthy/Falsey
	- many statements "evaluate" to T/F (truth`y`/falsy)
		- bool(""), bool("something"), bool(None), bool(0), bool(5)
	- math and strings (i.e., string multiplication "hi" * 3)

# Functions
Intro to Functions
	- repeated chunks of code - DRY (build pseudocode version of upper(string) or similar)
	- defined by indentation (tabs vs spaces)
	- Vocab:  Calling a function.  Show what it looks like without parentheses
	- demo hello_world function

Arguments and Parameters
    - been using them all along (e.g., length)
    - arguments / parameters
        - order matters
    - Demo: Area of Rectangle

ACTIVITY:  HEY KIDS

Return statement
    - expand area of rectangle from last module to calculate cost of carpeting.  Need to return the area
    - different than print
    - can assign to variables 
    - how to print the return

	- ACTIVITY: Calculator

Default and Keyword Arguments
    - default arguments
	- default parameters
	- ACTIVITY - Ice Cream Shop


Function Best Practices
	- DRY
	- Do one thing

	<!-- - ACTIVITY:  String formatting extension; get user input, return and store as variable.  Break this up so first student tasks are just getting user inputs and returning value
	

	- keyword arguments
		- ACTIVITY: STRING FORMATTING
		- CHALLENGE:  Capitalize arguments correctly

	- scope -->

## Logic

Review
	- review truthy/ falsy
	- Not/ And / or 
		Truth tables

If / else
	- if
	- if
		- else is not required
	- indentation matters

Coding Exercise:  Build a Bouncer

Elif

Activity:    FizzBuzz.  Remind about modulo operator (Just do as a function operating on one int here because for..in and arrays not yet introduced

while
	things = 0
	while things < 10:
		do something

	break out of endless loop
	
	```py
	favorite_animal = user_input("What is the best animal?")
	while favorite_animal != "cat":
		favorite_animal = user_input("That is incorrect.  Please try again ")
	```
	Challenge:  Only give the user 3 guesses

Activity:  build a function that counts down from an inputted number


Activity: Guess My Number

Tip:  Push yourself to do something new


Data Structures

Lists
- aka arrays (technically different)
- empty list
- can contain multiple data types
- can contain other lists


- retrieving elements by index
- setting elements by index
- negative indexes

- append / insert 
- remove
- slicing
- len
- in / not-in


- Logic with lists
	- go over quiz #5
	```py
	def check_if_cute(animal):
     baby_animals = ["puppy", "kitten", "piglet", "duckling"]
     if animal in baby_animals:
          return True
     else:
          return False
	```
		- better to write `return animal in baby_animals`
	- bool([])
	- if []

- Iteration

	- iterable
	- for… in

- Activity:  Build a guest list (remind how to break out of infinite loop)
- Activity:  Show Guest List
- Activity: Remove a Guest
- Activity:  Build a CLI

List comprehensions
	- "Syntactic sugar"
	- [blah for blah in blah]
	- [blah for blah in blah if blah]



Dictionaries

Definitions
	- key / value pairs
	- keys must be immutable (usually strings) and unique
	- values can be anything and repeated
		- including lists and other dicts

Getting and setting Dictionary Items
	- setting values
	- retrieving values
	- .get

Iterating Through Dictionaries
	- .keys, .values, .items, 
		- iterable
		- items is a tuple
	- ordered in Python 3.7 up
	- key in dict / dict.keys
	- value in dict.values

	- Activity:  Build a shopping list
		- item / quantity
		- show .get in review

	- Nested Dictionaries

	- Activity: Sorting chocolate bars

- Other data collections
	- tuples
		- ordered
		- immutable

	- sets
		- unordered
		- immutable
			- can add or remove items
				.add()
					- can accept lists
				.remove() / .discard
		- union, intersection
			<!-- https://www.programiz.com/python-programming/set -->

		- no dupes

	<!-- 
		List is a collection which is ordered and changeable. Allows duplicate members.
	Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
	Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.
	Dictionary is a collection which is ordered** and changeable. No duplicate members. -->

Final Activities
	- Password generator
	- Hangman
