import random

import re

dataDict = {}
userDetails = {}
keysList = []


def getEmail():
    regex = '\S+@gmail.com$'
    email = input("Enter your email:  ")
    if re.search(regex, email):
        return email
    else:
        getEmail()


def generateKey():
    openFile = open("BankDetails.txt", "r")
    newDetails = eval(openFile.read())
    uniqueK = random.randint(100, 999)
    if uniqueK not in newDetails.keys():
        return uniqueK
    else:
        generateKey()
    openFile.close()


def Register():
    name = input("enter your name:  ")
    dataDict["Name"] = name
    """email = input("enter your email:  ")"""
    email = getEmail()
    dataDict["Email"] = email
    pwd = input("Choose your password:  ")
    dataDict["Pwd"] = pwd
    PhNo = input("Enter your Phone No:  ")
    dataDict["Phone"] = PhNo
    dataDict["Balance"] = 0
    dataDict["History"] = {}
    openFile = open("BankDetails.txt", "r")
    openFile.seek(0)
    first = openFile.read(1)
    if not first:
        openFile.close()
        openFile = open("BankDetails.txt", "w")
        uniqueK = random.randint(100, 999)
        userDetails[uniqueK] = dataDict
        openFile.write(str(userDetails))
        openFile.close()
    else:
        openFile.close()
        openFile = open("BankDetails.txt", "r")
        newDetails = eval(openFile.read())
        openFile.close()
        uniqueK = generateKey()
        userDetails[uniqueK] = dataDict
        newDetails.update(userDetails)
        openFile = open("BankDetails.txt", "w+")
        openFile.write(str(newDetails))
        openFile.close()
    print("your username: ", uniqueK)


def Login():
    userName = int(input("Username:  "))
    password = str(input("password:  "))
    openFile = open("BankDetails.txt", "r")
    newDetails = eval(openFile.read())
    openFile.close()
    keyD = list(newDetails.keys())
    for i in range(len(newDetails)):
        if userName == keyD[i]:
            valueD = newDetails[userName]
            if valueD["Pwd"] == password:
                print("Hi, ",newDetails[userName]["Name"])
                Need = "yes"
                while Need == "yes":
                    print("Choose operation:\n1.Check Balance\n2.Deposit\n3.Withdraw")
                    choice = int(input())
                    if choice == 1:
                        checkBalance(userName)
                    elif choice == 2:
                        Deposit(userName)
                    elif choice == 3:
                        Withdraw(userName)
                    Need = input("Do you want to continue(yes/no):  ")
            else:
                print("Invalid password")
                Login()
            break
    else:
        print("Invalid Username")
        Login()


def checkBalance(user):
    openFile = open("BankDetails.txt", "r")
    newDetails = eval(openFile.read())
    openFile.close()
    accountBalance = newDetails[user]["Balance"]
    print("Your account balance is ",accountBalance)


def Deposit(user):
    openFile = open("BankDetails.txt", "r")
    newDetails = eval(openFile.read())
    openFile.close()
    amountDeposit = int(input("Enter the Amount:  "))
    Balance = newDetails[user]["Balance"]
    Balance += amountDeposit
    newDetails[user]["Balance"] = Balance
    openFile = open("BankDetails.txt", "w")
    openFile.write(str(newDetails))
    print("Deposit completed successfully")
    print("Your account balance is ",Balance)
    openFile.close()


def Withdraw(user):
    openFile = open("BankDetails.txt", "r")
    newDetails = eval(openFile.read())
    openFile.close()
    amountWithdraw = int(input("Enter the amount"))
    Balance = newDetails[user]["Balance"]
    if Balance > 10000:
        Balance -= amountWithdraw
        newDetails[user]["Balance"] = Balance
        openFile = open("BankDetails.txt", "w")
        openFile.write(str(newDetails))
        print("Transaction completed successfully")
        print("Your account balance is ", Balance)
        openFile.close()
    else:
        print("Low Balance Alert!!!")
        print("Minimum Balance 10000 should be maintained in the account")
        Withdraw(user)




choice = "yes"
while choice == "yes":
    print("Namaste! Welcome to Thanu's Bank Application")
    print("Choose operation:\n1.Register\n2.Login\n")
    operation = int(input())
    if operation == 1:
        Register()
    elif operation == 2:
        Login()
    else:
        print("Invalid Operation\n")
    choice = input("Would you like to Register/Login (yes/no):  ")
