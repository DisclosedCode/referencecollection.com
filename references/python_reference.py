"""
Python Reference and Guide

Author: ReferenceCollection.com
Licensed under CC BY-SA
"""

# Table of Contents

# 1.  Introduction
# 2.  Basics of Python
# 3.  Modules and Packages
# 4.  Variables and Data Types
# 5.  Operators
# 6.  Control Flow Statements
# 7.  Data Structures
# 8.  Functions
# 9.  File Handling
# 10. Exception Handling
# 11. Object-Oriented Programming (OOP)

# ---------------
# 1. Introduction
# ---------------

"""
Overview:
Python is a high-level, interpreted programming language prized for its
simplicity and readability, suitable for a wide range of applications including
web development, data analysis, and artificial intelligence.

History:
Developed by Guido van Rossum and first released in 1991, Python has since gained popularity
due to its clear and concise syntax. It has a vibrant community and extensive library support,
making it easy for developers to build powerful applications quickly.

Python Interpreter:
The Python interpreter is a program that executes Python code. It reads and interprets
Python scripts line by line, converting them into machine-readable bytecode that is
then executed by the computer's processor.

Python Versions:
Python has two major versions in use today: Python 2 and Python 3. Python 2, released in 2000,
was the dominant version for many years. However, Python 3, introduced in 2008, is now the
recommended version.
"""

# -------------------
# 2. Basics of Python
# -------------------

"""
Indentation:
Indentation is crucial in Python for defining the structure and the scope of the blocks.
"""

if True:
    print("Condition is true")
    print("This is still part of the if block")
print("This is outside the if block")

"""
Comments:
Comments annotate code for readability. They're ignored by the interpreter.
"""

# This is a single-line comment

"""
This is a
multi-line comment
"""

"""
Documentation:
Docstrings are documentation strings enclosed within triple quotes (''' ''').
"""

def greet(name):
    """
    Greets the user with the given name.

    Parameters:
        name (str): The name of the person to greet.

    Returns:
        str: A greeting message.
    """
    return "Hello, " + name + "!"

# Accessing doc using help()
help(greet)

# Accessing doc using __doc__
print(greet.__doc__)

"""
Input and Output:
Python provides functions for taking input from the user and displaying output.
"""

# Input
name = input("Enter your name: ")
age = input("Enter your age: ")

# Output
print("Name:", name, "Age:", age)

# -----------------------
# 3. Modules and Packages
# -----------------------

"""
Modules:
Modules are files containing Python code, in order to be reused.
"""

# File: math.py
def add(a, b):
    return a + b

"""
Packages:
Packages are directories containing multiple Python modules. They contain a special file
called __init__.py, indicating that the directory is a package.
"""

# my_package/__init__.py
# This file can be empty or can contain initialization code

# my_package/module.py
def greet():
    print("Hello from module.py")

"""
Importing Modules:
- import module_name: Imports the entire module.
- from module_name import function_name: Imports specific functions or objects.
- import module_name as alias: Imports the module with an alias.
"""

# Import entire module
import math
# Import add function from module
from math import add
# Import module with alias
import math as m

"""
Importing from Packages:
Same import mechanisms apply for packages with a slight change.
"""

# Import module from a package
import my_package.module
# Import module with alias from a package
import my_package.module as mod

# ---------------------------
# 4. Variables and Data Types
# ---------------------------

"""
Variables:
Variables are used to store data values. A variable is created when it is assigned a value
and is automatically assigned a type based on its value.
"""

pi = 3.14
age = 30
name = "David"

"""
Primitive Data Types:
- int: Integer numbers without decimals.
- float: Floating-point numbers with decimals.
- str: Strings, enclosed in single or double quotes.
- bool: Boolean values, True or False.
- NoneType: Represents the absence of a value.
- complex: Complex numbers with a real and imaginary part.
"""

