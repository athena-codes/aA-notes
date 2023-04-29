# Built-in class decorators:
# Python also has some built-in class decorators, which can be used to modify the behavior of classes.


# @staticmethod: This decorator is used to define a static method in a class .
class MyClass:
    @staticmethod
    def my_static_method():
        print("This is a static method.")


MyClass.my_static_method()
# OUTPUT:
# This is a static method.


# @classmethod: This decorator is used to define a class method in a class.
class MyClass:
    my_class_attribute = "Hello, world!"

    @classmethod
    def my_class_method(cls):
        print(cls.my_class_attribute)


MyClass.my_class_method()
# OUTPUT:
# Hello, world!


# Custom class decorators:
# You can also create your own class decorators by defining a decorator function that takes a
# class as its argument and returns a modified class .

def my_class_decorator(cls):
    cls.new_class_attribute = "This is a new class attribute."
    return cls


@my_class_decorator
class MyClass:
    my_class_attribute = "Hello, world!"


print(MyClass.my_class_attribute)
# OUTPUT:
# Hello, world!
print(MyClass.new_class_attribute)
# OUTPUT:
# This is a new class attribute.
