# INHERTANCE:
# -- In object-oriented programming, inheritance is used to create stable,
# reliable, and reusable code by basing a new class on an existing class
# -- A child class inherits all of the attributes and behavior of the parent class
#  and can override any undesirable attributes or behavior of the parent class, as well as add new attributes or behavior.
# -- The parent class is also called a superclass and the child class is also
# called a subclass.
# -- The child class inherits all attributes and behavior from the parent class
#  but any attributes that are defined in the child class are not
#  available to the parent class.
# -- To inherit one class from another in Python, you specify the parent class
#  in parentheses after the child class ' name.
# -- In Python, the super() function is used to call the parent class methods.

# EXAMPLE:
class Employee:
    def __init__(self, id):
        self.id = id


class Manager(Employee):
    def __init__(self, id):
        super().__init__(id)
        self.employees = []

    def add_direct_report(self, employee):
        self.employees.append(employee)



class Employee:
    def __init__(self, id):
        self.id = id


class Manager(Employee):
    def __init__(self, id):
        super().__init__(id)
        self.employees = []

    def add_direct_report(self, employee):
        self.employees.append(employee)


# -- The syntax for calling the initializer of the parent class in Python is
#  super().__init__().
# -- The super().method() syntax applies to all methods in Python,
#  if you want to specifically call the method on the parent class .
# EXAMPLE of calling the boop() method on the Parent class from the Child subclass:

class Parent:
    def boop(self):
        print("I am Parent#boop")


class Child(Parent):
    def boop(self):
        print("I am Child#boop")
        super().boop()


Child().boop()
# Prints
# "I am Child#boop"
# "I am Parent#boop"