age = 25                    # int
name = "John"               # str
height = 5.9                # float
is_valid = True             # bool
null_value = None           # NoneType
complex_num = 3 + 4j        # complex

"""
Complex Data Types:
Python also supports complex data types, such as lists, tuples, dictionaries, and sets:
- list: Ordered collection of items, mutable.
- tuple: Ordered collection of items, immutable.
- dict: Collection of key-value pairs, mutable.
- set: Unordered collection of unique items, mutable.
"""

numbers_list = [1, 2, 3]                        # list
person_info = ("John", 25, "New York")          # tuple
student_info = {"name": "Alice", "age": 20}     # dict
unique_numbers = {1, 2, 3, 4, 5}                # set

"""
Dynamic Typing:
Variables can also change types during execution
"""

variable = 50
variable = "Hello!"

"""
Type Conversion:
Converting data from one type to another. Common conversion functions include
int(), float(), str(), and bool().
"""

# Implicit
result = 10 + 1.5           # 11.5 (converted to float)

# Explicit
result = 100 + int("10")    # 110 (string converted to int)

# ------------
# 5. Operators
# ------------

"""
Arithmetic Operators:
Perform mathematical operations.
"""

addition = 10 + 5            # Addition
subtraction = 10 - 5         # Subtraction
multiplication = 10 * 5      # Multiplication
division = 10 / 5            # Division
modulus = 10 % 3             # Modulus
exponentiation = 2 ** 3      # Exponentiation
floor_division = 10 // 3     # Floor division (integer division, flooring the result)

"""
Comparison Operators:
Compare values.
"""

equal = (10 == 10)                      # Equal
not_equal = (10 != 5)                   # Not equal to
greater_than = (10 > 5)                 # Greater than
less_than = (10 < 5)                    # Less than
greater_than_or_equal_to = (10 >= 10)   # Greater than or equal to
less_than_or_equal_to = (10 <= 5)       # Less than or equal to

"""
Assignment Operators:
Assign values to variables.
"""

var = 10
var += 5     # Addition:        var = var + 5
var -= 5     # Subtraction:     var = var - 5
var *= 2     # Multiplication:  var = var * 2
var /= 4     # Division:        var = var / 4
var %= 3     # Modulus:         var = var % 3
var **= 2    # Exponentiation:  var = var ** 2
var //= 2    # Floor division:  var = var // 2 (2.0)

"""
Logical Operators:
Combine conditional statements.
"""

true_condition = True
false_condition = False

result_and = true_condition and false_condition     # Logical AND
result_or = true_condition or false_condition       # Logical OR
result_not = not true_condition                     # Logical NOT

"""
Bitwise Operators:
Perform bitwise operations on integers.
"""

a = 10
b = 4

bitwise_and = a & b         # Bitwise AND
bitwise_or = a | b          # Bitwise OR
bitwise_xor = a ^ b         # Bitwise XOR
bitwise_not = ~a            # Bitwise NOT
left_shift = a << b         # Left shift
right_shift = a >> b        # Right shift

"""
Membership Operators:
Test if a sequence is present in an object.
"""

list = [1, 2, 3, 4, 5]

result = 3 in list          # True
result = 6 not in list      # True
result = 7 in list          # False

"""
Identity Operators:
Compare the memory locations of two objects.
"""

x = [1, 2, 3]
y = [1, 2, 3]
z = x

result = x is z             # True
result = x is y             # False
result = x is not y         # True

"""
Ternary Operator:
A concise way to write conditional expressions.
Syntax: result_if_true if condition else result_if_false
"""

x = 10
y = 20
result = "x is greater" if x > y else "y is greater"

# --------------------------
# 6. Control Flow Statements
# --------------------------

"""
Conditional Statements:
Execute different actions based on conditions.
"""

# if-elif-else statement
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5"

"""
Looping Statements:
Execute a block of code repeatedly.
"""

# for loop
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)

# range() generates a sequence of numbers

