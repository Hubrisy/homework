const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921 
    };
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

//task #1
function getMyTaxes(salary){
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine,1200));

//task #2
function getMiddleTaxes(){
    return this.middleSalary * this.tax
}
console.log(getMiddleTaxes.call(ukraine));

//task #3
function getTotalTaxes(){
    return (this.middleSalary * this.tax)*this.vacancies;
}
console.log(getTotalTaxes.call(ukraine));

// task #4
function getInfo(){
    const minSalary = 1500;
    const maxSalary = 2000;
    const taxes = Math.round(this.tax * (Math.random()*(maxSalary - minSalary)+ minSalary));
    const profit = Math.round((Math.random()*(maxSalary - minSalary)+ minSalary) - taxes);

    console.log(taxes);
    console.log(profit);
}
//getInfo.call(ukraine);
setInterval(() => getInfo.call(ukraine),10000);