def fill_tuple(tup, val, length):
#   result to store modified tuples
  result = []

#   for each tuple in the tuple of tuples
  for t in tup:
#     see if len is less than length param
        if len(t) < length:
#     	  append val multipled by the difference between curr. len and length param
           t = t + (val,) * (length - len(t))
#   append modified tuple to result list,
           result.append(t[:length])
  return tuple(result)
