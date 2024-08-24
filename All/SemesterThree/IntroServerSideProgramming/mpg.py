#!/usr/bin/env python3

# display a welcome message
print("The Miles Per Gallon program")
print()

# get input from the user
miles_driven= float(input("Enter miles driven:\t\t"))
gallons_used = float(input("Enter gallons of gas used:\t"))
gas_cost = float(input("Enter cost of a gallon of gas:\t"))

# calculate miles per gallon, total cost, and cost per mile
#mpg = miles_driven / gallons_used
mpg = round(miles_driven / gallons_used, 1)
cost_total = round(gallons_used * gas_cost, 1)
cost_per_mile = round(cost_total / miles_driven, 1)
            
# format and display the result
print()
print(f"Miles Per Gallon:\t\t{mpg}")
print(f"Total Cost:\t\t\t{cost_total}")
print(f"Cost Per Mile:\t\t\t{cost_per_mile}")
print()
print("Bye!")
