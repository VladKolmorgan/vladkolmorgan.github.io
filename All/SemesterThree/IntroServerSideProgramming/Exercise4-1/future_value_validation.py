#!/usr/bin/env python3

def get_float(prompt, low, high):
    amount_verify = False
    while (amount_verify == False):
        amount = float(input(prompt))
        if amount > low and amount <= high:
            amount_verify = True
            return amount
        else:
            print("Entry must be greater than", low,
                  "and less than or equal to", high)

def get_int(prompt, low, high):
    amount_verify = False
    while (amount_verify == False):
        amount = int(input(prompt))
        if amount > low and amount <= high:
            amount_verify = True
            return amount
        else:
            print("Entry must be greater than", low,
                  "and less than or equal to", high)

def main():
    choice = "y"
    while choice.lower() == "y":
        test_float = get_float("Enter Float", 0, 1000)
        print("Float: ", test_float)
        test_int = get_int("Enter Int", 0, 50)
        print("Integer: ", test_int)
        # see if the user wants to continue
        choice = input("Continue? (y/n): ")
        print()

    print("Bye!")
    
if __name__ == "__main__":
    main()