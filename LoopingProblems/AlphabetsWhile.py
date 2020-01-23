"""Write a program to print all alphabets from a to z. - using while loop
Positive TC:
Output: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Negative TC:
Output: 65 66 67 68 
"""
alphabet1 = 65
while alphabet1 in range(65, 91):
    print(chr(alphabet1), end=" ")
    alphabet1 += 1
