function sayHi(name: string) {
  console.log(`Hello ${name}`);
}

//-any
//- config
//- type

sayHi("john");
// sayHi(2);

//functions return
function calculateDiscount(price: number): number {
  const hasDiscount: boolean = true;
  if (hasDiscount) {
    // return "discount applied";
    return price;
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

//challenge

let names: string[] = ["Aman", "Arun", "Ajith", "Amruth"];

const checkNames = (name: string): boolean => {
  return names.includes(name);
};

console.log(checkNames("Aman"));
console.log(checkNames("Ajith"));
// console.log(checkNames(20));

//optional and default parameters
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

//default parameter
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((prev, curr) => prev + curr, 0);

  return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result);

//challenge
function processInput(input: string | number): void {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10);
processInput("abc");

//objects
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

//alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: "aman",
  age: 10,
};

createStudent(newStudent);
// createStudent({ id: 1, name: "bob", age: 20 });

//challenge
const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number => {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
};

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));
