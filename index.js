const Members = [
  {
    "firstName": "Ben",
    "lastName": "Ofili",
    "occupation": "Software Developer",
    "phoneNumber": "08089999999",
  },
  {
    "firstName": "Ruth",
    "lastName": "Ofili",
    "occupation": "Accountant",
    "phoneNumber": "08019090999",
  },
  {
    "firstName": "Chuka",
    "lastName": "Okrika",
    "occupation": "Data Scientist",
    "phoneNumber": "08099098888",
  },
  {
    "firstName": "Khal",
    "lastName": "Drogo",
    "occupation": "UI/UX Developer",
    "phoneNumber": "08019090350",
  },
  {
    "firstName": "Tyrion",
    "lastName": "Lanister",
    "occupation": "Junoir Developer",
    "phoneNumber": "08019090072",
  },
  {
    "firstName": "John",
    "lastName": "Snow",
    "occupation": "Safety Officer",
    "phoneNumber": "08019090016",
  },

]


// sorting array by firstName 
Members.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);


// appending array into table
const table = document.getElementById('Table');
Members.map(member => {
  const tr = document.createElement('tr');
  tr.innerHTML = '<td>' + member.firstName + '</td>' +
    '<td>' + member.lastName + '</td>' +
    '<td>' + member.occupation + '</td>' +
    '<td>' + member.phoneNumber + '</td>';
  table.appendChild(tr);
})


