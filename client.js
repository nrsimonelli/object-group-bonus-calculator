const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// processing employee bonuses
  for (let index = 0; index < employees.length; index++) {
  const element = employees[index];
}

// function logic
const employeeBonus = [];

function calculateBonus (employees){
  const newObject = {
    name: employees.name,
    totalBonus: totalBonuses(employees),
    bonusPercentage: bonusPercentage(employees),
    totalCompensation: totalCompensation(employees)
    
  }
  employeeBonus.push(newObject);
  return true;
}
console.log(calculateBonus(employees[0]));
console.log(employeeBonus);


function totalBonuses(employees){
if (employees.reviewRating <= 2) {
  return employees.annualSalary * 0;
  } else {
    if (employees.reviewRating === 3) {
      return employees.annualSalary * 0.04;
    } else {
      if (employees.reviewRating === 4) {
        return employees.annualSalary * 0.06;
      } else{
        return employees.annualSalary * 0.10;
      }
  } 
  }
}


function bonusPercentage(employees){
  if (employees.reviewRating <= 2) {
    return 0;
    } else {
      if (employees.reviewRating === 3) {
        return 0.04;
      } else {
        if (employees.reviewRating === 4) {
          return 0.06;
        } else{
          return 0.10;
        }
    } 
    }
  }

function totalCompensation(employees){
  if (employees.reviewRating <= 2) {
    return Number(employees.annualSalary * 0) + Number(employees.annualSalary);
    } else {
      if (employees.reviewRating === 3) {
        return Number(employees.annualSalary) + Number(employees.annualSalary) * 0.04;
      } else {
        if (employees.reviewRating === 4) {
          return Number(employees.annualSalary) + Number(employees.annualSalary) * 0.06;
        } else{
          return Number(employees.annualSalary) + Number(employees.annualSalary * 0.10);
        }
    } 
    }
  }

