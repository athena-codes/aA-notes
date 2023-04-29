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
