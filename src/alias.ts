type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// challenge
type Employee = { id: number; name: string; department: string };

type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const printStaffDetails = (staff: Staff): void => {
  if ("employees" in staff) {
    console.log(
      `Manager ${staff.name} has ${staff.employees.length} employees`
    );
  } else {
    console.log(`Employee ${staff.name} works in ${staff.department}`);
  }
};

printStaffDetails({
  id: 1,
  name: "john",
  employees: [
    {
      id: 1,
      name: "john",
      department: "Engineering",
    },
    {
      id: 2,
      name: "susan",
      department: "Engineering",
    },
  ],
});

//intersection type
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = { id: 1, name: "book1", price: 10 };
const book2: Book = { id: 2, name: "book2", price: 20 };

// const discountedBook: Book & { discount: number } = {
//   id: 3,
//   name: "book3",
//   price: 25,
//   discount: 0.15,
// };

const discountedBook: DiscountedBook = {
  id: 3,
  name: "book3",
  price: 25,
  discount: 0.15,
};

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
