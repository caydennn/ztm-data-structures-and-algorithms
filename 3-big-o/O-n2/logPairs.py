boxes = [1,2,3,4,5]
def logAllPairsOfArray(array):
  for i in range(len(array)):
    for j in range(len(array)):
      print(boxes[i], boxes[j])

logAllPairsOfArray(boxes)