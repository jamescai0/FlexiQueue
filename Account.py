#creating login account
def new_account:
    username = raw_input("Create Username: ")
    password = raw_input("Create Password: ")
    store_u = []
    store_p = []

    if username in store_u:
        print "Account already exists. Please try again."
        return False
    else:
        store_u.append(username)
        store_p.append(password)
        return True


    