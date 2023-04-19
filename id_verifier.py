def verify_id(digits):
    sum = 0
    is_second = False

    for i in range(len(digits)-1,-1,-1):
        d = ord(digits[i]) - ord('0')

        if is_second==True:
            d = d*2

        sum = sum + (d//10)
        sum = sum + (d%10)

        is_second = not is_second

    if sum%10 == 0:
        return True
    else:
        return False