# Angry Bird class example:
class AngryBird:
    def __init__(self):
        """
        Construct a new Angry Bird by setting its position to (0, 0).
        """
        self.x = 0
        self.y = 0

# to create a new instance of a class in python, invoke it like a function 
bird = AngryBird()
print(bird.x, bird.y)  # > 0 0
