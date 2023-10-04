// JavaScript program to calculate net salary

// Get inputs from user
const basicSalary = 600000;// input your basic salary 
const benefits = 50000;//input your benefits

// Calculate gross salary
const grossSalary = basicSalary + benefits;

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

// Calculate NHIF deductions
const nhifDeductions = grossSalary * 0.06;

// Calculate NSSF deductions
const nssfDeductions = grossSalary * 0.06;

// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Display results
console.log(`Gross salary: ${grossSalary}`);
console.log(`PAYE: ${payee}`);
console.log(`NHIF deductions: ${nhifDeductions}`);
console.log(`NSSF deductions: ${nssfDeductions}`);
console.log(`Net salary: ${netSalary}`);
