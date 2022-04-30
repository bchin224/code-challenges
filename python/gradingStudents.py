def gradingStudents(grades):
    result = []
    # for every grade
    for grade in grades:
        # if grade is above 38
        if grade >= 38:
            # get the remainder to check if multiple of 5
            mod5 = grade % 5
            
            # if remainder is greater than 3
            if mod5 >= 3:
                # add remainder to grade (roound up)
                grade += 5-mod5
        # add adjusted grade to results array
        result.append(grade)
    return result