# WEEK1 CODE CHALLENGE
creating a grade calculator 
creating a net salary calculator
creating a speed detector
# Steps to follow to create files and open the Visual Studio code 
fork a repository and using your terminal create 3 files inside the repository.
the first file is the grade calculator, the second is net-salary-income and the third is speed-detector
finally, run "code ." in the repository that you cloned into containing the three files to enter the text editor.
# grade calculator 
The function grading determines the letter grade (A, B, C, D, or E) of a student based on their mark, which is provided as input.
First, it checks if the input mark is a valid number between 0 and 100. 
If the mark is valid, it then checks which grade range the mark falls into and prints the corresponding grade.
## net salary calculator
The program gets the basic salary and benefits from the user.
It then calculates the gross salary by adding the basic salary and benefits.
To calculate the PAYE, the program uses a tiered tax system. If the gross salary is less than or equal to 252,712, the PAYE is 0. If the gross salary is between 252,713 and 473,752, the PAYE is 25% of the amount over 252,712. If the gross salary is between 473,753 and 947,520, the PAYE is 30% of the amount over 473,752. If the gross salary is greater than 947,520, the PAYE is 35% of the amount over 947,520.
The program then calculates the NHIF deductions by multiplying the gross salary by 0.06.
The program then calculates the net salary by subtracting the PAYE, NHIF deductions, and NSSF deductions from the gross salary.
Finally, the program displays the results to the user.
## speed detector 
Create a function that defines two constants: speedLimit and kmPerPoint. The speed limit constant represents the speed limit, and the kmPerPoint constant represents the number of kilometers per demerit point.
The function then checks if the speed is less than the speed limit. If it is, the function prints the message "Ok".
Otherwise, the function calculates the number of demerit points by subtracting the speed limit from the speed and dividing it by the kmPerPoint constant.
The function then checks if the number of demerit points is greater than 12. If it is, the function prints the message "License suspended".
Otherwise, the function prints the number of demerit points.


after you are done with your work, you git add ., git commit -m, and git push your work to GitHub.
license **MIT**.


