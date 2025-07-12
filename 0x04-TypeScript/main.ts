// Define a Student interface with the required fields
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "Cape Town",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Durban",
};

// Add the students to an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

// Create a header row
const headerRow: HTMLTableRowElement = document.createElement("tr");

const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "8px";

const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Loop through the array and add each student to the table
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const nameCell: HTMLTableCellElement = document.createElement("td");
  nameCell.textContent = student.firstName;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
