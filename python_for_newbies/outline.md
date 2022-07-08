# Introduction

Welcome to the course
	- my background
	- structure of the course
		- emphasize importance of doing activities -- can't learn to swim w/o getting in the water


Installing Python
	- set up VSCode
	- terminal
	- python interpreter vs running a whole program


Running a Program
	- comments (VS Code shortcut)
	- print ("I love Python")
	- Activity: print("Hello World") 
	- Tip:  Take a screen shot and share it to the world! You are a programmer!  You are one who programs!

You're a Programmer!
    - you have programmed
    - take a screen shot

The Zen of Python
    - import this

# DataTypes

Numbers
    - integers vs float
    - type()
    - +-*/ **
    - modulo
    - parentheses 
    - float(int) & int(float) - casting
    - Quiz	

Intro to Variables
	- name and values
	- declare/initialize a variable
	- dynamically typed
	- assignment operator (=)
	- PEP8: lowercase, snake_case
	- use clear names - PEP8: Readability counts

Working with Variables
	- demo math with variables
	- can set with expression
		- centimeters = inches * 2.54 (better than c = i *2.54)
		- x = x + 1
    - avoid hardcoding

Understanding Error Messages
	- NameError
		- reading stack traces

Activity: Converter (metric?  temperature?)



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
	- Google how to find the length of a string
	- Activity:  Count number of letters

How to Google

Counting Your E's Review

Getting User Input
	- getting user input

Build Your Dream Cat
	- Demo Build Your Dream Cat (get user input of cat attributes, format string response)
	- Some extension on their own

String Slicing and Indexing
	- string indexing
		- start at 0
		- negative index
		- x.index vs x.find

# Boolean

Intro to Booleans
	- True / False
	- Simple but fundamental for logic
    - type(True)

Comparison Operators
	- comparison operators, >, <, <=, >=, ==, !=

Truthy/Falsey
	- many statements "evaluate" to T/F (truthy/falsy)
		- bool(""), bool("something"), bool(None), bool(0), bool(5)
	- math and strings

# Functions
Intro to Functions
	- repeated chunks of code - DRY
	- defined by indentation
	- Vocab:  Calling a function.  Show what it looks like without parentheses
	- demo hello_world function

Arguments and Parameters
    - been using them all along (e.g., length)
    - arguments / parameters
        - order matters
    - Demo: Area of Rectangle

ACTIVITY:  HEY GRANDPA

Return statement
    - expand area of rectangle from last module to calculate cost of carpeting.  Need to return the area
    - different than print
    - can assign to variables 
    - 

Default and Keyword Arguments
    - default arguments

	- ACTIVITY: Calculator

	- ACTIVITY:  String formatting extension; get user input, return and store as variable.  Break this up so first student tasks are just getting user inputs and returning value
	
	- default parameters
	- ACTIVITY

	- keyword arguments
		- ACTIVITY: STRING FORMATTING
		- CHALLENGE:  Capitalize arguments correctly

	- scope
Logic
Not
	- review truthy/ falsy

And / or 
	Truth tables
	parenthesis for grouping

If / else
	- if / else
		- else is not required
	- indentation matters
	- elif

Activity:    FizzBuzz.  Remind about modulo operator (Just do as a function operating on one int here because for..in and arrays not yet introduced

while
	things = 0
	while things < 10:
		do something
	break out of endless loop
	
	```
	favorite_animal = ""
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
- Activity:  Build a guest list

- iterable
- for… in

- Activity:  Greet your guests

- list comprehensions

Tuples
	- like lists except immutable

Dictionaries
	- key / value pairs
	- keys must be immutable (usually strings) and unique
	- values can be anything and repeated
		- including lists and other dicts
	- retrieving values
	- .keys, .values, .items, 
		- iterable
		- items is a tuple
	- not indexable --- unordered
	- key in dict / dict.keys
	- value in dict.values

	- Activity:  Build a shopping list
		- item / quantity
		- show .get in review

Final Activities
	- Password generator
