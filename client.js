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

const employeeBonus = [];


// processing employee bonuses

function runIt() {
  for (let index = 0; index < employees.length; index++) {
  const element = employees[index];
  calculateBonus(element);
}
return true;
}


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

// final bonus percentage 
function bonusPercentage(employees){
  
  const final = rawPercentage(employees) + richModifier(employees) + senorityModifier(employees);
  
  if (final > 0.13) {
    return 0.13
  } else {
    if (final <= 0.00) {
      return 0.00
    } else {
    return final
  }
}
}
// bonus modifiers
function senorityModifier(employees){

  const string = employees.employeeNumber

  if (string.length === 4){
    return 0.05;
  } else {
    return 0.00;
  }
}
// bonus modifiers
function richModifier(employees){
  if (employees.annualSalary > 65000) {
    return -0.01;
  } else {
    return 0.00;
  }
}
// initial bonus percentage
function rawPercentage(employees){
 

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
// final percent times salary
function totalBonuses(employees){
  return employees.annualSalary * bonusPercentage(employees);
}
// salary plus total bonus
function totalCompensation(employees){
  return Number(employees.annualSalary) + Number(totalBonuses(employees));
}


runIt();
console.log(employeeBonus);