# for loop, range(stop) from 0 to stop value (not included)
for i in range(5):
    print(i) # Outputs: 0, 1, 2, 3, 4

# for loop, range(start, stop) from start to stop value (not included)
for i in range(2, 5):
    print(i) # Outputs: 2, 3, 4

# for loop, range(start, stop, step) incrementing by the step value
for i in range(1, 10, 2):
    print(i) # Outputs: 1, 3, 5, 7, 9
else: # else is optional
    print("Loop finished")

# while loop, else is optional
count = 0
while count < 5:
    print("Count:", count)
    count += 1
else:
    print("Loop finished")

"""
Control Transfer Statements:
Change the flow of execution.
"""

# break statement
for i in range(5):
    if i == 4:
        break # Exit loop in 4th iteration
    print(i)

# continue statement
for i in range(5):
    if i == 3:
        continue # Skip 3rd iteration
    print(i)

# pass statement
for i in range(5):
    pass # do nothing, placeholder for future code

# ------------------
# 7. Data Structures
# ------------------

"""
Lists:
Ordered collection of items, that can be changed (mutable).
"""

# Creating a list
numbers_list = [1, 2, 3, 4, 5]

# Accessing elements
print(numbers_list[0])    # 1
print(numbers_list[-1])   # 5

# Slicing
print(numbers_list[1:3])    # [2, 3]

# Modifying elements
numbers_list[0] = 10
print(numbers_list)         # [10, 2, 3, 4, 5]

# Adding elements
numbers_list.append(6)      # Appends 6 to the end
numbers_list.insert(2, 7)   # Inserts 7 at index 2
print(numbers_list)         # [10, 2, 7, 3, 4, 5, 6]

# Removing elements
numbers_list.remove(3)      # Removes the first occurrence of 3
del numbers_list[4]         # Deletes element at index 4
popped = numbers_list.pop() # Removes and returns the last element

"""
Tuples:
Ordered collection of items, that can't be changed (immutable).
"""

# Creating a tuple
numbers_tuple = (1, 2, 3, 4, 5)

# Accessing elements
print(numbers_tuple[0])     # 1
print(numbers_tuple[-1])    # 5

# Tuple unpacking
a, b, c, d, e = numbers_tuple
print(a)                    # 1
print(b)                    # 2
print(a, b, c, d, e)        # 1 2 3 4 5

"""
Sets:
A collection of unique items, unordered and mutable.
"""

# Creating a set
numbers_set = {1, 2, 3, 4, 5}

# Adding elements
numbers_set.add(6)         # Adds 6 to the set
numbers_set.update({8, 9}) # Adds multiple elements at once
print(numbers_set)         # {1, 2, 4, 5, 6, 8, 9}

# Removing elements
numbers_set.remove(3)      # Removes 3 from the set
numbers_set.discard(7)     # Removes 7 if present, does nothing if not
popped = numbers_set.pop() # Removes and returns an arbitrary element
numbers_set.clear()        # Removes all elements from the set

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2          # Union
intersection = set1 & set2   # Intersection
difference = set1 - set2     # Difference

"""
Dictionaries:
A collection of key-value pairs.
"""

# Creating a dictionary
person = {
'name': 'David',
'age': 30
}

# Accessing values
person_name = person['name']    # "David"
person_age = person.get('age')  # 30

# Modifying values
person['name'] = 'John'
person['age'] = 31

# Adding new key-value pairs
person['job'] = 'Engineer'

# Removing elements
del person["job"]        # Removes the key 'job'
age = person.pop("age")  # Removes and returns the value of 'age'

# Looping through a dictionary
for key, value in person.items():
    print(key, value)

# ------------
# 8. Functions
# ------------

"""
Function Definition:
A block of reusable code, defined using 'def'.
"""

def greet():
    print("Hello world!")

greet()  # Hello world!

"""
Function Arguments:
Values passed to a function call.
"""

