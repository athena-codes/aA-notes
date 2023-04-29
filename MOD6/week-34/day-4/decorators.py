# INTROSPECTION:

# Introspection is the ability of an object to know about its own attributes and methods at runtime.
#  Python decorator functions can be introspective because they can modify the behavior of a
#  function and its attributes.

# DECORATORS:
# A decorator is a special kind of function that can be used to modify the behavior of another function.
#  Decorators are indicated by the "@" symbol before the decorator function name.

# EXAMPLE:

def my_decorator(func):
    def wrapper():
        print("Before function is called.")
        func()
        print("After function is called.")
    return wrapper

# use @ to apply the decorator to the function
@my_decorator
def say_hello():
    print("Hello!")

say_hello()
#  OUTPUT:
# Before function is called.
# Hello!
# After function is called.

# --> as we can see here, the decorator was applied to the say_hello function,
# so that the print messages will happen before + after funct is called

# SYNTACTIC SUGAR:
# Decorators are a kind of syntactic sugar, which means that they provide a more convenient
# way of writing code. Instead of writing a function call and passing the result to another
# function, you can use a decorator to modify the behavior of a function directly.
