const Me = {
  name: "Ivan",
  surname: "Shishov",
  age: 22,
  gender: "male",
  getFullName: function (myName) {
    console.log(`Hello ${myName}`);
  },
};

Me.getFullName(Me.name);

let adminsCount = 0;

const Users = [
  {
    name: "Ivan",
    age: 22,
    isAdmin: true,
  },
  {
    name: "Sanya",
    age: 22,
    isAdmin: false,
  },
  {
    name: "Vasya",
    age: 22,
    isAdmin: false,
  },
  {
    name: "Petya",
    age: 22,
    isAdmin: true,
  },
  {
    name: "Kolya",
    age: 22,
    isAdmin: false,
  },
];

for (let i = 0; i < Users.length; i++) {
  if (Users[i].isAdmin === true) {
    adminsCount++;
  } else console.log("Sorry, u are not an admin");
}

console.log(adminsCount);
