# Problem-Solving-Intermediate-Skills-Certification-Test

# 1. User-Friendly Password System
A website is programming an authentication system that will accept a password either if it's the correct password orf it's the correct password with a single character appended to it. In this challenge, your task is to implement such a system, specifically using a hashing function. Given a list of events in which either a password is set or authorization is attempted, determine if each authorization attempt will be successful or not.

The hashing function that will be used in this problem is as follows. Let f(x) be a function that takes a character and returns its decimal character code in the ASCII table. For instance f('a') = 97, f('B') = 66, and f('9') = 57. (You can find all ASCII character codes here: ASCII table.) Then, let h(s) be the hashing function that takes a string and hashes it in the following way, where p = 131 and M = 10°+7:

f(s) <= (sfO]*PO™) + sf1}*PO?) + s[2]*P) +... + s[n-2]*P + s[n-1]) mod M

For instance, if s = "cAr1", then the formula would be as follows:

h(s) = (Fc’)*1313 + f(AY*1312 + f('r)*131 + £('1)) mod 109*7 = 223691457

![1](https://user-images.githubusercontent.com/20350374/147369844-a3e1d2f6-f2c5-44f1-acff-687543479fd2.png)

![2](https://user-images.githubusercontent.com/20350374/147369848-4448a73b-bc3f-4a6a-84d2-fd6d17164cbc.png)

![3](https://user-images.githubusercontent.com/20350374/147369853-853eead1-907f-43d5-bb33-c9fd8b2b0e47.png)

# 2. File Renaming
You want to rename a certain file on your computer. However, because of a glitch, you can't rename it to whatever you want—you can only delete characters from the old file name. In other words, the new file name must be a subsequence of the original file name.

Given the original file name, as well as the file name you'd like to change it to, how many ways are there to create the new file name by just removing characters?

Note: Because the number of ways may be large, return the answer modulo 10°+7.

For example, let's say you want the new file name to be newName = "aba". Currently, the oldName = ‘ababa’. There are a total of 4 subsequences within the old file name that would form the new file name:

+ "abate"
+ "ababa"
+ "ebaba"
+ "ababa"

Therefore, the answer is 4 modulo 109+7

![2_1](https://user-images.githubusercontent.com/20350374/147369859-cfe9d5a7-6044-4c62-94a3-3b0723a1985a.png)
![2_2](https://user-images.githubusercontent.com/20350374/147369863-7b778ea4-75ac-4df9-8b69-62bf7b47743c.png)


