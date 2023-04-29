# DUNDER METHODS:
# Function names that start and end with two underscores are special built-in functions that
# Python uses in certain ways. The __init__ class method is a dunder method


# Angry Bird class example:
class AngryBird:
    def __init__(self):
        """
        Construct a new Angry Bird by setting its position to (0, 0).
        """
        self.x = 0
        self.y = 0

    def move_up_by(self, delta):
        self.y += delta

# to create a new instance of a class in python, invoke it like a function
bird = AngryBird()
print(bird.x, bird.y)  # > 0 0

# do not need to pass in 'self' value, Python does this automatically
bird.move_up_by(8)
print(bird.x, bird.y)  #> 0 8

# setting the initial state of x & y as 0
class AngryBird2:
    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird2 by setting its position to (0, 0).
        """
        self.x = x
        self.y = y

    def move_up_by(self, delta):
        self.y += delta


b1 = AngryBird2()
b2 = AngryBird2(x=1)
b3 = AngryBird2(y=18)
b4 = AngryBird2(10, 10)

print('Bird 1', b1.x, b1.y)
print('Bird 2', b2.x, b2.y)
print('Bird 3', b3.x, b3.y)
print('Bird 4', b4.x, b4.y)

#  OUTPUT:
# Bird 1 0 0
# Bird 2 1 0
# Bird 3 0 18
# Bird 4 10 10

#  PRIVATE VARIABLES:
# If you don't want others to interact directly with the instance variables in your class,
# you should put a leading underscore on them. Since the AngryBird class is in charge of its
# x and y instance variables, that means the names of those variables should have a leading underscore.

# EXAMPLE:
# self._x = x
# self._y = y
