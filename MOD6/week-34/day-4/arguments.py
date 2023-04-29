# ARGUMENTD (**args and **kwargs):
# Decorators can also take arguments using **args and **kwargs.
# These allow the decorator to take a variable number of arguments
# and keyword arguments.

#  EXAMPLE OF USING ARGS IN DECORATOR:

# Define a decorator function that takes in a function as an argument
def my_decorator(func):

    # Define a wrapper function that takes in variable arguments and keyword arguments
    def wrapper(*args, **kwargs):

        # Print a message before the decorated function is called
        print("Before function is called.")

        # Call the original function and pass in the variable arguments and keyword arguments
        # **kwargs allows for additional keyword arguments to be passed in if needed.
        func(*args, **kwargs)

        # Print a message after the decorated function is called
        print("After function is called.")

    # Return the wrapper function to be used as a decorator
    return wrapper

# Define a function that will be decorated with the my_decorator function

@my_decorator
def say_hello(name):
    print("Hello, {}!".format(name))


# Call the decorated function with an argument
say_hello("Alice")

# OUTPUT:
# Before function is called.
# Hello, Alice!
# After function is called
