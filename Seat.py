class Seat():
    def __init__(self, tables): #10 tables, arbitrary number of seats
        self.tables = {1 : False, 2 : False, 3 : False, 4 : False, 5 : False, 6 : False, 7 : False, 8 : False, 9 : False, 10 : False}

def reserve(number, user):
    if Seat.tables.get(number) == False:
        Seat.tables.update({number: user})
        print ("Reservation Successful!")
        return Seat.tables
    else:
        print ("Sorry the table you are looking for is unavailable")
        return Seat.tables

def name (tables, number):
    if Seat.tables.get(number) == False:
        Seat.tables.update({number: user})
        print ("Table has yet to be booked")
        return False
    else:
        return Seat.tables.get(number)
    
def cancel (tables, number):
    Seat.tables.update({number: False})
