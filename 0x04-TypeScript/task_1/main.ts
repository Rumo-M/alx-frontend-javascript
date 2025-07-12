// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Allow any additional properties (index signature)
  [key: string]: any;
}

// Create an object that follows the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra dynamic property
};

// Output the object
console.log(teacher3);
