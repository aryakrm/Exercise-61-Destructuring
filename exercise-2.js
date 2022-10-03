const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// console.log(id, firstName, lastName, age);

console.log(Object.entries(person));
for (let entry of Object.entries(person)) {
  let [key, value] = entry;
  console.log(entry[1]);
}
