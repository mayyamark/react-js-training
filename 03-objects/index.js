const person = {
  age: 28,
  firstName: "Terry",
  lastName: "Hickman",
  skills: ["JavaScript", "Golang", "Python"],
  jobTitle: "Software Consultant"
};

// const skills = person.skills;
// console.log(skills);

// delete person.skills;
// console.log(person);

const { skills, ...modifiedPerson } = person;
console.log(modifiedPerson, person);

const copy = {
  ...person,
  skills: [...person.skills, "PHP"],
};

const copyDeep = JSON.parse(JSON.stringify(person));
copyDeep.firstName = "Pesho";

console.log(person, copy, copyDeep);

console.log(Object.keys(person).length > 0);
console.log(Object.values(person));
console.log(Object.entries(person));