// Interface describing the constructor parameters
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class shape (properties & methods)
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.displayName());    // Alice
console.log(student.workOnHomework()); // Currently working
