### PYTHON BASICS ###

# Floor division
# drops float values, rounds down

our_division = 4/ 2
# print(our_division)  # --> 2.0

floor_division = 4//2
# print(floor_division)  # --> 2



# Numbers
string = "1"
num = int("1")  # int() makes a number an integer

# print(num, string)

# Check if one data type is the same of another
# print(isinstance(string, int)) # --> False

floatnum = float(5**2)
# print(floatnum)  # --> 25.0

string = 'hellomynameis'
# print(string[0:1])  # --> h , returns 1st letter




#  Lists (array)
lst = [1, 2, 3, 4]
# can reassign items in an list
lst[0] = 2
# print(lst) # --> [2, 2, 3, 4]

lst.append(1)
# print(lst)  # --> like push



#  Dictionaries
#  how to make an object in python
dictionary = dict(key =  "value")
print(dictionary)


# Tupple
# a non mutable array
our_tuple = (1, 2, 3 ,4)
print(our_tuple)



#  Sets
my_set = set([1, 2, 3, 4, 4 ,4]) # only one 4, sets are unique
# print(my_set)

my_set.add(5)
# print(my_set) # --> {1, 2, 3, 4, 5}

my_set.discard(4)
# print(my_set) # --> {1, 2, 3, 5}



# Equality Operators
def whatisit(a, b):
    if(not a == b):
        return True
    else:
        return False

# if formatted as a == (not b), we return all false
# print(whatisit(2, 2)) # --> false
# print(whatisit(2, -2)) # --> true
# print(whatisit(2, "3")) # --> true
# print(whatisit([], [])) # --> false



# While statements
i = 0

# can do < 5 for same results
# while i is not 5:
#     print(i)
#     i += 1
# # prints 012345

lst2 = ['hi', 'how', 'are', 'you']
# while i < len(lst2):
#     print(lst2[i])
#     i += 1
# prints 'hi how are you'

### FOR LOOPS ####
#  Range
our_range = range(1,7)
# print(our_range)

# for i in range(0, 2):
#     print(lst2[i])

# our_range = list(range(7))
# print(our_range)


for item in lst2:
    print(item)

