# PROPERTIES:
# -- Properties allow you to set and return variable values in a class .
# -- Python has a built-in decorator called @property that allows you to
#  write methods that seem like readable properties.
# -- Getters and Setters are methods that get and set property values,
#  respectively.
# -- Decorate a method with @ property to create a getter property.
# -- Decorate a corresponding method with @«getter_method_name».setter to
#  create a setter property.
# -- Together, getter and setter properties create a way to treat two methods
#  as a single property.

# GETTER EXAMPLE:
class AngryBird:
    def __init__(self, x=0, y=0):
        self._x = x
        self._y = y

    @property
    def x(self):
        return self._x

    @property
    def y(self):
        return self._y


bird = AngryBird()

print(bird.x, bird.y)  # Output: 0 0

# SETTER EXAMPLE:


class AngryBird:
    def __init__(self, x=0, y=0):
        self._x = x
        self._y = y

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, value):
        if value < 0:
            value = 0
        self._x = value

    @property
    def y(self):
        return self._y

    @y.setter
    def y(self, value):
        if value < 0:
            value = 0
        self._y = value


bird = AngryBird()
bird.x = 12
bird.y = -20

print(bird.x, bird.y)  # Output: 12 0


#