def greet(name):
    print("Hello " + name + "!")

greet("John")  # Hello John!

"""
Default Arguments:
Assigns a default value to a function parameter.
"""

def greet(name="world"):
    print("Hello ", name)

greet()          # Output: Hello world
greet("David")   # Output: Hello David

"""
Keyword Arguments:
Passing arguments to a function with key-value.
"""

def greet(name, message):
    print("Hello ", name + "!", message)

greet(message="Good morning!", name="David")  # Hello David! Good morning!

"""
Arbitrary Arguments (*args):
Accept any number of arguments.
"""

def add(*args):
    total = 0
    for num in args:
        total += num
    return total

result = add(1, 2, 3)
print(result)  # 6

"""
Arbitrary Keyword Arguments (**kwargs):
Accept any number of keyword arguments.
"""

def greet(**kwargs):
    for key, value in kwargs.items():
        print(key + ": " + value)

greet(David="Hi", John="Hello")
# David: Hi
# John: Hello

"""
Returning Values:
Return a value and terminate the function.
"""

def add(x, y):
    return x + y

result = add(3, 5)
print(result)   # 8

# Function with multiple return values
def rectangle_info(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

area, perimeter = rectangle_info(5, 3)

print("Rectangle Area:", area)
print("Rectangle Perimeter:", perimeter)

"""
Lambda Functions:
Anonymous functions defined using 'lambda' keyword.
Syntax: lambda arguments: expression
"""

add = lambda x, y: x + y

result = add(3, 5)
print(result)  # 8

"""
Recursion:
A function that calls itself.
"""

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

result = factorial(5)
print(result)  # 120

"""
Scope of Variables:
Understand variable visibility.
"""

# Global variable
global_var = 10

def func_1():
    # Accessing global variable
    print("Inside func_1:", global_var)

func_1()  # Inside func_1: 10

def func_2():
    local_var = 20
    print("Inside func_2:", local_var)

func_2()     # Inside func_2: 20

# Accessing local_var outside func_2 will raise an error

# ----------------
# 9. File Handling
# ----------------

"""
File Modes:
Different modes for opening files - read, write, append, etc.
"""

# 'r': Read mode (default)
# 'w': Write mode (overwrite existing content)
# 'a': Append mode (append to the end of the file)
# 'b': Binary mode (for binary files)
# 't': Text mode (default, for text files)
# 'r+': Update mode (read and write)

"""
Opening a File:
Opening a file for reading, writing, or appending.
"""

# Open a file for reading
file = open("file.txt", "r")

# Open a file for writing
file = open("file.txt", "w")

# Open a file for appending
file = open("file.txt", "a")

"""
Reading from a File:
Reading data from an opened file.
"""

# Reading entire file
content = file.read()

# Reading line by line
line = file.readline()

# Reading all lines into a list
lines = file.readlines()

"""
Writing to a File:
Writing data to an opened file.
"""

# Writing/Appending a string to a file
file.write("Hello world!")

# Writing a list of strings to a file
lines = ["First Line\n", "Second Line\n", "Third Line\n"]
file.writelines(lines)

"""
Closing a File:
Free up system resources by closing the file.
"""

file.close()

"""
File Methods:
Methods to perform operations on files.
"""

# file.read(): Read from the file
# file.write(string): Write to the file
# file.readline(): Read a single line
# file.readlines(): Read all lines into a list
# file.close(): Close the file
# file.seek(offset): Move the file pointer to a specific position
# file.tell(): Get the current position of the file pointer
# file.flush(): Flush the internal buffer

"""
Using 'with' Statement for File Handling:
Automatically closes the file when done.
"""

# Opening a file in append mode
with open('file.txt', 'a') as file:
    # Perform operations on the file
    data = file.read()
    print(data)
# File is automatically closed after the block ends

# ----------------------
# 10. Exception Handling
# ----------------------

"""
try-except Block:
Handling exceptions using try and except blocks.
"""

try:
    # Code that may raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Handle the exception
    print("An error occurred")


"""
try-except-else Block:
Executes the else block if no exception occurs.
"""

try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print("Result:", result)

"""
try-except-finally Block:
Finally block get executed regardless of an exception or not.
"""

try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Execution completed")

"""
Multiple Except Blocks:
Handling multiple exceptions using separate except blocks.
"""

try:
    # Code that may raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Handle division by zero
    print("Error: Division by zero")
except ValueError:
    # Handle value error
    print("Error: Value error")

"""
Raising Exceptions:
Manually raising exceptions using the raise keyword.
"""

a = 3
if a < 5:
    raise Exception("x should not exceed 5")

"""
Custom Exceptions:
Defining custom exceptions for specific use cases.
"""

class MyError(Exception):
    def __init__(self, message):
        self.message = message

try:
    raise MyError("This is a custom error")
except MyError as e:
    print("Custom error:", e.message)

# -------------------------------------
# 11. Object-Oriented Programming (OOP)
# -------------------------------------

"""
Classes and Objects:
Classes are blueprints for creating objects with attributes and methods.
"""
class Car:
    # __init__: Constructor, a special method used for initializing objects
   def __init__(self, brand="Unknown", model="Unknown"):
        self.brand = brand
        self.model = model

   # Method
   def display_info(self):
       print(f"Brand: {self.brand}, Model: {self.model}.")

# Creating objects
car_1 = Car("Toyota", "Camry")
car_2 = Car("Honda", "Accord")

# Accessing attributes
print(car_1.brand)  # Toyota

# Calling methods
car_1.display_info()  # Brand: Toyota, Model: Camry

"""
Inheritance:
Allows a class to inherit properties and behavior from another class.
"""
# Inherits from Car
class ElectricCar(Car):
    # Constructor
    def __init__(self, brand, model, battery_life):
        Car.__init__(brand, model)
        self.battery_life = battery_life

    # Method overriding
    def display_info(self):
        print(f"Brand: {self.brand}, Model: {self.model}, Battery Life: {self.battery_life}.")

    # Additional method specific to ElectricCar
    def charge(self):
        print("Charging the car...")

# Creating objects of subclass
electric_car = ElectricCar("Toyota", "Prius", 400)

# Accessing attributes and methods from the superclass
electric_car.display_info()  # Brand: Toyota, Model: Prius, Battery Life: 400

"""
Encapsulation:
Hide the internal state of an object, and only allow access through methods.
"""

class LibraryBook:
    def __init__(self):
        self._status = 'Available'  # Private variable

    def check_out(self):
        self._status = 'Checked Out'

    def return_book(self):
        self._status = 'Available'

    # Getter and Setter methods for encapsulated fields
    def get_status(self):
        return self._status

    def set_status(self, status):
        self._status = status


book = LibraryBook()
book.set_status('Checked Out')
print("Status:", book.get_status())

"""
Polymorphism:
Ability of objects to take on different forms based on their class.
"""

def describe_vehicle(vehicle):
    vehicle.display_info()

describe_vehicle(car_1)         # Brand: Toyota, Model: Camry
describe_vehicle(electric_car)  # Brand: Toyota, Model: Prius, Battery Life: 400

"""
Class and Instance Variables:
Class variables are shared among all instances of a class.
Instance variables are unique to each instance.
"""

class Circle:
    pi = 3.14  # Class variable

    def __init__(self, radius):
        self.radius = radius  # Instance variable

    def area(self):
        return Circle.pi * self.radius ** 2

"""
Static and Class Methods:
Static methods don't access or modify class or instance variables.
Class methods operate on class variables and can access or modify them.
"""

class MathUtils:
    @staticmethod
    def add(x, y):
        return x + y

    @classmethod
    def square(cls, x):
        return x ** 2