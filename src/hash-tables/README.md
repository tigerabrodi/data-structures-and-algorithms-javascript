# Hash Tables

Hash tables are a data structure that maps keys to values for highly efficient lookup. There are a few different ways to implement a hash table, but the most common is to use an array of linked lists along with a **hash function** that converts a key into an array index.

To visualize a hash table, imagine a bookshelf. When you want to find a book, you first need to know which shelf it's on. Then, you can go directly to that shelf, and look through the books on that shelf to find the book you want.

The look up of the shelf is analagous to the hash function, and the search through the books is analagous to the linked list search.

```
[
	Shelf 1: Book 1 -> Book 2 -> Book 3
	Shelf 2: Book 4 -> Book 5 -> Book 6
	Shelf 3: Book 7 -> Book 8 -> Book 9
]
```

Each book on the same shelf has the same hash value.

To know the exact book you're looking for, you would look for the book's title for each on the shelf. This is analagous to the linked list search.

# Hash Functions

A hash function is a function that takes in a key and returns an index. The hash function should be deterministic. This means that the same key should always return the same index.

For example, if we use ASCII, we can sum up the ASCII values of the characters in the key. Then we can use the modulo operator to get the remainder of the sum divided by the size of the array. This will give us an index.

Let's say we have an array with size 3.

Now we got the key "foo". For example purposes, let's say the ASCII values of the characters in the key "foo" is 300. 300 % 3 = 0. So we can store the value in the array at index 0.

The same would be true for a key with same letters, but in a different order. For example, "ofo" would also have a sum of 300. 300 % 3 = 0.

Had the value been 301, we would have stored the value in the array at index 1, because remainder of 301 % 3 = 1.

# Resizing

Resizing a hash table is important for maintaining its efficiency. Resizing occurs when the load factor (the ratio of the number of entries to the number of buckets) exceeds a certain threshold, commonly 0.7 or 75%. The primary goal is to reduce the number of collisions and maintain the time complexity of operations close to O(1).

## Steps in Resizing a Hash Table

1. **Allocate New, Larger Array:**

   - A new array, typically twice the size of the original, is allocated. This helps spread out the data more thinly, reducing collisions.

2. **Rehash All Entries:**

   - **Crucial Step:** Each existing entry must be rehashed according to the new array size. This is necessary because the hash values (array indices) are dependent on the array size.
   - **Process:** Iterate through the old array, compute the new index for each element using the hash function (adjusted for the new size), and insert it into the new array.

3. **Handle Collisions Anew:**

   - Even with a new array, collisions will occur and need to be handled using the chosen method (chaining or open addressing).

4. **Deallocate Old Array:**
   - Once all entries are moved to the new array, the memory allocated for the old array is deallocated (in languages where manual memory management is required).
