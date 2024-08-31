#!/usr/bin/env python3

# display a welcome message
print("The Miles Per Gallon program")
print()

user_input = "y"

while (user_input.lower() == "y"):
    # get input from the user
    miles_driven = float(input("Enter miles driven:             "))
    gallons_used = float(input("Enter gallons of gas used:      "))
    gas_cost = float(input("Enter cost of a gallon of gas:  "))

    if miles_driven <= 0:
        print("Miles driven must be greater than zero. Please try again.")
    elif gallons_used <= 0:
        print("Gallons used must be greater than zero. Please try again.")
    elif gas_cost <= 0:
        print("Cost per gallon must be greater than zero. Please try again.")
    else:
        # calculate and display miles per gallon
        mpg = round(miles_driven / gallons_used, 2)
        cost_total = round(gallons_used * gas_cost, 1)
        cost_per_mile = round(cost_total / miles_driven, 1)
        print("Miles Per Gallon:              ", mpg)
        print("Total Cost:                    ", cost_total)
        print("Cost Per Mile:                 ", cost_per_mile)
    print()
    user_input = input("Get entries for another trip? (y/n) ")

print()
print("Bye!")

