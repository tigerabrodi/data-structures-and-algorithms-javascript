# Arrays

There are static and dynamic arrays.

Arrays are a collection of items. They are stored in contiguous memory locations. Meaning, they are stored one after the other in memory.

Different systems take different amount of bytes for a single number. For example, a 32-bit system takes 4 bytes for a number. A 64-bit system takes 8 bytes for a number.

So, for example in a 64 bit system, if you have an array of 4 numbers, it will take 32 bytes of memory.

# Arrays in dynamic languages

Arrays in languages like JavaScript are dynamic. They tend to fool you into thinking they are more efficient than they are.

For example, if you have an array of 4 numbers, it will take 32 bytes of memory. But if you add a 5th number, it will create a new array of 8 numbers and copy the first 4 numbers into it. Then, it will add the 5th number. So, it will take 64 bytes of memory.

How dynamic arrays work: They create a new array with double the size of the old array. Then, they copy the old array into the new array. Then, they add the new item.

# Arrays in static languages

In languages like C, arrays are static. They are fixed in size. You have to specify the size of the array when you create it.

# Big O Notation

To understand the Big O of arrays, we need to understand how arrays work in memory.

For example, initializing an array takes O(n) time because it has to go over each item and store each byte in memory. A byte is 8 bits. A bit is a 0 or a 1.

The program has to go and find a row of memory that is empty and has enough space for the array. Then, it has to go over each item and store it in memory.

So if the array has to get larger because you add an item, it has to copy the array into a new array, add the new item and then find a row of memory that is empty and has enough space for the new array.
