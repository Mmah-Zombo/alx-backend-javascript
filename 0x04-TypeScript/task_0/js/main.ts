export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creates two students
export const student1: Student = {
    firstName: "Linda",
    lastName: "Smith",
    age: 21,
    location: "Goderich",
};

export const student2: Student = {
    firstName: "Mariam",
    lastName: "Windsor",
    age: 19,
    location: "Berverly Hills",
};

// adds the two students to studentsList
const studentsList: Student[] = [student1, student2]

// creates a table and header
const table = document.createElement('table');
const hrow = document.createElement('tr');
const header = document.createElement('th');

// adds content to the table header/heading
header.textContent = 'First Name';
hrow.append(header);
header.textContent = 'Location';
hrow.append(header);

// adds each student's firstname and location to the table in two columns
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCol = document.createElement('td');
    const locationCol = document.createElement('td');
    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;

    row.append(nameCol, locationCol);
    table.append(row);
}
)