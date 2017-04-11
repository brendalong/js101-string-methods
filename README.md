# JS101 String Methods

What is a method?

All string methods return a __new string__. Strings can only be replaced (not changed)

* length
```
myString.length
```

* indexOf() - returns location of first occurance of string __or__
lastIndexOf() to get last occurance
```
var position = str.indexOf("myString");
```

### Extracting parts of a string
* slice(x, y) - returns the extracted part (slices out)
    - x is the starting position
    - y is the ending position (does not include end value in the return)
    - use negative values to count from end

* slice(x) - pass one parameter
    - returns the remaining part of the string

* substr(x, y) - second parameter specifics the __length__ of the extracted part.

### More methods - some accept parameters
* replace(x ,y) - replaces x with y
* replace(/x/g, y) - can accept regular expression and global. Returns new string.
* toUpperCase()
* toLowerCase()
* concat(x, y) - join x and y into a string (same as using the plus sign)
* charAt(x) - return the character at position x
* split() - convert string to array. Accepts character to split on surrounded by quotes. Empty quotes will return each character.
