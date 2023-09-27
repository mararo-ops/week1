function grading(mark) {
    // Input validation
    if (typeof mark !== "number" || mark < 0 || mark > 100) {
        console.error('Invalid input: Please provide a mark between 0 and 100.');
        return; // Exit the function early due to invalid input
    }        
    if (mark >= 80 && mark <= 100) {
        console.log('A'); // marks above 79 get an A. so grade A starts from 80 all the way up to 100.
    } else if (mark >= 60 && mark <= 79) {
        console.log('B'); // marks starting from 60 all the way up to 79 give us a grade B.
    } else if (mark >= 50 && mark <= 59) {
        console.log('C'); // marks above 49 and below 60 get a C. so grade C starts from 50 all the way up to 59
    } else if (mark >= 40 && mark <= 49) {
        console.log('D'); // marks starting from 40 all the way up to 49 give us a grade D.
    } else if (mark >= o && mark <= 40){
        console.log('E'); // marks starting from 0 all the way upto 40 give us a grade E
    } 
}

grading(90); // This will print based on the given mark value of 90.