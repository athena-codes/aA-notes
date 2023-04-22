# ********** FUNCTIONS ************

#  Spread Operator:

def my_extra_args(param1, *args):
    #  make a tuple out of the spreaded arguments
    our_args_list = list(args)
    #  can insert values into list
    our_args_list[0] = 'no'

    print(our_args_list, args)

# my_extra_args(1, 2, 3, 4, 5)
#   --> ['no', 3, 4, 5] (2, 3, 4, 5)


# Assign arguments when invoking a function:

def keywords_funct(name, date):
    print(name, date)


# assign values to a param on invokation, order does not matter
keywords_funct(date="9/12/2000", name='Athena')
#  --> Athena 9/12/2000


#  KWARGS:
def print_staff(greeting, **kwargs):
    print('kwargs', kwargs, isinstance(kwargs, dict))
    for key, value in kwargs.items():
        print(greeting, key, "and I like", value)

print_staff(greeting='Hello my name is', Athena='Fortnite')
#  --> Hello my name is Athena and I like Fortnite


#  LAMBDA FUNCTIONS:
# like Javascript's arrow function

# drop def, add lambda, no parethenses; can do 1 liners
def our_lambda(name): return name.upper()
name_to_upper = lambda name: name.upper()

# print(our_lambda('Athena'))
#  --> ATHENA


# List + Dictionary Comprehension:
# one line build of new arrays/dictionaries, makes a COPY

names = ['Athena', 'Rose', 'Chiarello']
names_upper = [name.upper() for name in names]

# --> ['ATHENA', 'ROSE', 'CHIARELLO']
print(names_upper)

# will return an empty array if false is returned
letter_name = [name.upper() for name in names if name[0] == 'A']
print(letter_name)


# Multiple conditionals --
# names w/ A are uppercase, names w R are lower case + other ones remain the same
transform_name = [name.upper() if (name[0].upper()) == 'A' else name.lower() if (name[0]) == 'R' else (name)
                  for name in names]

print(transform_name)
#  --> ['ATHENA', 'rose', 'Chiarello']


# Dictionaries
# created an object of objects out of a list of data

people_dict = {i: names[i] for i in range(len(names))}
print(people_dict)

# Q: CAN U DO IT ON SETS / TUPLE
#  can do it on a tuple but not set

print(set(people_dict))
print(tuple(people_dict))

print(people_dict.items())
