class Chip:
    def __init__(self):
        self.__brand__ = "Lays"
        print(f'New chip of brand: {self.__brand__}')

    @property
    def brand(self):
        return self.__brand__

    @brand.setter
    def brand(self, value):
        print(f'Setting brand to: {value}')
        self.__brand__ = value

    @brand.deleter
    def brand(self):
        print('Chip becoming generic...')
        del self.__brand__


chip = Chip()
chip.brand = 'Ruffles'
del chip.brand

# OUTPUT:
# New chip of brand: Lays
# Setting brand to: Ruffles
# Chip becoming generic...
