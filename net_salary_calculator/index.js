// JavaScript program to calculate net salary

// This line declares the program as a JavaScript program.

// Get inputs from user
const basicSalary = 600000;// input your basic salary 
const benefits = 50000;//input your benefits

// These two lines declare two variables, `basicSalary` and `benefits`. These variables will store the user's basic salary and benefits, respectively.

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// This line calculates the gross salary by adding the basic salary and benefits.

// Calculate PAYE
let payee = 0;
if (grossSalary <= 252,712) {
 payee = 0;//if your grossSalary is below 252712 then you don't pay for the payee
} else if (grossSalary <= 473,752) {
 payee = (grossSalary - 252,712) * 0.25;
} else if (grossSalary <= 947,520) {
 payee = (grossSalary - 473,752) * 0.30;
} else {
 payee = (grossSalary - 947,520) * 0.35;
}

// This section of code calculates the PAYE, which is the tax that employees have to pay to the government. The PAYE is calculated based on the employee's gross salary.

// The first line declares a variable called `payee` and initializes it to 0. This variable will store the amount of PAYE that the employee has to pay.

// The next four lines are if statements that check the employee's gross salary and calculate the PAYE accordingly.

// If the employee's gross salary is less than or equal to 252,712, then the employee does not have to pay any PAYE.

// If the employee's gross salary is between 252,713 and 473,752, then the employee has to pay 25% of the amount over 252,712 in PAYE.

// If the employee's gross salary is between 473,753 and 947,520, then the employee has to pay 30% of the amount over 473,752 in PAYE.

// If the employee's gross salary is greater than 947,520, then the employee has to pay 35% of the amount over 947,520 in PAYE.

// Calculate NHIF deductions
const nhifDeductions = grossSalary * 0.06;

// This line calculates the NHIF deductions, which is the contribution that employees make to the National Hospital Insurance Fund. The NHIF deductions are calculated based on the employee's gross salary.

// Calculate NSSF deductions
const nssfDeductions = grossSalary * 0.06;

// This line calculates the NSSF deductions, which is the contribution that employees make to the National Social Security Fund. The NSSF deductions are calculated based on the employee's gross salary.

// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// This line calculates the net salary by subtracting the PAYE, NHIF deductions, and NSSF deductions from the gross salary.

// Display results
console.log(`Gross salary: ${grossSalary}`);
console.log(`PAYE: ${payee}`);
console.log(`NHIF deductions: ${nhifDeductions}`);
console.log(`NSSF deductions: ${nssfDeductions}`);
console.log(`Net salary: ${netSalary}`);

// These five lines display the results of the program to the user.

