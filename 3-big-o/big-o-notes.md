# Big O Notes 

## Time Complexity 
- **O(1)** Constant (no loops)
- **O(log N)** Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
- **O(n)**  Linear - for loops, while loops through n items
- **O(nlogn)** Log Linear - usually sorting operations 
- **O(n^2)** Quadratic - every element in a collection needs to be compared to every other element. Two nested loops.
- **O(2^n)** Exponential - Recursive algorithms that solves a problem of size N
- **O(n!)** Factorial - Adding a loop for every element
  

Iterating through half a collection -> Still **O(n)**

Two separate collections: **O(a * b)**

### What can cause time in a function?
Operations (+, -, *, /) 
Comparisons ( < ,> , ==)
Looping (for, while)
Outside Function Call (function())


![Big O Cheatsheet](https://miro.medium.com/max/1400/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)

## Rules
1. Always worst Case
2. Remove constants
3. Different inputs should have different variables: **O(a + b)**
   + A and B arrays nested would be **O(a*b)**
   +  \+ for steps in order, * for nested steps.
6. Drop Non-Dominant terms
## Space Complexity 

### What causes Space Complexity?
- Variables
- Data Structures
- Functional Call
- Allocations