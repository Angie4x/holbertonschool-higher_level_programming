#!/usr/bin/python3
def print_last_digit(number):
    if number < 0:
        numbern = number % -10
        numbern = numbern * -1
    else:
        numbern = number % 10
    print("{}".format(numbern), end="")
    return numbern
