let grades = [73, 67, 38, 33]

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38 ) { continue }
        let nextMultiple = grades[i]

        while (nextMultiple % 5 != 0) {
            nextMultiple++
        }

        if (nextMultiple - grades[i] < 3) {
            grades[i] = nextMultiple
        }
    }
    console.log(grades)
    return grades
}

gradingStudents(grades)